import { useEffect, useState } from 'react';
import { fetchCountries } from '../api/api.js';
import CountryList from '../components/CountryList.jsx';

export default function Home() {
    /* 국가데이터는 배열형태의 데이터 이므로 []를 함수에 넣어줌 */
    const [countries, setCountries] = useState([]);

    const setInitData = async() => {
        /* fetchCountries() 함수는 async로 정의 되어 있으므로 부를때 */
        /* await를 사용해야 함 */ 
        const data = await fetchCountries();
        setCountries(data);
    }

    useEffect(()=>{
        setInitData();
    },[])

    return <div>
        <CountryList countries={countries} />    
    </div>;
}