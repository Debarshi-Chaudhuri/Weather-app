import React from 'react';
export const CountryList=(props)=>{
    return(
        <div >
            <div className="div"></div>
            <div className="buttons">
            <button onClick={()=>props.onclick('London')}>LONDON</button>
            <button onClick={()=>props.onclick('Mumbai')}>MUMBAI</button>
            <button onClick={()=>props.onclick('Kolkata')}>KOLKATA</button>
            <button onClick={()=>props.onclick('New York')}>NEW YORK</button>
            </div>
        </div>
    )
}