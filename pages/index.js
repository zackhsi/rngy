import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>RNGY</h1>
      <blockquote>
        <p>
          <i>
            The number of eggs laid by a female [milkweed butterfly], who may
            mate several times, ranges from 290 to 1180.
          </i>
        </p>
        <p>
          —{" "}
          <a href="https://en.wikipedia.org/wiki/Monarch_butterfly">
            Wikipedia
          </a>
        </p>
      </blockquote>
    </Layout>
  );
}
