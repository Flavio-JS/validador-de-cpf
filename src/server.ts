import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";
import cpfRoutes from "./routes/verificar-cpf";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use("/verificar-cpf", cpfRoutes);
server.use((req: Request, res: Response) => {
  res.status(404).render("pages/pageNotFind");
});

server.listen(process.env.PORT);
