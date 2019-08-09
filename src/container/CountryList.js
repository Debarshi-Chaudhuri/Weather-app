import React from 'react';
import icon from '../icon.svg'
export const CountryList=(props)=>{
    return(
        <div >
            <div className="div">
                <img src={icon} height='100px' style={{marginLeft:'45.5%',marginTop:'13px'}}/>
                <p style={{marginLeft:'43.5%',fontStyle:'Italic',fontWeight:'450'}}>WEATHER FORECAST</p>
            </div>
            <div className="buttons">
            <button onClick={()=>props.onclick('London')}>LONDON</button>
            <button onClick={()=>props.onclick('Mumbai')}>MUMBAI</button>
            <button onClick={()=>props.onclick('Kolkata')}>KOLKATA</button>
            <button onClick={()=>props.onclick('New York')}>NEW YORK</button>
            </div>
        </div>
    )
}