import React from 'react'

function Map() {
  return (

      <div className="w-full">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0795766530064!2d88.44202297507786!3d22.576126879489316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275088cb7d7fb%3A0x25197be094de1087!2sRoyal%20PG!5e0!3m2!1sen!2sin!4v1753312461574!5m2!1sen!2sin" 
        width="100%" height="350" 
        style={{border:0}} 
        allowfullscreen="1" 
        oading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  )
}

export default Map