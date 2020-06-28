import { useEffect } from "react";

import { useRouter } from "next/router";

import Layout from "../../components/layout";

const DEFAULT_GOLINK = "https://ronggy.com/";
const GOLINKS = {
  milkweed: "https://ronggy.com/originals/milkweed",
};

const Golink = () => {
  const router = useRouter();
  const { golink } = router.query;
  useEffect(() => {
    dataLayer.push({ golink: golink });
    window.location.replace(GOLINKS[golink] || DEFAULT_GOLINK);
  });
  return (
    <Layout title={"RNGY → " + golink}>
      <p>Redirecting...</p>
    </Layout>
  );
};

export default Golink;
