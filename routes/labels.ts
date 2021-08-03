import { Request, Response } from "express";
import axios from "axios";

export default async (req: Request, res: Response) => {
  try {
    const labelRes = await axios.post(
      "https://ee.econt.com/services/Shipments/LabelService.createLabel.json",
      {
        label: req.body.label,
        senderClient: req.body.senderClient,
        senderOfficeCode: req.body.senderOfficeCode,
        senderAddress: req.body.senderAddress,
        receiverOfficeCode: req.body.receiverOfficeCode,
        receiverClient: req.body.receiverClient,
        receiverAddress: req.body.receiverAddress,
        shipmentType: "PACK",
        weight: req.body.weight,
        mode: "calculate",
      }
    );

    const result: Record<string, any>[] = labelRes.data.label;

    res.json(result).end;
  } catch (error) {
    // Error
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log("Error", error.message);
    }
    console.log(error);
  }
};
