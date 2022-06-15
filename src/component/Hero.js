import React from 'react';
import image from './images/japan.jpg';
import datas from '../memesData'

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: image
    });

    const [allMemeImages] = React.useState(datas);    
    
    
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

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <main>

           <div className="form">

               <input 
               type="text"
                placeholder="Top Text"
                className="form--input"
                name="topText"
                value={meme.topText}
                // onChange={(e) => {
                //     setMeme(prevState => {
                //         return {
                //             ...prevState,
                //             topText: e.target.value
                //         }
                //     }
                // )}
                // }
                onChange = {handleChange}
                />

                <input
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <div className="button-area">
                    <button onClick={Say} className="form--button">
                        Find A meme Image
                    </button>
                    <button onClick={Say} className="form--button">
                        Find A meme Image
                    </button>
                </div>
                


                <div className="meme">
                    <img src={meme.randomImage} alt="meme" className="meme--image"/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>

           </div>    

        </main>
    )
}


export default Meme;