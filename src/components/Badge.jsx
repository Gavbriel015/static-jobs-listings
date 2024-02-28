export default function Badge({title, filter}) {
    return <p onClick={filter} className='hover:text-white hover:bg-bgCyan font-bold rounded-xl text-bgCyan p-2 bg-filterCyan cursor-pointer'>{title}</p>
}