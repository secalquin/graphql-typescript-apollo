import dotenv from "dotenv";

dotenv.config();

export const environments = {
  environment: process.env.NODE_ENV,
  port: process.env.SERVER_PORT,
};
