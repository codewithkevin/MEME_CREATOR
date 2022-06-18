import React from 'react';
import image from './images/japan.jpg';

const Meme = (props) => {

    
    return (
        <main>

           <div className="form">

               <input 
               type="text"
                placeholder="Top Text"
                className="form--input"
                name="topText"
                value={props.upper}
                
                onChange = {props.handleChange}
                />
                

                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={props.lower}
                    onChange={props.handleChange}
                />

                <button onClick={props.Say} className="form--button">
                                Find A meme Image
                </button>
                   
                <input 
                    type="file"
                    name="randomImage"
                    accept="image/*"
                    onChange={props.imageHandler}
                    className="form--upload"
                />
                        


                <div className="meme">
                    
                    <img src={props.image} alt="meme" className="meme--image" />
                    <h2 className="meme--text top">{props.upper}</h2>
                    <h2 className="meme--text bottom">{props.lower}</h2>

                </div>

           </div>    

        </main>
    )
}


export default Meme;