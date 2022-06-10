import React from 'react';
// import image from './images/japan.jpg';
import datas from '../memesData'

const Meme = () => {

    let url
    
    function Say() {
        const memesArray = datas.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url;
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

            <div className="meme-image">
                <img src={url} alt="meme" className="meme--image"/>
            </div>

        </main>
    )
}


export default Meme;