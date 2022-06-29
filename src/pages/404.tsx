import Link from "next/link";
import { contextHeading, H } from "../components/h";
import SEO from "../components/seo";

export default function NotFound() {
  return (
    <>
      <SEO title="404" description="Not found" />
      <main className="index">
        <header className="bio">
          <contextHeading.Provider value={1}>
            <H>404</H>
            <span className="h">Not found</span>
          </contextHeading.Provider>
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
