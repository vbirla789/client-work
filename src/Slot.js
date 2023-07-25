import React from 'react'
import "./css/Login.css"
import img1 from './img/skillop.png'

function Slot() {
  return (
    <div className='loginScreen'>
      <div>
      <img src={img1} alt="skillop" />
      </div>
      <form >
        
        <input required type='text' placeholder='Enter the Day' ></input>
        <input required type='text' placeholder='Enter the Time Slot' ></input>

        <h4>Note: Please carefully Enter the detials</h4>
        <h4>Note: If there are more than one day than please put comma (,)</h4>
        <h4>Note: please put time slots like 10-11 am/pm</h4>
        <input type='submit' placeholder='Continue'></input>

      </form>

    </div>
  )
}

export default Slot
