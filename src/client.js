function client(environment) {
  let api = 'http://api.mayura.dance/wp-json/wp/v2/';
  if (environment === 'local') {
    api = 'http://mayura-server:8888/wp-json/wp/v2/';
  }
  return api;
}

export default client;
