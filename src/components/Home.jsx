import{React,useContext,useEffect,useState} from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesContainer from './CountriesContainer'
// import { useOutletContext } from 'react-router-dom'

import { useTheme } from '../../Hooks/useTheme'

function Home() {
    const [query,setQuery]=useState('')
    // const =useOutletContext()
    const [isDark]=useTheme()
  const [region, setRegion] = useState('')
  // const windowSize=useWindowSize()

  return (
    <div>
           <main className={`${isDark? 'dark' :'' }`}> 
             <div className="search-filter-container">
     <SearchBar   setQuery={setQuery}/>
     {/* <h1>{windowSize.width} x {windowSize.height}</h1> */}
     
   

          <SelectMenu setRegion={setRegion} />
          </div>
<CountriesContainer query={query} region={region} />
     </main>
    </div>  
  )
}

export default Home