import { Request, Response } from "express";
import axios from "axios";

export default async (req: Request, res: Response) => {
  const labelRes = await axios.post(
    "https://ee.econt.com/services/Shipments/LabelService.createLabel.json",
    {
      label: req.body.label,
      senderClient: req.body.senderClient,
      senderAddress: req.body.senderAddress,
      receiverClient: req.body.receiverClient,
      receiverAddress: req.body.receiverAddress,
      shipmentType: "PACK",
      weight: req.body.weight,
      mode: "calculate",
    }
  );
  const result: Record<string, any>[] = labelRes.data.label;

  /*
  const result = label.map(({ label }) => ({
  label,
  }));
  */
  try {
    res.json(result);
  } catch (err) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    console.log(err.request);
  }
};
