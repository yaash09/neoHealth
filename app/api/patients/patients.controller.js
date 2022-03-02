import DataService from "../../service/DataService";

export async function getEntries(req, res){
  let patientsId = req.params["patientsId"];
  let response = await DataService.get(`patients/${patientsId}`)
  res.json(response.data)
}
