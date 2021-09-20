export const amplifyConfig = {
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id:
    process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
};

export const auth0Config = {
  client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
};

export const firebaseConfig = {
  apiKey: 'AIzaSyBDtdJhJUuHUGEFW-ViyDxJErx2JoFz8Jw',
  authDomain: 'finding-spaces-73b23.firebaseapp.com',
  databaseURL: 'http://localhost:9000?ns=finding-spaces-73b23',
  projectId: 'finding-spaces-73b23',
  storageBucket: 'finding-spaces-73b23.appspot.com',
  messagingSenderId: '48951865601',
  appId: '1:48951865601:web:2eb4d8a3fe14a1caf22b00',
  measurementId: 'G-7CK0W02CGV',
};

export const gtmConfig = {
  containerId: process.env.REACT_APP_GTM_CONTAINER_ID,
};
