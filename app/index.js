import express from 'express';
import cookieParser from 'cookie-parser';
import glob from 'glob'
import siteRouter from './site/router.js';
import compression from 'compression';
import fileUpload from 'express-fileupload';

let app = express()

app.use(compression({threshold: 0}));
app.use(express.json());

app.use(
  fileUpload()
);

app.use(cookieParser());

app.use(siteRouter)

// Logic to import all controllers
glob("./api/**/*.routes.js", {}, function (er, files) {    
    for(const relControllerPath of files) {
        import(relControllerPath);
    }
  })

app.use(express.static('dist'));

export default app;