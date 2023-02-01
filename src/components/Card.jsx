import React from 'react'

function Card(props) {
    return (
        <div className='flex items-start w-[400px] p-4 bg-slate-300 rounded-lg m-3'>
            <img className='m-2' src={props.img} alt='' />
            <div className=''>
            <h1 className='text-red-500 font-bold'>{props.title}</h1>
            <h2>Year: {props.year}</h2>
            <h2>Nation: {props.nation}</h2>
            <p className='text-[14px]'>Description: {props.des}</p>
            </div>
        </div>
    )
}

export default Card