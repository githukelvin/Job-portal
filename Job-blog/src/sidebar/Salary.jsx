import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
        <h4 className="text-lg font-medium mb-2">Salary</h4>
        <div className="flex flex-row">
            <Button onClickHandler={handleClick} value="" title="Hourly"/>
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly" className="pr-4"/>
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly" className="pr-4"/>
        </div>

        <div>
        <label className="sidebar-label-container">
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className="checkmark"></span>Any
        </label>

        <InputField handleChange={(event) => handleChange(event)} value={50} title="< 50000k" name="test2"/>
        <InputField handleChange={(event) => handleChange(event)} value={80} title="< 80000k" name="test2"/>
        <InputField handleChange={(event) => handleChange(event)} value={100} title="< 100000k" name="test2"/>
        <InputField handleChange={(event) => handleChange(event)} value={200} title="< 200000k" name="test2"/>
        </div>
    </div>
  )
}

export default Salary