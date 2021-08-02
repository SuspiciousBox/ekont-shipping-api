import type { Request, Response } from "express";
import axios from "axios";

export default async (req: Request, res: Response) => {
  const officesRes = await axios.post(
    "https://ee.econt.com/services/Nomenclatures/NomenclaturesService.getOffices.json",
    {
      countryCode: "BGR",
      cityID: req.body.cityID,
    }
  );
  const offices: Record<string, any>[] = officesRes.data.offices;

  const result = offices.map(({ id, code, name, nameEn }) => ({
    id,
    code,
    name,
    nameEn,
  }));
  res.json(result);
};
