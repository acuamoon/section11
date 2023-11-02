import style from './CountryItem.module.css';

export default function CountryItem({
    code,
    commonName,
    flagEmoji,
    flagImg,
    population,
    region,
    capital,
}) {
    return (
    <div className={style.container}>
        {commonName}
    </div>);
}