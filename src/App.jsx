import { useEffect, useState } from 'react'
import './App.css'
import Die from './components/Die';
import dieArray from "./components/dieDetails"
function App() {

  const [dice, setDice] = useState(dieArray)
  // const [dieRolls, setDieRolls] = useState([])
  const numOfDie = dieArray.length;

  function holdDie(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        if (die.id === id) {
          return {
            ...die,
            hold: !die.hold
          }
        }
        return die
      })
      // const tempArray = []
      // for (let die of prevDie) {
      //   if (die.id === id) {
      //     die.hold = !die.hold
      //     // console.log(die.hold)
      //   }
      //   tempArray.push(die)
      // }
      // return tempArray
    })
  }


  const dieElements = dice.map(die => {
    return <Die 
      key={die.key}
      id={die.id}
      value={die.value}
      hold={die.hold}
      handleClick={holdDie}
    />
  })

  function rollDice() {
    setDice(prevDice => {
      return prevDice.map(die => {
        return {
          ...die,
          value: die.hold ? die.value : Math.ceil(Math.random() * 6)
        }
      })
      // const tempArray = []
      // for (let die of prevDie) {
      //   die.value = die.hold ? die.value : Math.ceil(Math.random() * 6)
      //   // console.
      //   tempArray.push(die)
      // }
      // return tempArray
    })
  }
  function checkWin() {
    const firstDie = dice[0]
    if (!firstDie.hold) {
      return false
    }
    for (let i=1; i<numOfDie; i++) {
      if (dice[i].value !== firstDie.value || !dice[i].hold){
        return false
      }
    }
    return true
  }

  function resetGame() {
    // console.log(dieArray)
    setDice(dieArray)
  }

  return (
    <>
      <main className='board'>
        <h1 className='title'>Tenzies</h1>
        <p className='description'>
          Roll until all dice are the same. Click each die to 
          freeze it at its current value between rolls.
        </p>
        <div className="die-container">
          {dieElements}
        </div>
        
        {
        checkWin() 
        ?
        <button className='btn' onClick={resetGame}>
          Reset Game</button>
        :
        <button className='btn' onClick={rollDice}>
            Roll</button>
          }
      </main>
    </>
  )
}

export default App
