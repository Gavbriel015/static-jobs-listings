export default function Filter({ filters, onDeleteFilter }) {

    const deleteFilter = (clickedFilter) => {
        onDeleteFilter(clickedFilter);
    }


    return (
        <div className='absolute bg-white w-[80%] h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className="flex">
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
        </div>
    )
}