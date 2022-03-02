
import appRouter from '../../site/appRouter.js';
import { filePost, fileDownload } from "./instance.controller"


appRouter.addPostController('/instance', filePost)

appRouter.addGetController('/instance/:instanceid', fileDownload)