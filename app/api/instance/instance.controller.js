import DataService from "../../service/DataService";
import fs from "fs";

export async function filePost(req, res) {
    try {   
      let response = await DataService.post("instances", req?.files["dicom"].data);
      console.log(JSON.stringify(response.data));
      res.json(response.data);
      }
      catch(error){
          console.log("error", error);
      }
}

export async function fileDownload(req, res) {
  console.log(req);

  let instanceId = req.params["instanceid"];
  var config = {
    responseType: "arraybuffer",
  };

  try {
    let response = await DataService.get(
      `instances/${instanceId}/file`,
      config
    );
    res.writeHeader(200, {
      "Content-Type": "application/dicom",
      "Content-Encoding": "application/gzip",
      "Content-Disposition": `filename="${instanceId}.dcm"`,
    });

    res.write(response.data);
    res.end();
  } catch (error) {
    console.log("error", error);
    res.end();
  }
}

// dicom extension
// export const DICOM_EXTENSION = ".dcm"
