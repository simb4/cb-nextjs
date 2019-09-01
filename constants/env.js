
const env = process.env.NODE_ENV !== 'production' ? { // dev
  // prod
  // SERVER_URL: 'https://api.1fit.app/api/',

  // local
  // SERVER_URL: 'http://127.0.0.1:8000/api/',

  // dev
  SERVER_URL: 'https://api.dev.1fit.app/api/',

  SITE_URL: 'https://dev.1fit.app',
} : { // prod
  SERVER_URL: 'https://api.1fit.app/api/',
  SITE_URL: 'https://1fit.app',
}

export default env;