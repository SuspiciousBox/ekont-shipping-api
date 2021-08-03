import { Request, Response } from "express";
import axios from "axios";

export default async (req: Request, res: Response) => {
  try {
    const streetsRes = await axios.post(
      "https://ee.econt.com/services/Nomenclatures/NomenclaturesService.getStreets.json",
      {
        countryCode: "BGR",
        cityID: req.body.cityID,
      }
    );
    const streets: Record<string, any>[] = streetsRes.data.streets;

    const result = streets.map(({ id, cityID, name, nameEn }) => ({
      id,
      cityID,
      name,
      nameEn,
    }));
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
