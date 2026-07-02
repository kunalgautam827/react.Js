import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({});
    const url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res[currency]))
         
    },[currency])
    return data;
}

// we retur the whole function by which we can access the functionality and its data
export default useCurrencyInfo;