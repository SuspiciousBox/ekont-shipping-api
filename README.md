# **ekont-shipping-api**

## Under Development


- [ ] Calculation Reqest and Response
- [x] .map() 
- [x] Heroku deployment
- [x] async/await configuration
- [x] README.md
- [ ] Error catching

## Routes Setup

- "./routes/cities"; - Sends: | countryCode: "BGR" | Gets: | (city)ID, name, postCode, expressCityDeliveries |
 
- "./routes/offices"; - Sends: | countryCode: "BGR" ; cityID: "input" | Gets: | id, code, name, nameEn |

- "./routes/streets"; -  Sends: | countryCode: "BGR" ; cityID: "input" | Gets: | id, cityID , name, nameEn 

- "./routes/labels"; - Sends: | label: "Input", mode: "calculate" | Gets: |  Shipping Label with the Price |

## Heroku Dyno URLs (https://ekont-shipping-api.herokuapp.com/)
- https://ekont-shipping-api.herokuapp.com/offices
- https://ekont-shipping-api.herokuapp.com/cities
- https://ekont-shipping-api.herokuapp.com/streets
- https://ekont-shipping-api.herokuapp.com/labels
