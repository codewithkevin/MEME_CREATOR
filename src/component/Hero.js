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

           <div className="form">

               <input 
               type="text"
                placeholder="Top Text"
                className="form--input"
                />

                <input
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                />

                <button onClick={Say} className="form--button">
                    Find A meme Image
                </button>


                <div className="meme-image">
                    <img src={meme.randomImage} alt="meme" className="meme--image"/>
                    <h2 className="meme--text top">One does not simply</h2>
                    <h2 className="meme--text bottom">One does not simply</h2>
                </div>

           </div>    

        </main>
    )
}


export default Meme;