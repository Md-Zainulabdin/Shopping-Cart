import React from 'react'
import Hero from './components/Hero/page'
import Search from './components/search/page'
import Filters from './components/Filters/page'

const Home = () => {


  return (
    <div className='px-[30px] md:px-[45px] lg:px-[60px]'>
      <Search/>
      <Filters/>
      <Hero/>
    </div>
  )
}

export default Home