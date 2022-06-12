import React from 'react';
import image from './images/japan.jpg';
import datas from '../memesData'

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: image
    });

    const [allMemeImages, setAllMemeImages] = React.useState(datas);    
    
    
    function Say() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;
        setMeme(prevSate => {
            return {
                ...prevSate,
                randomImage: url
            }
        })
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
                <img src={meme} alt="meme" className="meme--image"/>
            </div>

        </main>
    )
}


export default Meme;