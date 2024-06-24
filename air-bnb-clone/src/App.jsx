import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar1"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data.js"



function App() {
  const card = Data.map(post => <Card
  img = {post.coverImg}
  ratings = {post.stats.rating}
  reviewCount = {post.stats.reviewCount}
  title = {post.title}
  country = {post.location}
  price = {post.price}
  />)

  return (
    <div className='main-container'>
      <div className="head-container">
      <Navbar/>
      <Hero />
      </div>
      <section className='card-list'>
        {card}
      </section>
    </div>
  )
}
export default App
