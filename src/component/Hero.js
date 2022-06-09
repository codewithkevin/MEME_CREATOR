import React from 'react';
import datas from '../memesData'

const Meme = () => {
    
    function Say() {
        const memesArray = datas.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        alert(randomNumber)
        
    }

    return (
        <main className="Meme">

            <from className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input  type="text" placeholder="Bottom text" className="form--input"/>
                
                <button onClick={Say} className="form--button">
                    Find A meme Image
                </button>
            
            </from>

        </main>
    )
}


export default Meme;