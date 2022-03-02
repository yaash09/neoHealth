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


export async function deleteEntries(req,res) {
  let name = req.params["name"];
  let id = req.params["id"];

  let route = name+"/"+id
  try{
    let response = await DataService.delete(route)
    if (response.data.RemainingAncestor === null){
      res.json({message:"Deleted successfuly",response:response.data})
    }
  }catch(error){
    res.json({message:"error while executing delete or the object/file is  already deleted",error:error})
  }
 
}
