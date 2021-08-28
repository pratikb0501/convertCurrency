# What is this ?

Package to convert currency using currency code

# Installation

`npm i convertcurrency-p`

# Usage

```
const CC = require ('convertcurrency-p')

CC.convertCurrency(fromCurrency,toCurrency,amount)
.then( () => //response)
.catch(() => //error)
```

# Options

ConvertCurrency supports an option to just get Price per Unit

```
CC.convertCurrency(fromCurrency,toCurrency)
```

# Issues

If any issues are found, they can be reported [here](https://github.com/pratikb0501/convertCurrency/issues).

# License

This project is licensed under [MIT](https://github.com/pratikb0501/convertCurrency/blob/master/LICENSE) license.
