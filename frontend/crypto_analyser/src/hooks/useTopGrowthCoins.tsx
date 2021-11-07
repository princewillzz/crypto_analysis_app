import { useEffect, useState } from 'react';
import { CoinData } from '../interfaces/CoinData';

export const useTopGrowthCoins = (coinDataList: CoinData[], positiveGrowth: boolean, coinsToReturn: number) => {

    const [topCoins, setTopCoins] = useState<CoinData[]>(coinDataList);

    useEffect(() => {
        
        setTopCoins(() => coinDataList
            .filter(() => true)
            .sort((a, b) => {
                return parseInt(b.changePercent24Hr||"0")-parseInt(a.changePercent24Hr||"0")
            })    
        )
        
        return () => {
            setTopCoins([])
        }
    }, [coinDataList])

    if(positiveGrowth) {
        return topCoins.slice(0, coinsToReturn);
    } else {
        return topCoins.slice(-coinsToReturn)
    }


}
