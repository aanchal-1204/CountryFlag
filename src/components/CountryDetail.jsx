import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './CountryDetail.css'
import { useNavigate } from 'react-router-dom'

export default function CountryDetail() {
  const location = useLocation()
  const countryName = new URLSearchParams(location.search).get('name')
  const navigate = useNavigate()

  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data)
        setCountryData({
          name: data.name.common,
          nativeName: data.name.nativeName 
  ? Object.values(data.name.nativeName)[0].common 
  : 'N/A',
          population: data.population,
          region: data.region,
          subregion: data.subregion,
         capital: data.capital || ['N/A'],
tld: data.tld || ['N/A'],
          flag: data.flags.svg,
         
languages: data.languages 
  ? Object.values(data.languages).join(', ') 
  : 'N/A',
         currencies: data.currencies 
  ? Object.values(data.currencies).map(c => c.name).join(', ') 
  : 'N/A',
          
        })
      })
  }, [])
  return countryData === null ? (
    'loading...'
  ) : (
    <main>
      <div className="country-details-container">
       <span className="back-button" onClick={() => navigate(-1)}>
  <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
</span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}