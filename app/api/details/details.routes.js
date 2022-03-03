
import appRouter from '../../site/appRouter.js';
import { getEntries } from "./details.controller"


appRouter.addGetController('/patients/:id', getEntries)
appRouter.addGetController('/series/:id', getEntries)
appRouter.addGetController('/studies/:id', getEntries)
appRouter.addGetController('/instances/:id', getEntries)
