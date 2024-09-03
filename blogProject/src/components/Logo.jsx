import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src='https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600' alt='logo' width={width} />
    </div>
  )
}

export default Logo