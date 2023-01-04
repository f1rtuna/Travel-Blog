import reactLogo from './assets/react.svg'
import React from "react"
import Nav from "./components/Nav"
import './App.css'
import Data from "./data.js"
import Card from "./components/Card"

function App() {
  const cards = Data.map((card) => {
    return (
      <Card 
        key = {card.id}
        data = {card}
      />
    )
  })

  return (
    <>
      <Nav />
      {cards}
    </>
  )
}

export default App
