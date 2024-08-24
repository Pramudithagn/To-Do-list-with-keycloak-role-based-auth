export const config = {
    // authority: 'http://localhost:8081/auth/realms/test/',
    authority: 'http://localhost:8081/realms/test/',
    // authority: 'http://localhost:8081/realms/test/protocol/openid-connect/auth',
    client_id: 'testclient',
    redirect_uri: 'http://localhost:5173/callback',
    response_type: 'code',
    // scope: 'openid profile email',
    scope: 'openid profile message.read',
    post_logout_redirect_uri: 'http://localhost:5173',
};
