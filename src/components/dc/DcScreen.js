import React from 'react'
import HeroList from '../hero/HeroList'

const DcScreen = () => {
  return (
    <div>
        <h1>DC Comics</h1>
        <hr/>

        <HeroList publisher='DC Comics'/>
    </div>
  )
}

export default DcScreen