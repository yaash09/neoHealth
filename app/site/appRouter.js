import express from 'express';
import app from './../index.js'

let _appRouter = () => {

    return {
        addGetController: (path,verfiyFn, fn = null, prefixPath = '/api') => {
            var router = new express.Router()
            if (fn ===null) {
                router.get(path, verfiyFn);
            }
            else{
                router.get(path, verfiyFn, fn);
            }
            app.use(prefixPath, router)
        },
        addPostController: (path,verfiyFn, fn = null, prefixPath = '/api') => {
            var router = new express.Router()
            if (fn ===null) {
                router.post(path, verfiyFn);
            }
            else{
                router.post(path, verfiyFn, fn);
            }
            app.use(prefixPath, router)
        },
    };


}

const appRouter = _appRouter();
export default appRouter;