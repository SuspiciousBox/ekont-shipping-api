# **ekont-shipping-api**

## Under Development


- [ ] Proper Calculation req,res
- [x] .map() 
- [x] Heroku deployment
- [x] Proper async/await configuration
- [x] README.md
- [x] Error catching on every route

## Routes Setup

- "./routes/cities"; - Sends: | countryCode: "BGR" | Gets: | id, name, postCode, expressCityDeliveries |
 
- "./routes/offices"; - Sends: | countryCode: "BGR" ; cityID: "input" | Gets: | id, code, name, nameEn |

- "./routes/streets"; -  Sends: | countryCode: "BGR" | Gets: | id, code, name, nameEn | id, cityID, name, nameEn |

- "./routes/labels"; - Sends: | label: "Input", mode: "calculate" | Gets: | Whole Label with the shipping Price |

## Heroku Dyno URL

- https://ekont-shipping-api.herokuapp.com/
