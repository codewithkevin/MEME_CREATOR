import React from 'react';


const Meme = () => {
    return (
        <main className="Meme">

            <from className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input  type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--button">
                    Find A meme Image
                </button>
            </from>

        </main>
    )
}


export default Meme;