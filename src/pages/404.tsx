import Link from "next/link";
import SEO from "../components/seo";

export default function NotFound() {
  return (
    <>
      <SEO title="404" description="Not found" />
      <main className="index">
        <header className="bio">
          <h1>404</h1>
          <h2>Not found</h2>
          <p>
            <Link href="/">
              <a>back to home</a>
            </Link>
          </p>
        </header>
      </main>
    </>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
