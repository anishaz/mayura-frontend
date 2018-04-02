function client(environment) {
  let api = 'http://api.mayura.dance/wp-json/';
  if (environment === 'local') {
    api = 'http://mayura-server:8888/wp-json/';
  }
  return api;
}

export default client;
