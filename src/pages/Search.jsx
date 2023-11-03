import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api/api";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import CountryList from "../components/CountryList";
import style from './Search.module.css';

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const q = searchParams.get("q");
    
    /* 국가데이터는 배열형태의 데이터 이므로 []를 함수에 넣어줌 */
    const [countries, setCountries] = useState([]);

    const setInitData = async()=>{
        /* fetchSearchResults() 함수는 async로 정의 되어 있으므로 부를때 */
        /* await를 사용해야 함 */ 
        const data = await fetchSearchResults(q);
        setCountries(data);
    }

    useEffect(()=>{
        setInitData();
    },[q]);

    return (
       <div className={style.container}>
          <Searchbar q={q}/>
          <div>
            <b>{q} 검색 결과</b>
          </div>      
          <CountryList countries={countries} />    
       </div>)
}