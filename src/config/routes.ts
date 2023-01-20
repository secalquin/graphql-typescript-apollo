import { Router } from "express";
import { initGraphql } from "../graphql";

const routes = Router();

routes.use("/graphql", initGraphql);

export default routes;
