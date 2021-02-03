/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const sanitizeFilename = require(`sanitize-filename`)

exports.onCreateNode = ({
	node,
	actions
}) => {
	const {
		createNodeField
	} = actions
	if (node.internal.type === `DbJson`) {
		const slug = `/project/${sanitizeFilename(node.title)}`;
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

exports.createPages = async ({
	graphql,
	actions
}) => {
	const component = path.resolve(`./src/templates/project.jsx`);
	const {
		createPage
	} = actions
	const result = await graphql(`
{
  allDbJson {
    edges {
      node {
				fields {
					slug
				}
        title
      }
    }
  }
}`)
	result.data.allDbJson.edges.forEach(({
		node: {
			fields: {
				slug,
			},
		}
	}) => {
		createPage({
			path: slug,
			component,
			context: { slug },
		})
	})
}
