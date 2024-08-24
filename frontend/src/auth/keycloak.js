import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8081/',
  realm: 'test',
  clientId: 'testclient',
});

const initKeycloak = (onAuthenticatedCallback) => {
  keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
    if (authenticated) {
      onAuthenticatedCallback();
    } else {
      window.location.reload();
    }
  });
};

export { keycloak, initKeycloak };
