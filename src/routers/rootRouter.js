import express from "express";
import { fav, home } from "../controllers/songController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/fav", fav);

export default rootRouter;
