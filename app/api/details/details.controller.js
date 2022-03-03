import DataService from "../../service/DataService";

export async function getEntries(req, res) {
  let key=req.route.path.split("/")[1]
  let id = req.params["id"];

  let validRoutes = ["patients", "studies", "series","instances"]

  if (!validRoutes.includes(key)){
    res.json({message:"invalid request, valid routes are", validRoutes})
  }

  try {
    let response = await DataService.get(`${key}/${id}`);
    res.json(response.data);
  } 
  catch (error) {
    res.status(error.status || 404).json({
      message:error.message
    });
  }
}
