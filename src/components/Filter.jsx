export default function Filter({ filters, onDeleteFilter, isHidden, clearFilter }) {

    const deleteFilter = (clickedFilter) => {
        onDeleteFilter(clickedFilter);
    }


    return (
        <div hidden={isHidden} className='sm:max-w-[1200px] absolute bg-white w-[80%] h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className="flex-wrap sm:flex justify-between mx-16 items-center h-24">
                <div className="flex gap-6">
                    {
                        filters.map((filter, index) => (
                            <div className="flex items-center" key={index}>
                                <p className="font-bold rounded-l-xl text-bgCyan p-2 bg-filterCyan cursor-pointer">
                                    {filter}
                                    {console.log(filter)}
                                </p>
                                <div onClick={() => deleteFilter(filter)} className="hover:bg-darkCyan bg-bgCyan text-white font-bold cursor-pointer p-2 px-3 rounded-r-lg">X</div>
                            </div>
                        ))
                    }
                    
                </div>
                <div onClick={clearFilter} className="text-gray-400 hover:text-bgCyan font-bold cursor-pointer hover:underline">Clear</div>
            </div>
        </div>
    )
}