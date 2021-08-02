import { Request, Response } from "express";
import axios from "axios";

export default async (req: Request, res: Response) => {
  const labelRes = await axios.post(
    "https://ee.econt.com/services/Shipments/LabelService.createLabel.json",
    {
      label: req.body.label,
      weight: req.body.weight,
      mode: "calculate",
    }
  );
  const result: Record<string, any>[] = labelRes.data.label;

  //const result = label.map(({ label }) => ({
  //label,
  //}));
  res.json(result);
};
