import DataService from "../../service/DataService";

export async function getEntries(req, res){
  let name = req.params["name"];
  let validRoutes = ["patients", "studies", "series","instances"]

  if (!validRoutes.includes(name)){
    res.json({message:"invalid list request, valid list routes are", validRoutes})
  }
  
  let response = await DataService.get(name)
  res.json(response.data)
}
