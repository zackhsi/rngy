// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const redirectTo = "https://ronggy.com/originals/milkweed";
  res.writeHead(302, { Location: redirectTo });
  res.end();
};
