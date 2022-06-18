import './App.css';
import Header from './component/Header'
import Meme from './component/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
  
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: null,
});

const [allMemeImages, setAllMemeImages] = React.useState([]);    

React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => { setAllMemeImages(data.data.memes) })
}, []);

function Say() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url;
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

function imageHandler(event) {
    const reader = new FileReader();
    reader.onload = () => { 
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: reader.result
            }
        }
        )
    }
    reader.readAsDataURL(event.target.files[0]);
}

  const upper = meme.topText
  const lower = meme.bottomText
  const image = meme.randomImage
  

  return (
    <div className="App">

      <div className="App-header">
        <Header />
      </div>

      <div>
        <Meme 
          upper={upper}
          lower={lower}
          image={image}
          Say={Say}
          handleChange={handleChange}
          imageHandler={imageHandler}
        />
      </div>

    </div>
  );
}

export default App;
