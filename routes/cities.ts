import { Request, Response } from "express";
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
  try {
    res.json(result);
  } catch (err) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    console.log(err.request);
  }
};
