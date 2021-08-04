# **ekont-shipping-api**

## Under Development


- [x] Calculation Reqest and Response
- [x] .map() for filtering the data output
- [x] Heroku deployment
- [x] async/await with try/catch
- [x] README.md
- [x] Error catching
- [x] Additional tests on Calculation with  different values

## Routes Setup (Hardcoded values:"countryCode, mode , shipmentType")

- "./routes/cities"; - Endpoint for cites and their details.

> Sends: | countryCode: "BGR" | 

> Gets: | (city)ID, name, postCode, expressCityDeliveries |
 
- "./routes/offices"; - Endpoint for offices and their details with the option to request output from specific location by using "cityID".

> Sends: | countryCode: "BGR" ; cityID: "input" | 

> Gets: | id, code, name, nameEn |

- "./routes/streets"; -  Endpoint for streets and their details with the option to request output from specific location by using "cityID".

> Sends: | countryCode: "BGR" ; cityID: "input" | 

> Gets: | id, cityID , name, nameEn |

- "./routes/labels"; - Endpoint(Called labels due to the primary function to create shipping labels) for calculating shipping cost to address/office depending on the send data.




## Important Notes about /labels

Example for shiping from and to office:

INPUT:

{"label":{"senderClient":{"name":"Иван Иванов","phones":["0888888888"]},"senderOfficeCode":{"code":"4234"},"senderAddress":{"city":{"name":"Асеновград"}},"receiverClient":{"name":"Димитър Димитров","phones":["0876543210"]},"receiverOfficeCode":{"code":"7020"},"receiverAddress":{"city":{"name":"Русе"}},"packCount":1,"shipmentType":"PACK","weight":46}}

OUTPUT:

        {
            "type": "C",
            "description": "Куриерска услуга - между офисите на куриера над 20 кг",
            "count": 1,
            "paymentSide": "SENDER",
            "price": 29.08,
            "currency": "BGN"
        }



Example to address:

INPUT:

{"label":{"senderClient":{"name":"Иван Иванов","phones":["0888888888"]},"senderOfficeCode":{"code":"4234"},"senderAddress":{"city":{"name":"Асеновград"}},"receiverClient":{"name":"Димитър Димитров","phones":["0876543210"]},"receiverAddress":{"city":{"name":"Русе"},"street":"Муткурова","num":"84","other":"бл. 5, вх. А, ет. 6"},"packCount":1,"shipmentType":"PACK","weight":15}}

OUTPUT:

        {
            "type": "C",
            "description": "Куриерска услуга - от / до офис на куриера до 15 кг",
            "count": 1,
            "paymentSide": "SENDER",
            "price": 21.38,
            "currency": "BGN"
        }


## (Status:UP) Heroku Dyno URLs (https://ekont-shipping-api.herokuapp.com/)

- https://ekont-shipping-api.herokuapp.com/offices
- https://ekont-shipping-api.herokuapp.com/cities
- https://ekont-shipping-api.herokuapp.com/streets
- https://ekont-shipping-api.herokuapp.com/labels

## Used Libraries

-  "@types/cors": "^2.8.12",
-  "@types/express": "^4.17.13",
-  "@types/node": "^16.4.10",
-  "axios": "^0.21.1",
-  "cors": "^2.8.5",
-  "express": "^4.17.1",
-  "ts-node": "^10.1.0",
-  "tsc": "^2.0.3",
-  "typescript": "^4.3.5"

## Used Tools for Code Assistance and Suggestions

- Tabnine PRO 
