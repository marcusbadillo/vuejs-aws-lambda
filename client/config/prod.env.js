'use strict'
const APP_URL ='http://vue-micro-blog-prod.s3-website-us-west-1.amazonaws.com/'

module.exports = {
  NODE_ENV: '"production"',
  BACKEND_URL: '"https://whf45v65fg.execute-api.us-east-1.amazonaws.com/latest/micro-posts"',
  AUTH0_CLIENT_ID: '"YK16rFwa5oTIdQsFSfhRRlD1HVdg0jIF"',
  AUTH0_DOMAIN: '"production-micro-blog.auth0.com"',
  AUTH0_LOGOUT_URL: `"${APP_URL}"`,
  AUTH0_CALLBACK_URL: `"${APP_URL}callback"`
}