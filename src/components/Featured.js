import React from 'react'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img 
            src='https://source.unsplash.com/500x500/?thailand&sig1'
             className='featureImg'
            />    
            <div className='featuredTitle'>
                <h1>Thailand</h1>
                <h2>2,000 properties</h2>
            </div>
         </div>

         <div className='featuredItem'>
            <img 
            src='https://source.unsplash.com/500x500/?paris&sig1'
             className='featureImg'
            />    
            <div className='featuredTitle'>
                <h1>Paris</h1>
                <h2>5,000 properties</h2>
            </div>
         </div>

         <div className='featuredItem'>
            <img 
            src='https://source.unsplash.com/500x500/?tokyo&sig1'
             className='featureImg'
            />    
            <div className='featuredTitle'>
                <h1>Tokyo</h1>
                <h2>12,000 properties</h2>
            </div>
         </div>
    </div>
  )
}

export default Featured