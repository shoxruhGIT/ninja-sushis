import React from 'react'
import Etap from './etap'

const Layout = ({children}) => {
  return (
    <div className='w-[1525px] m-auto flex justify-between items-center'>
        <Etap/>
        {children}
    </div>
  )
}

export default Layout