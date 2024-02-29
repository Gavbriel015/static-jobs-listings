import './App.css'
import data from './data/data.json'

import headerMobile from '../images/bg-header-mobile.svg'
import headerDesktop from '../images/bg-header-desktop.svg'
import JobCard from './components/JobCard'
import Filter from './components/Filter'
import { useState } from 'react'

function App() {

  const [filters, setFilters] = useState([]);

  const handleFilterChange = (filter) => {
    if (!filters.includes(filter)) {
      setFilters(prevFilters => [...prevFilters, filter]);
    } else {
      console.log('Ya esta agregado!')
    }
  };

  const clearFilters = () => {
    setFilters([]);
  }

  const handleDeleteFilter = (filterToDelete) => {
    setFilters(prevFilters => prevFilters.filter(filter => filter !== filterToDelete));
  };

  console.log(filters);

  return (
    <>
      <div className=''>
        <div className='bg-bgCyan relative'>
          <img className='w-full sm:hidden mb-24' src={headerMobile} alt="" />
          <img className='hidden sm:flex w-full' src={headerDesktop} alt="" />
          <Filter isHidden={filters.length === 0 ? true : false} 
            filters={filters} 
            onDeleteFilter={handleDeleteFilter}
            clearFilter={clearFilters}
            />
        </div>
        <div className='bg-lightCyan h-32 flex flex-col gap-10 pt-10'>
          {
            filters.length === 0 ? (
              data.map(({ id, company, new: newF, featured, position, postedAt, contract, location, logo, role, level, languages, tools }) => (
                <div className='' key={id}>
                  <JobCard
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    logo={logo}
                    newF={newF}
                    featured={featured}
                    company={company}
                    position={position}
                    postedAt={postedAt}
                    contract={contract}
                    location={location}
                    rol={role}
                    level={level}
                    language={languages}
                    tools={tools}
                  />
                </div>
              ))
            ) : (
              data.filter(({ role, level, languages, tools }) => {
                const allFiltersPresent = filters.every(filter =>
                  [role, level, ...languages, ...tools].includes(filter)
              );
              return allFiltersPresent;
              }).map(({ id, company, new: newF, featured, position, postedAt, contract, location, logo, role, level, languages, tools }) => (
                <div className='' key={id}>
                  <JobCard
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    logo={logo}
                    newF={newF}
                    featured={featured}
                    company={company}
                    position={position}
                    postedAt={postedAt}
                    contract={contract}
                    location={location}
                    rol={role}
                    level={level}
                    language={languages}
                    tools={tools}
                  />
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
