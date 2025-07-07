import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

function CountriesContainer({ query,region }) {
  const [CountriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags')

      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCountriesData(data)
        } else {
          console.error("API didn't return an array:", data)
          setCountriesData([])
        }
      })
      .catch((err) => {
        console.error('Failed to fetch countries:', err)
        setCountriesData([])
      })
  }, [])

  return (
    <div className="countries-container">
      {
        CountriesData.length > 0 ? (
          CountriesData.filter((country) => {
            const matchesQuery = country.name?.common
              ?.toLowerCase()
              .includes(query)
            const matchesRegion = region === '' || country.region === region
            return matchesQuery && matchesRegion
          }).map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0] || 'N/A'}
              img={country.flags?.png}
              data={country}
            />
          ))
        ) : (
          <p>Loading countries...</p>
        )
      }
    </div>
  )
}

export default CountriesContainer
