import React, { useState } from 'react'
import { data } from './data';
import All from './all';
import Breakfast from './breakfast';
import Lunch from './lunch';
import Shakes from './shakes';
import './index.css';

const Nav = () => {
    const [showAll, setShowAll] = useState(true);
    const [showBreakfast, setShowBreakfast] = useState(false);
    const [showLunch, setShowLunch] = useState(false);
    const [showShakes, setShowShakes] = useState(false);

  return (
      <>
         <section className='list'>
        <div className='nav'>
        <button onClick={() => {
                setShowAll(true);
                setShowBreakfast(false);
                setShowLunch(false);
                setShowShakes(false);
            }}>All</button>
        </div>
            <div>
            </div>
        <div className='nav'>
        <button onClick={() => {
                setShowBreakfast(true);
                setShowAll(false);
                setShowLunch(false);
                setShowShakes(false);
            }}>Breakfast</button>
        </div>
        <div className='nav'>
        <button onClick={() => {
            setShowLunch(true);
            setShowAll(false);
            setShowBreakfast(false);
            setShowShakes(false);
        }}>Lunch</button>
        </div>
        <div className='nav'>
        <button onClick={() => {
            setShowShakes(true);
            setShowAll(false);
            setShowBreakfast(false);
            setShowLunch(false);
        }}>Shakes</button>
        </div>
         </section>
         <article>
            {showAll && <All />}
            {showBreakfast && <Breakfast /> }
            {showLunch && <Lunch />}
            {showShakes && <Shakes />}
         </article>
      </>
  )
};

export default Nav