// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000',
  spotify: {
    clientId: '6e9b262dcf6e406e84fda5591bda5f2e',
    clientSecret: '46cfe8fa777b4801b3224036b5ef3337',
    redirectUri: 'http://localhost:3000/spotify'
  }
};
