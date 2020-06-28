import { useEffect } from "react";
import { useRouter } from "next/router";

const DEFAULT_GOLINK = "https://ronggy.com/";
const GOLINKS = {
  milkweed: "https://ronggy.com/originals/milkweed",
};

const Golink = () => {
  const router = useRouter();
  useEffect(() => {
    const { golink } = router.query;
    window.location.replace(GOLINKS[golink] || DEFAULT_GOLINK);
  });
  return <div>Redirecting...</div>;
};

export default Golink;
