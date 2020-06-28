let gtm_auth, gtm_preview;
switch (process.env.DEPLOYMENT_ENVIRONMENT) {
  case "production":
    gtm_auth = "pffTr_uj2bKsrIUauxtMIw";
    gtm_preview = "env-4";
    break;
  case "preview":
    gtm_auth = "vZk4aUHUcKw2coaOzENQpg";
    gtm_preview = "env-5";
    break;
  default:
    gtm_auth = "zvXkA06bJZRp71rIuFlW4Q";
    gtm_preview = "env-3";
    break;
}
module.exports = {
  GTM_ID: "GTM-NXDDDBD",
  GTM_AUTH: gtm_auth,
  GTM_PREVIEW: gtm_preview,
};
