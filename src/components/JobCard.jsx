import Badge from './Badge'
import { useState } from 'react';

export default function JobCard({ newF, featured, company, logo, position, postedAt, contract, location, rol, level, language, tools, onFilterChange, filters }) {


    const handleFilter = (e) => {
        const clickedFilter = e.target.textContent;
        if (!filters.includes(clickedFilter)) {
            onFilterChange(clickedFilter);
        } else {
            console.log('Ya está agregado!')
        }
    }

    return (
        <div className="relative bg-white mx-6 border-l-[6px] border-bgCyan rounded-xl px-5 shadow-xl flex flex-col gap-3 pb-3 sm:flex-row sm:items-center">
            <div className='sm:flex sm:items-center'>
                <img className='hidden sm:flex sm:w-16 sm:items-center min-w-[50px] ' src={logo} alt="" />
            </div>
            <div className=''>
                <img className='sm:hidden w-14 absolute -top-5' src={logo} alt="" />
                <div className='md:pt-0 pt-10 flex'>
                    <div className='mr-8'><h1 className='text-bgCyan font-bold'>{company}</h1></div>
                    <div className='flex items-center gap-2'>
                        {
                            newF && (
                                <div className='text-sm text-white font-bold uppercase bg-bgCyan p-2 
                        py-1.5 rounded-2xl'>
                                    New!
                                </div>
                            )
                        }
                        {
                            featured && (
                                <div className='text-sm text-white font-bold uppercase bg-black p-2 py-1.5 rounded-2xl'>
                                    Featured
                                </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-black pb-2'>{position}</h1>
                    <div className='flex gap-3 text-gray-400 font-semibold'>
                        <p>{postedAt}</p>
                        <p>{contract}</p>                    <p>{location}</p>
                    </div>
                    <hr className='sm:hidden mt-4' />
                </div>
            </div>
            <div className='flex flex-wrap sm:pl-32 gap-4'>
                {rol && <Badge filter={handleFilter} title={rol} />}
                {level && <Badge filter={handleFilter} title={level} />}
                {language && language.map((lang, index) => (
                    <div key={index}>
                        <Badge filter={handleFilter} key={index} title={lang} />
                    </div>
                ))}
                {tools && tools.map((tool, index) => (
                    <div key={index}>
                        <Badge filter={handleFilter} title={tool} />
                    </div>

                ))}
            </div>
        </div>
    )
}