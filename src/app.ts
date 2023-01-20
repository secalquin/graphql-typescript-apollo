import server from "./config/server";
import { environments } from "./config/environments";

const { port } = environments;

server.listen(port, () => {
  console.log(`Server at http://localhost:${port}/api`);
});

export default server;
