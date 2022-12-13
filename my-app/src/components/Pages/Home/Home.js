import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <h1>Welcome</h1>
      <p>This page is work in progress...</p>
      <p>Go to the <Link to="/designsystemlibrary">Design System Library</Link> to view the latest updates.</p>
    </div>
  )
}

export default Home
