
import appRouter from '../../site/appRouter.js';
import { getEntries } from "./list.controller"


appRouter.addGetController('/list/:name', getEntries)

