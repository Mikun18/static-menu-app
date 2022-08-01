import React from 'react'
import { data } from './data';
import './index.css'

const Shakes = () => {
  return (
    <div className='main-body'> 
        {data.map((person) => {
                const {image, title, price, note, type} = person;
                if(type == 'shakes'){
                    return(
                        <div className='dish'>
                          <div>
                            <img src={image} alt="" />
                          </div>
                            <div className='second-flex'>
                              <div className='third-flex'>
                                <h4>{title}</h4>
                                <h3>{price}</h3>
                              </div>
                              <p>{note}</p>
                            </div>
                         </div>
                    )
                  }
                })}
    </div>
  )
}

export default Shakes