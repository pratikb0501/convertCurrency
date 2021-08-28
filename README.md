# What is this ?

Package to convert currency using currency code

# Installation

`npm i convertcurrency-p`

Then...

```
const CC = require ('convertcurrency-p')

CC.convertCurrency(fromCurrency,toCurrency,amount)
```

# Options

ConvertCurrency supports an option to just get Price per Unit

```
CC.convertCurrency(fromCurrency,toCurrency)
```
