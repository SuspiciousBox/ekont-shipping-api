import type { Request, Response } from "express";
import axios from "axios";

export default async (req: Request, res: Response) => {
  const citiesRes = await axios.post(
    "https://ee.econt.com/services/Nomenclatures/NomenclaturesService.getCities.json",
    {
      countryCode: "BGR",
    }
  );
  const cities: Record<string, any>[] = citiesRes.data.cities;

  const result = cities.map(
    ({ id, name, postCode, expressCityDeliveries }) => ({
      id,
      name,
      postCode,
      expressCityDeliveries,
    })
  );
  res.json(result);
};
