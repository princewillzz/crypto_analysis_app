import { useEffect, useState } from 'react';
import { CoinData } from '../interfaces/CoinData';
import { fetchAllCryptoCoins } from '../services/CryptoAPIService';


export const useCoinsData = (): CoinData[] => {

    const [ coinsData, setCoinsData ] = useState<CoinData[]>([]);

    useEffect(() => {
        setCoinsData(demoData.data)
        // fetchAllCryptoCoins()
        //     .then(resData => {
        //         setCoinsData(resData.data)
        //     })
        //     .catch(e => {

        //     })
        return () => {
            setCoinsData([]);
        }
    }, [])

    return coinsData;
}


const demoData = {
    "data": [
    {
    "id": "swedish-krona",
    "symbol": "SEK",
    "currencySymbol": "kr",
    "type": "fiat",
    "rateUsd": "0.1166814852152890"
    },    
    {
    "id": "trinidad-and-tobago-dollar",
    "symbol": "TTD",
    "currencySymbol": "TT$",
    "type": "fiat",
    "rateUsd": "0.1474225670337784"
    },
    {
    "id": "comorian-franc",
    "symbol": "KMF",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "0.0023516966088246"
    },
    {
    "id": "saudi-riyal",
    "symbol": "SAR",
    "currencySymbol": "﷼",
    "type": "fiat",
    "rateUsd": "0.2665871881396427"
    },
    {
    "id": "canadian-dollar",
    "symbol": "CAD",
    "currencySymbol": "$",
    "type": "fiat",
    "rateUsd": "0.8037519139342450"
    },
    {
    "id": "swiss-franc",
    "symbol": "CHF",
    "currencySymbol": "CHF",
    "type": "fiat",
    "rateUsd": "1.0955434388451220"
    },
    {
    "id": "iraqi-dinar",
    "symbol": "IQD",
    "currencySymbol": "د.ع",
    "type": "fiat",
    "rateUsd": "0.0006854449877741"
    },
    {
    "id": "qatari-rial",
    "symbol": "QAR",
    "currencySymbol": "﷼",
    "type": "fiat",
    "rateUsd": "0.2730352316471861"
    },
    {
    "id": "bulgarian-lev",
    "symbol": "BGN",
    "currencySymbol": "лв",
    "type": "fiat",
    "rateUsd": "0.5922714498508956"
    },
    {
    "id": "fijian-dollar",
    "symbol": "FJD",
    "currencySymbol": "$",
    "type": "fiat",
    "rateUsd": "0.4805843906189927"
    },
    {
    "id": "tajikistani-somoni",
    "symbol": "TJS",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "0.0887763126332422"
    },
    {
    "id": "cuban-peso",
    "symbol": "CUP",
    "currencySymbol": "₱",
    "type": "fiat",
    "rateUsd": "0.0388349514563107"
    },
    {
    "id": "afghan-afghani",
    "symbol": "AFN",
    "currencySymbol": "؋ ",
    "type": "fiat",
    "rateUsd": "0.0110864749927483"
    },
    {
    "id": "egyptian-pound",
    "symbol": "EGP",
    "currencySymbol": "£",
    "type": "fiat",
    "rateUsd": "0.0635926003650215"
    },
    {
    "id": "algerian-dinar",
    "symbol": "DZD",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "0.0072994880452963"
    },
    {
    "id": "czech-republic-koruna",
    "symbol": "CZK",
    "currencySymbol": "Kč",
    "type": "fiat",
    "rateUsd": "0.0452806779423102"
    },
    {
    "id": "waves",
    "symbol": "WAVES",
    "currencySymbol": null,
    "type": "crypto",
    "rateUsd": "25.7441391883764779"
    },
    {
    "id": "new-zealand-dollar",
    "symbol": "NZD",
    "currencySymbol": "$",
    "type": "fiat",
    "rateUsd": "0.7136419073364529"
    },
    {
    "id": "zimbabwean-dollar",
    "symbol": "ZWL",
    "currencySymbol": "$",
    "type": "fiat",
    "rateUsd": "0.0031055900621118"
    },
    {
    "id": "yemeni-rial",
    "symbol": "YER",
    "currencySymbol": "﷼",
    "type": "fiat",
    "rateUsd": "0.0039960040279401"
    },
    {
    "id": "armenian-dram",
    "symbol": "AMD",
    "currencySymbol": "֏",
    "type": "fiat",
    "rateUsd": "0.0020926303975496"
    },
    {
    "id": "eritrean-nakfa",
    "symbol": "ERN",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "0.0666639112250027"
    },
    {
    "id": "litecoin",
    "symbol": "LTC",
    "currencySymbol": null,
    "type": "crypto",
    "rateUsd": "199.9140203363250643"
    },
    {
    "id": "moroccan-dirham",
    "symbol": "MAD",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "0.1101975125115501"
    },
    {
    "id": "iranian-rial",
    "symbol": "IRR",
    "currencySymbol": "﷼",
    "type": "fiat",
    "rateUsd": "0.0000236742424242"
    },
    {
    "id": "mexican-peso",
    "symbol": "MXN",
    "currencySymbol": "$",
    "type": "fiat",
    "rateUsd": "0.0478161937860274"
    },
    {
    "id": "zcash",
    "symbol": "ZEC",
    "currencySymbol": null,
    "type": "crypto",
    "rateUsd": "165.3544772784558124"
    },
    {
    "id": "united-arab-emirates-dirham",
    "symbol": "AED",
    "currencySymbol": "فلس",
    "type": "fiat",
    "rateUsd": "0.2722570106180234"
    },
    {
    "id": "lebanese-pound",
    "symbol": "LBP",
    "currencySymbol": "£",
    "type": "fiat",
    "rateUsd": "0.0006613493867344"
    },
    {
    "id": "east-caribbean-dollar",
    "symbol": "XCD",
    "currencySymbol": "$",
    "type": "fiat",
    "rateUsd": "0.3700209061811993"
    },
    {
    "id": "indian-rupee",
    "symbol": "INR",
    "currencySymbol": "₹",
    "type": "fiat",
    "rateUsd": "0.0134236685371922"
    },
    {
    "id": "malagasy-ariary",
    "symbol": "MGA",
    "currencySymbol": "Ar",
    "type": "fiat",
    "rateUsd": "0.0002515253056062"
    },
    {
    "id": "norwegian-krone",
    "symbol": "NOK",
    "currencySymbol": "kr",
    "type": "fiat",
    "rateUsd": "0.1173001264495363"
    },
    {
    "id": "congolese-franc",
    "symbol": "CDF",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "0.0004970178926441"
    },
    {
    "id": "uzbekistan-som",
    "symbol": "UZS",
    "currencySymbol": "лв",
    "type": "fiat",
    "rateUsd": "0.0000935057207169"
    },
    {
    "id": "south-sudanese-pound",
    "symbol": "SSP",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "0.0076769537847382"
    },
    {
    "id": "turkish-lira",
    "symbol": "TRY",
    "currencySymbol": "Kr",
    "type": "fiat",
    "rateUsd": "0.1031110883808445"
    },
    {
    "id": "angolan-kwanza",
    "symbol": "AOA",
    "currencySymbol": "Kz",
    "type": "fiat",
    "rateUsd": "0.0016750418760469"
    },
    {
    "id": "moldovan-leu",
    "symbol": "MDL",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "0.0572497047203355"
    },
    {
    "id": "hungarian-forint",
    "symbol": "HUF",
    "currencySymbol": "Ft",
    "type": "fiat",
    "rateUsd": "0.0032210645977322"
    },
    {
    "id": "malawian-kwacha",
    "symbol": "MWK",
    "currencySymbol": "MK",
    "type": "fiat",
    "rateUsd": "0.0012263191412298"
    },
    {
    "id": "kuwaiti-dinar",
    "symbol": "KWD",
    "currencySymbol": "ك",
    "type": "fiat",
    "rateUsd": "3.3145508783559827"
    },
    {
    "id": "palladium-ounce",
    "symbol": "XPD",
    "currencySymbol": null,
    "type": "fiat",
    "rateUsd": "1992.9449747892460000"
    },
    {
    "id": "saint-helena-pound",
    "symbol": "SHP",
    "currencySymbol": "£",
    "type": "fiat",
    "rateUsd": "1.3645506125467700"
    },
    {
    "id": "azerbaijani-manat",
    "symbol": "AZN",
    "currencySymbol": "₼",
    "type": "fiat",
    "rateUsd": "0.5879568792424764"
    },
    {
    "id": "euro",
    "symbol": "EUR",
    "currencySymbol": "€",
    "type": "fiat",
    "rateUsd": "1.1571167889546259"
    },
    {
    "id": "indonesian-rupiah",
    "symbol": "IDR",
    "currencySymbol": "Rp",
    "type": "fiat",
    "rateUsd": "0.0000696906832227"
    }
    ],
    "timestamp": 1635951225897
    }