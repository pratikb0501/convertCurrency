const got = require('got');
const HTMLParser = require('node-html-parser');

let currencyCodesArray = ["AFN", "ALL", "DZD", "AOA", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", "BHD", "BBD", "BDT", "BYR", "BZD", "BMD", "BTN", "XBT", "BOB", "BAM", "BWP", "BRL", "BND", "BGN", "BIF", "XPF", "KHR ", "CAD", "CVE", "KYD", "FCFA", "CLP", "CLF", "CNY", "CNY", "COP", "CF", "CDF", "CRC", "HRK", "CUC", "CZK", "DKK", "DJF", "DOP", "XCD", "EGP", "ETB", "FJD", "GMD", "GBP", "GEL", "GHS", "GTQ", " GNF", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "ILS", "JMD", "JPY", "JOD", "KZT", "KES", "KWD", "KGS", "LAK", "LBP", "LSL", "LRD", "LYD", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MRO", "MUR", "MXN", "MDL", "MAD", "MZN", "MMK", "NAD", "NPR", "ANG", "NZD", "NIO", "NGN", "NOK", "OMR", "PKR", "PAB", "PGK", "PYG ", "PHP", "PLN", "QAR", " RON", "RUB", "RWF", "SVC", "SAR", "RSD", "SCR", "SLL", "SGD", "SBD", "SOS", "ZAR", "KRW", "VES", "LKR", "SDG", "SRD", "SZL", "SEK", "CHF", "TJS", "TZS", "THB", "TOP", "TTD", "TND", "TRY", "TMT", "UGX", "UAH", "AED", "USD", "UYU", "UZS", "VND", "XOF", "YER", "ZMW", "ETH", "EUR", "LTC", "TWD", "PEN"]

async function convertCurrency(fromCurrency, toCurrency, amount) {
    let from, to;

    if (!fromCurrency) {
        await throwError("fromCurrency code cannot be blank");
    } else if (currencyCodesArray.includes(fromCurrency)) {
        from = fromCurrency.toUpperCase()
    } else {
        await throwError("Please enter valid 'fromCurrency' code from the currencyList.json file ");
    }

    if (!toCurrency) {
        await throwError("toCurrency code cannot be blank");
    } else if (currencyCodesArray.includes(toCurrency)) {
        to = toCurrency.toUpperCase()
    } else {
        await throwError("Please enter valid 'toCurrency' code from the currencyList.json file ");

    }


    if (amount) {
        if (typeof (amount) !== "number" || amount <= 0) {
            await throwError("Amount must be a valid positive value");
        } else {
            let perUnitPrice = await calcPerUnitPrice(from, to);
            let convertedAmount = (perUnitPrice * amount).toFixed(2);
            return convertedAmount;
        }
    } else {
        let perUnitPrice = await calcPerUnitPrice(from, to)
        return perUnitPrice;
    }
}

async function throwError(message) {
    throw (`${message}`);
}

async function calcPerUnitPrice(from, to) {
    const html = await got(`https://www.google.com/search?q=${from}+to+${to}`);
    const body = HTMLParser.parse(html.body);
    let perUnitPrice = (body.querySelector('.iBp4i').rawText).split(' ')[0];
    return perUnitPrice;
}

module.exports.convertCurrency = convertCurrency;

