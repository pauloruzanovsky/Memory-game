import './style/App.css';
import Header from './Header';
import Card from './Card';
import poffoImg from './images/poffo.jpg';
import kitoImg from './images/kito.jpg';
import daniImg from './images/dani.jpg';
import cheImg from './images/che.jpg';
import jorgeImg from './images/jorge.jpg';
import meneImg from './images/mene.jpg';
import ruzaImg from './images/ruza.jpg';
import gutoImg from './images/guto.jpg';
import neidsImg from './images/neids.jpg';
import leloImg from './images/lelo.jpg';
import kohlerImg from './images/kohler.jpg';
import mosbyImg from './images/mosby.jpg';
import React from 'react';
import Confetti from 'react-confetti'
import yaySound from './audios/yaySound.mp3'


function App() {

  const cards = [
    {
      id:0,
      name: "Poffo",
      imgPath: poffoImg,
      wasClicked: false,
    },

    {
      id:1,
      name: "Kito",
      imgPath: kitoImg,
      wasClicked: false,
    }, 

    {
      id:2,
      name: "Dani",
      imgPath: daniImg,
      wasClicked: false,
    }, 

    {
      id:3,
      name: "Che",
      imgPath: cheImg,
      wasClicked: false,
    }, 

    {
      id:4,
      name: "Jorge",
      imgPath: jorgeImg,
      wasClicked: false,
    }, 

    {
      id:5,
      name: "Mene",
      imgPath: meneImg,
      wasClicked: false,
    }, 

    {
      id:6,
      name: "Ruza",
      imgPath: ruzaImg,
      wasClicked: false,
    },

    {
      id:7,
      name: "Guto",
      imgPath:gutoImg,
      wasClicked: false,
    }, 

    {
      id:8,
      name: "Neids",
      imgPath: neidsImg,
      wasClicked: false,
    }, 

    {
      id:9,
      name: "Lelo",
      imgPath: leloImg,
      wasClicked: false,
    }, 

    {
      id:10,
      name: "Kohler",
      imgPath: kohlerImg,
      wasClicked: false,
    },

    {
      id:11,
      name: "Mosby",
      imgPath: mosbyImg,
      wasClicked: false,
    }
  ]

  let [cardArray, setCardArray] = React.useState(cards);
  let [score, setScore] = React.useState(0);
  let [gameOver, setGameOver] = React.useState(false);

  function handleClick(event) {
    if(gameOver || score === 12) {
      return
    }

    let newArray = cardArray.map(card => {
      if(card.id === Number(event.target.parentNode.getAttribute('id'))) {
        if(!card.wasClicked) {
          setScore(prevScore => prevScore + 1)
          return ({...card, wasClicked: true})
        }
        setGameOver(true);
        return({...card})
      }
      return ({...card})
    })

      let sortedArray = newArray.sort(() => Math.random() - 0.5)
      setCardArray([...sortedArray])
    
  }
  
  let cardElements = cardArray.map(card => <Card 
    name={card.name}
    img={card.imgPath}
    id={card.id}
    key={card.id}
    wasClicked={card.wasClicked.toString()}
    score={score}
    handleClick={handleClick}
  />)

  React.useEffect(() => {
    if(score === 12) {
      let audio = new Audio(yaySound)
      audio.play()
    }
  },[score])

  function restartGame() {
    setScore(0);
    setCardArray([...cards])
    setGameOver(false)
  }

  return (
    <>
    <Header score={score}/>
    {score === 12 && <Confetti/>}
    <main>
    <div className='cards'>
      {cardElements}
    </div>
    {score === 12 && <div className="restart-dom"><div>You won!</div><button onClick={restartGame}>Play again</button></div>}
    {gameOver && <div className="restart-dom"><div>You lost!</div><button onClick={restartGame}>Play again</button></div>}

    </main>
    </>
    
  );
}

export default App;
