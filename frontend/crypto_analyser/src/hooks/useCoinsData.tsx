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


const demoData ={
    "data": [
    {
    "id": "bitcoin",
    "rank": "1",
    "symbol": "BTC",
    "name": "Bitcoin",
    "supply": "18863493.0000000000000000",
    "maxSupply": "21000000.0000000000000000",
    "marketCapUsd": "1163669575471.5026733450052824",
    "volumeUsd24Hr": "22313714427.1125202662241498",
    "priceUsd": "61688.9764515778002168",
    "changePercent24Hr": "-2.1268231210796471",
    "vwap24Hr": "62401.8271654363611107",
    "explorer": "https://blockchain.info/"
    },
    {
        "id": "ethereum",
        "rank": "2",
        "symbol": "ETH",
        "name": "Ethereum",
        "supply": "118203242.9365000000000000",
        "marketCapUsd": "535533805078.9010409009175685",
        "volumeUsd24Hr": "13106570842.8740811772992432",
        "priceUsd": "4530.6185496669944902",
        "changePercent24Hr": "-0.9020690086454175",
        "vwap24Hr": "4557.0085302030097127",
        "explorer": "https://etherscan.io/"
        },
        {
        "id": "binance-coin",
        "rank": "3",
        "symbol": "BNB",
        "name": "Binance Coin",
        "supply": "166801148.0000000000000000",
        "maxSupply": "166801148.0000000000000000",
        "marketCapUsd": "93424383042.8676400110327708",
        "volumeUsd24Hr": "1622850401.2922464814591703",
        "priceUsd": "560.0943648353525721",
        "changePercent24Hr": "1.6560469857328643",
        "vwap24Hr": "557.8807868469875692",
        "explorer": "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
        },
        {
            "id": "solana",
            "rank": "4",
            "symbol": "SOL",
            "name": "Solana",
            "supply": "301075123.4798897500000000",
            "marketCapUsd": "72297105049.9907778971681441",
            "volumeUsd24Hr": "1363277694.7686333627534467",
            "priceUsd": "240.1297862618657962",
            "changePercent24Hr": "4.2264375824760584",
            "vwap24Hr": "237.8367943131567331",
            "explorer": "https://explorer.solana.com/"
            },
            {
                "id": "xrp",
                "rank": "8",
                "symbol": "XRP",
                "name": "XRP",
                "supply": "45404028640.0000000000000000",
                "maxSupply": "100000000000.0000000000000000",
                "marketCapUsd": "54287001851.5685215833601600",
                "volumeUsd24Hr": "3325992618.5741074356835482",
                "priceUsd": "1.1956428422244190",
                "changePercent24Hr": "0.1283028833776727",
                "vwap24Hr": "1.2052882941698862",
                "explorer": "https://xrpcharts.ripple.com/#/graph/"
                },
                {
                "id": "dogecoin",
                "rank": "9",
                "symbol": "DOGE",
                "name": "Dogecoin",
                "supply": "131970586164.0694000000000000",
                "marketCapUsd": "34781264473.3099481676218741",
                "volumeUsd24Hr": "1004887009.7326962062449849",
                "priceUsd": "0.2635531559287684",
                "changePercent24Hr": "-3.3762663783287538",
                "vwap24Hr": "0.2676047112057952",
                "explorer": "http://dogechain.info/chain/Dogecoin"
                },
                {
                "id": "usd-coin",
                "rank": "10",
                "symbol": "USDC",
                "name": "USD Coin",
                "supply": "33713434741.1878600000000000",
                "marketCapUsd": "33770853013.7083591175650525",
                "volumeUsd24Hr": "1472960176.4298768099011279",
                "priceUsd": "1.0017031273425947",
                "changePercent24Hr": "0.1547711089121573",
                "vwap24Hr": "1.0007260445631058",
                "explorer": "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                },
                {
                "id": "shiba-inu",
                "rank": "11",
                "symbol": "SHIB",
                "name": "SHIBA INU",
                "supply": "549095509738353.0000000000000000",
                "marketCapUsd": "29939502458.4131659677186294",
                "volumeUsd24Hr": "5271571107.1800910645084057",
                "priceUsd": "0.0000545251270998",
                "changePercent24Hr": "-14.9675857646589230",
                "vwap24Hr": "0.0000587908632591",
                "explorer": "https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
                },
                {
                "id": "terra-luna",
                "rank": "12",
                "symbol": "LUNA",
                "name": "Terra",
                "supply": "399604877.8733537000000000",
                "marketCapUsd": "18782658902.3210760157583232",
                "volumeUsd24Hr": "155603899.6906323313962979",
                "priceUsd": "47.0030771453041217",
                "changePercent24Hr": "-0.7661432529870521",
                "vwap24Hr": "47.9554272934081118",
                "explorer": "https://finder.terra.money/"
                },
                {
                "id": "avalanche",
                "rank": "13",
                "symbol": "AVAX",
                "name": "Avalanche",
                "supply": "220286577.2075511200000000",
                "maxSupply": "720000000.0000000000000000",
                "marketCapUsd": "16925379296.9584729810512079",
                "volumeUsd24Hr": "1038220671.8283659594019320",
                "priceUsd": "76.8334571788802315",
                "changePercent24Hr": "7.9047303686770441",
                "vwap24Hr": "76.6435669185888342",
                "explorer": "https://avascan.info/"
                },
                {
                "id": "uniswap",
                "rank": "14",
                "symbol": "UNI",
                "name": "Uniswap",
                "supply": "627596088.5538730000000000",
                "maxSupply": "1000000000.0000000000000000",
                "marketCapUsd": "16469413444.1125699970614115",
                "volumeUsd24Hr": "308114366.8643273135704418",
                "priceUsd": "26.2420587771060201",
                "changePercent24Hr": "-1.2413319455543616",
                "vwap24Hr": "26.5499732705911771",
                "explorer": "https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
                },
                {
                "id": "chainlink",
                "rank": "15",
                "symbol": "LINK",
                "name": "Chainlink",
                "supply": "462509553.9174637000000000",
                "maxSupply": "1000000000.0000000000000000",
                "marketCapUsd": "14317025607.0037730515507779",
                "volumeUsd24Hr": "502545537.2180617146229726",
                "priceUsd": "30.9550915991644397",
                "changePercent24Hr": "-3.1004799635425006",
                "vwap24Hr": "31.4452495984731018",
                "explorer": "https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca"
                },
                {
                "id": "wrapped-bitcoin",
                "rank": "16",
                "symbol": "WBTC",
                "name": "Wrapped Bitcoin",
                "supply": "231759.6667507100000000",
                "marketCapUsd": "14317023018.8130322896961918",
                "volumeUsd24Hr": "201102202.3688089739636720",
                "priceUsd": "61775.3003339144291657",
                "changePercent24Hr": "-1.9858565118086262",
                "vwap24Hr": "62468.4123728646078581",
                "explorer": "https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
                },
                {
                "id": "binance-usd",
                "rank": "17",
                "symbol": "BUSD",
                "name": "Binance USD",
                "supply": "14207367201.9000000000000000",
                "marketCapUsd": "14220423779.5588909444448468",
                "volumeUsd24Hr": "1685067636.7457693809624928",
                "priceUsd": "1.0009190005068036",
                "changePercent24Hr": "0.0381060103660237",
                "vwap24Hr": "1.0007590101924880",
                "explorer": "https://etherscan.io/token/0x4Fabb145d64652a948d72533023f6E7A623C7C53"
                },
                {
                "id": "litecoin",
                "rank": "18",
                "symbol": "LTC",
                "name": "Litecoin",
                "supply": "68897795.1367999000000000",
                "maxSupply": "84000000.0000000000000000",
                "marketCapUsd": "13955211348.8883324931157880",
                "volumeUsd24Hr": "863942021.9966934310374202",
                "priceUsd": "202.5494621588337671",
                "changePercent24Hr": "-1.0558932676004738",
                "vwap24Hr": "203.7079932308036830",
                "explorer": "http://explorer.litecoin.net/chain/Litecoin"
                },
                {
                "id": "polygon",
                "rank": "19",
                "symbol": "MATIC",
                "name": "Polygon",
                "supply": "6804312959.2700000000000000",
                "maxSupply": "10000000000.0000000000000000",
                "marketCapUsd": "13417968830.4070072209990984",
                "volumeUsd24Hr": "727359750.3314148251176143",
                "priceUsd": "1.9719799648731255",
                "changePercent24Hr": "-1.9018025947270493",
                "vwap24Hr": "1.9966578507371759",
                "explorer": "https://etherscan.io/token/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
                },
                {
                "id": "algorand",
                "rank": "20",
                "symbol": "ALGO",
                "name": "Algorand",
                "supply": "6217843736.6312430000000000",
                "maxSupply": "10000000000.0000000000000000",
                "marketCapUsd": "11593838429.6232104138834400",
                "volumeUsd24Hr": "285083335.7009160412323223",
                "priceUsd": "1.8646075586171968",
                "changePercent24Hr": "-3.9376283619260514",
                "vwap24Hr": "1.9044747115780786",
                "explorer": "https://algoexplorer.io/"
                },
                {
                "id": "bitcoin-cash",
                "rank": "21",
                "symbol": "BCH",
                "name": "Bitcoin Cash",
                "supply": "18890993.7500000000000000",
                "maxSupply": "21000000.0000000000000000",
                "marketCapUsd": "11344250197.6213942713793669",
                "volumeUsd24Hr": "536762041.3643279810630782",
                "priceUsd": "600.5110343981451093",
                "changePercent24Hr": "-1.9806736606055964",
                "vwap24Hr": "604.4934939269513629",
                "explorer": "https://blockchair.com/bitcoin-cash/blocks"
                },
                {
                "id": "cosmos",
                "rank": "22",
                "symbol": "ATOM",
                "name": "Cosmos",
                "supply": "248453201.0000000000000000",
                "marketCapUsd": "9333378003.7874451252745486",
                "volumeUsd24Hr": "551746187.1817175421494444",
                "priceUsd": "37.5659398479130286",
                "changePercent24Hr": "2.7387008968655622",
                "vwap24Hr": "37.8944817938242428",
                "explorer": "https://www.mintscan.io/"
                },
                {
                "id": "axie-infinity",
                "rank": "23",
                "symbol": "AXS",
                "name": "Axie Infinity",
                "supply": "60907500.0000000000000000",
                "maxSupply": "270000000.0000000000000000",
                "marketCapUsd": "9329838046.6732894086322500",
                "volumeUsd24Hr": "993527211.0659341856519680",
                "priceUsd": "153.1804465242094883",
                "changePercent24Hr": "10.1684286944817543",
                "vwap24Hr": "149.8116271569840418",
                "explorer": "https://etherscan.io/token/0xf5d669627376ebd411e34b98f19c868c8aba5ada"
                },
                {
                "id": "vechain",
                "rank": "24",
                "symbol": "VET",
                "name": "VeChain",
                "supply": "64315576989.0000000000000000",
                "maxSupply": "86712634466.0000000000000000",
                "marketCapUsd": "9302186753.0071380693997290",
                "volumeUsd24Hr": "539290702.2197780781049394",
                "priceUsd": "0.1446334960906610",
                "changePercent24Hr": "5.0985368897822188",
                "vwap24Hr": "0.1391356206734178",
                "explorer": "https://explore.veforge.com/"
                },
                {
                "id": "stellar",
                "rank": "25",
                "symbol": "XLM",
                "name": "Stellar",
                "supply": "24204199065.6360860000000000",
                "maxSupply": "50001806812.0000000000000000",
                "marketCapUsd": "9153438481.4895864900811420",
                "volumeUsd24Hr": "392516878.8653150654051224",
                "priceUsd": "0.3781756403782508",
                "changePercent24Hr": "-2.1524647695417608",
                "vwap24Hr": "0.3814464265142614",
                "explorer": "https://dashboard.stellar.org/"
                },
                {
                "id": "internet-computer",
                "rank": "26",
                "symbol": "ICP",
                "name": "Internet Computer",
                "supply": "175312877.0700000000000000",
                "marketCapUsd": "8089868676.4035141634969900",
                "volumeUsd24Hr": "261802554.8150638978620162",
                "priceUsd": "46.1453192236035338",
                "changePercent24Hr": "-2.6584902346191802",
                "vwap24Hr": "46.5224738281769897",
                "explorer": "https://www.dfinityexplorer.org/#/"
                },
                {
                "id": "theta",
                "rank": "27",
                "symbol": "THETA",
                "name": "THETA",
                "supply": "1000000000.0000000000000000",
                "maxSupply": "1000000000.0000000000000000",
                "marketCapUsd": "7667338192.6727194000000000",
                "volumeUsd24Hr": "374976201.4787629776350291",
                "priceUsd": "7.6673381926727194",
                "changePercent24Hr": "3.8273061359268725",
                "vwap24Hr": "7.4077269299232237",
                "explorer": "https://explorer.thetatoken.org/"
                },
                {
                "id": "filecoin",
                "rank": "28",
                "symbol": "FIL",
                "name": "Filecoin",
                "supply": "119837455.0000000000000000",
                "marketCapUsd": "7517565686.9023322769479255",
                "volumeUsd24Hr": "521537557.7568367795340385",
                "priceUsd": "62.7313529555707961",
                "changePercent24Hr": "-2.5924272498363692",
                "vwap24Hr": "63.2242067075204987",
                "explorer": "https://protocol.ai"
                },
                {
                "id": "tron",
                "rank": "29",
                "symbol": "TRX",
                "name": "TRON",
                "supply": "71659657369.4900000000000000",
                "marketCapUsd": "7496574416.3311962768081393",
                "volumeUsd24Hr": "1514374072.6924202434913857",
                "priceUsd": "0.1046135955922524",
                "changePercent24Hr": "-2.1112633546295514",
                "vwap24Hr": "0.1050673220328172",
                "explorer": "https://tronscan.org/#/"
                },
                {
                "id": "ftx-token",
                "rank": "30",
                "symbol": "FTT",
                "name": "FTX Token",
                "supply": "120014732.2187437400000000",
                "maxSupply": "352170015.0000000000000000",
                "marketCapUsd": "7243496612.9686026343068196",
                "volumeUsd24Hr": "143558497.0699788953768030",
                "priceUsd": "60.3550620749318561",
                "changePercent24Hr": "-2.5581145825016716",
                "vwap24Hr": "61.3631581251241169",
                "explorer": "https://etherscan.io/token/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9"
                },
                
    {
    "id": "icon",
    "rank": "94",
    "symbol": "ICX",
    "name": "ICON",
    "supply": "673170680.0590113000000000",
    "marketCapUsd": "1457809205.3068229636437144",
    "volumeUsd24Hr": "55052844.0714801986428579",
    "priceUsd": "2.1655863044704040",
    "changePercent24Hr": "-5.1756318157714851",
    "vwap24Hr": "2.2129790674951522",
    "explorer": "https://tracker.icon.foundation/"
    },
    {
    "id": "ravencoin",
    "rank": "95",
    "symbol": "RVN",
    "name": "Ravencoin",
    "supply": "10012270000.0000000000000000",
    "maxSupply": "21000000000.0000000000000000",
    "marketCapUsd": "1448060704.3865774290060000",
    "volumeUsd24Hr": "179435015.1398572610716776",
    "priceUsd": "0.1446286111327978",
    "changePercent24Hr": "10.8264936806872565",
    "vwap24Hr": "0.1379308695859500",
    "explorer": "https://ravencoin.network/"
    },
    {
    "id": "kadena",
    "rank": "96",
    "symbol": "KDA",
    "name": "Kadena",
    "supply": "156737531.4459000000000000",
    "maxSupply": "1000000000.0000000000000000",
    "marketCapUsd": "1427764156.4652500422688400",
    "volumeUsd24Hr": "47069221.9537837072887448",
    "priceUsd": "9.1092678524036946",
    "changePercent24Hr": "15.4158059433398810",
    "vwap24Hr": "8.4253166154830962",
    "explorer": "https://explorer.chainweb.com/mainnet"
    },
    {
    "id": "audius",
    "rank": "97",
    "symbol": "AUDIO",
    "name": "Audius",
    "supply": "504078968.0000000000000000",
    "marketCapUsd": "1359010390.0726521962560224",
    "volumeUsd24Hr": "41897297.7781781988238901",
    "priceUsd": "2.6960267663312868",
    "changePercent24Hr": "4.0326407789951416",
    "vwap24Hr": "2.5912428973003779",
    "explorer": "https://etherscan.io/token/0x18aaa7115705e8be94bffebde57af9bfc265b998"
    },
    {
    "id": "secret",
    "rank": "98",
    "symbol": "SCRT",
    "name": "Secret",
    "supply": "149815729.0000000000000000",
    "marketCapUsd": "1345752302.8724493811260168",
    "volumeUsd24Hr": "11790408.6618399166461982",
    "priceUsd": "8.9827170475033992",
    "changePercent24Hr": "-3.4743753276195344",
    "vwap24Hr": "9.0413691108331767",
    "explorer": "https://www.puzzle.report/"
    },
    {
    "id": "okb",
    "rank": "99",
    "symbol": "OKB",
    "name": "OKB",
    "supply": "60000000.0000000000000000",
    "marketCapUsd": "1327773878.1713798880000000",
    "volumeUsd24Hr": "242211604.5190859007210756",
    "priceUsd": "22.1295646361896648",
    "changePercent24Hr": "0.4720360010813175",
    "vwap24Hr": "22.3674343327325696",
    "explorer": "https://etherscan.io/token/0x75231f58b43240c9718dd58b4967c5114342a86c"
    },
    {
    "id": "zilliqa",
    "rank": "100",
    "symbol": "ZIL",
    "name": "Zilliqa",
    "supply": "11954979691.7319100000000000",
    "maxSupply": "21000000000.0000000000000000",
    "marketCapUsd": "1315772928.4393696244042052",
    "volumeUsd24Hr": "86072128.7606318227504863",
    "priceUsd": "0.1100606577650116",
    "changePercent24Hr": "-0.7900875588128541",
    "vwap24Hr": "0.1096131200130964",
    "explorer": "https://etherscan.io/token/0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27"
    }
    ],
    "timestamp": 1636027915810
    }