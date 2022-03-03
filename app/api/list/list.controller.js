import DataService from "../../service/DataService";

export async function getEntries(req, res) {
  let name = req.params["name"];
  let validRoutes = ["patients", "studies", "series", "instances"];

  if (!validRoutes.includes(name)) {
    res.json({
      message: "Invalid list request, valid list routes are",
      validRoutes,
    });
  }

  try {
    let response = await DataService.get(name);
    res.json(response.data);
  } catch (error) {
    res.json({ message: error.message });
  }
}

export async function deleteEntries(req, res) {
  let name = req.params["name"];
  let id = req.params["id"];

  let route = name + "/" + id;

  try {
    let response = await DataService.get(name);
    if (response.data.includes(id)) {
      try {
        let response = await DataService.delete(route);
        if (response.data.RemainingAncestor === null) {
          res.json({
            message: "Deleted successfully",
            response: response.data,
          });
        }
      } catch (error) {
        res.json({
          message:
            "Error while executing delete or the object/file is  already deleted",
          error: error,
        });
      }
    } else {
      res
        .status(208)
        .json({ message: " Entity is already deleted or doesn't exist" });
    }
  } catch (error) {
    res.json({ message: "Error while listing entities", error: error });
  }
}
