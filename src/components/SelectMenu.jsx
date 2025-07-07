import React from 'react'

function SelectMenu({ setRegion }) {
  return (
    <select className="filter-by-region" onChange={(e) => setRegion(e.target.value)}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option> {/* correct value */}
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}


export default SelectMenu;