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
    try {
    res.json(result);
  } catch (err) {
    console.error(err.message);
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  }
};
