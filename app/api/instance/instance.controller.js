import DataService from "../../service/DataService";
import { DICOM_EXTENSION } from "../../constants/constants";

export async function filePost(req, res) {
  let combinedResponse = [];

  if (req?.files === undefined || Object.keys(req.files).length === 0) {
    res.json("please attach the files to upload");
  }

  await Promise.all(
    Object.keys(req.files).map(async (name) => {
      try {
        let response = await DataService.post(
          "instances",
          req?.files[name].data
        );
        console.log(JSON.stringify(response.data));
        combinedResponse.push(response.data);
      } catch (error) {
        res.json({ response: combinedResponse });
        console.log("error", error);
      }
    })
  );
  res.json({ response: combinedResponse });
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
      "Content-Disposition": `filename="${instanceId}.${DICOM_EXTENSION}"`,
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
