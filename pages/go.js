import Link from "next/link";

import GOLINKS from "../constants/golinks";
import Layout from "../components/layout";

const Golink = () => {
  return (
    <Layout title="Golinks">
      <table>
        <tr>
          <th>Go Link</th>
          <th>Target</th>
        </tr>
        {Object.keys(GOLINKS).map(function (key, index) {
          return (
            <tr>
              <td>
                <Link href={`/go/${key}`}>
                  <a>{key}</a>
                </Link>
              </td>
              <td>
                <a href={GOLINKS[key]}>{GOLINKS[key]}</a>
              </td>
            </tr>
          );
        })}
      </table>
    </Layout>
  );
};

export default Golink;
