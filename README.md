# **ekont-shipping-api**

## Under Development


- [x] Calculation Reqest and Response
- [x] .map() for filtering the data output
- [x] Heroku deployment
- [x] async/await with try/catch
- [x] README.md
- [x] Error catching
- [ ] Additional tests on Calculation with  different values

## Routes Setup

- "./routes/cities"; - Sends: | countryCode: "BGR" | Gets: | (city)ID, name, postCode, expressCityDeliveries |
 
- "./routes/offices"; - Sends: | countryCode: "BGR" ; cityID: "input" | Gets: | id, code, name, nameEn |

- "./routes/streets"; -  Sends: | countryCode: "BGR" ; cityID: "input" | Gets: | id, cityID , name, nameEn 

- "./routes/labels"; - Sends: | label: "Input", mode: "calculate" | Gets: |  Shipping Label with the Price |

## Heroku Dyno URLs (https://ekont-shipping-api.herokuapp.com/)(Status:UP)
- https://ekont-shipping-api.herokuapp.com/offices
- https://ekont-shipping-api.herokuapp.com/cities
- https://ekont-shipping-api.herokuapp.com/streets
- https://ekont-shipping-api.herokuapp.com/labels
