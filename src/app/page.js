import React from 'react'
import Hero from './components/Hero/page'
import Search from './components/search/page'

const Home = () => {


  return (
    <div className='px-[60px]'>
      <Search/>
      <Hero/>
    </div>
  )
}

export default Home