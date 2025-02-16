export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:  env('PUBLIC_URL', 'strapi-dev-app-aae8hreqarb8cpg3.centralus-01.azurewebsites.net'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
