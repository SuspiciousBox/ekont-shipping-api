import type { Request, Response } from "express";
import axios from "axios";

export default async (req: Request, res: Response) => {
  const streetsRes = await axios.post(
    "https://ee.econt.com/services/Nomenclatures/NomenclaturesService.getStreets.json",
    {
      countryCode: "BGR",
    }
  );
  const streets: Record<string, any>[] = streetsRes.data.streets;

  const result = streets.map(({ id, cityID, name, nameEn }) => ({
    id,
    cityID,
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
