
import React from 'react'


interface props{
    word:string
}

const AddCardButton = ({word}:props) => {
  return (
    <button className="group hover:scale-105 relative text-sm tracking-tight rounded-lg border-2 border-gray-800 bg-gray-800 px-3 py-1 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-gray-900/50">
      <span className="absolute left-0 top-0 size-full rounded-md border border-dashed border-red-50 shadow-inner shadow-white/30 group-active:shadow-white/10"></span>
      <span className="absolute left-0  top-0 size-full rotate-180 rounded-md border-red-50 shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
      {word}
    </button>
  )
}

export default AddCardButton
