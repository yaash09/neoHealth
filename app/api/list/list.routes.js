
import appRouter from '../../site/appRouter.js';
import { getEntries, deleteEntries } from "./list.controller"


appRouter.addGetController('/list/:name', getEntries)

appRouter.addDeleteController('/list/:name/:id', deleteEntries)
