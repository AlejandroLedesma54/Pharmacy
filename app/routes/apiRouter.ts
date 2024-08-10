import { Application, Router } from "express";
import productRouter from "./productRouter";

const apiRouter: Router = Router();
apiRouter.use("/product", productRouter);

export default apiRouter;