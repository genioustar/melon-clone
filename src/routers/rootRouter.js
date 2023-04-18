import express from "express";
import { enter, fav, home } from "../controllers/songController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.post("/", home);
rootRouter.get("/fav", fav);
rootRouter.post("/enter", enter);

export default rootRouter;
