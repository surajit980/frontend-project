import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-left'>
        <h5>Your Logo</h5>
        <p>©  2021  Company Name All rights reserved</p>
      </div>

      <div className='footer-right'>
        <div style={{border:"1px solid black",borderRadius:"7px"}}>Call</div>
        <div>Cities</div>
        <div>About Us</div>
        <div>Explore</div>
      </div>
      
    </div>
  )
}

export default Footer
