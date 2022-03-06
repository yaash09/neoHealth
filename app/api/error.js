import app from "../index"


app.use(/.*/, (req, res) => {
    res.status(404).send({message: "No such route"});
  });