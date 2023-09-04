import { Server } from 'miragejs';

let instance;
function createMockServer() {
  function init() {
    const server = new Server();

    // MockAPI Here
    server.get('/', () => 'Hello MirageJS');

    return server;
  }

  return {
    start: () => {
      if (!instance) instance = init();
      return instance;
    },
  };
}

export default createMockServer;
