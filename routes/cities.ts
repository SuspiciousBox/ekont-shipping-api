import type {Request, Response} from "express";
import axios from "axios";

export default async (_req : Request, res : Response) => {
    axios
    .post('https://ee.econt.com/services/Nomenclatures/NomenclaturesService.getCities.json', {
        countryCode: 'BGR'
      })
      .then(response => res.json(response.data))
      .catch(async (error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    });
}
    
  