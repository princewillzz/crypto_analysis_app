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