import cors from "cors";
import express from "express";
import { server } from "./graphql/schema";

const app = express();
app.use(cors());

server.applyMiddleware({ app });

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
