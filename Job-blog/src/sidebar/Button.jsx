import React from 'react'

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className={"font-bold py-1 px-4 border text-sm sm:text-sm md:text-base hover:bg-blue hover:text-white text-primary "}>
      {title}
    </button>
  )
}

export default Button
