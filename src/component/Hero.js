import React from 'react';
import image from './images/japan.jpg';
import datas from '../memesData'

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: image,
        userupload: image,
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
    function Uploadimage(){
        
        setMeme(prevSate => {
            return {
                ...prevSate,
                file: meme.userupload
            }
        }
        )
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
    
    // const choosenImage = Say ? meme.randomImage : meme.file;

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

                
                <button onClick={Say} className="form--button">
                    Find A meme Image
                </button>
                    <input 
                        type="file"
                        name="userupload"
                        onChange={Uploadimage}
                        value={meme.userupload}
                        placeholder="Upload your own image"
                    />
                
                


                <div className="meme">
                    <img src={meme.userupload} alt="meme" className="meme--image"/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>

           </div>    

        </main>
    )
}


export default Meme;