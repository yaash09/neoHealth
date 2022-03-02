
import appRouter from '../../site/appRouter.js';
import { getEntries } from "./patients.controller"


appRouter.addGetController('/patients/:patientsId', getEntries)

