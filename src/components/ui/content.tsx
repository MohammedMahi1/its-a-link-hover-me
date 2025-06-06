import React, { ReactElement } from 'react'

type ContentProps = {
    Component:ReactElement;
    title:string
}

const Content = ({Component,title}:ContentProps) => {
  return (
    <div className='py-6'>
        <span className='text-2xl'>
            {title}
        </span>
        <hr className='border-gray-500 my-2'/>
        {Component}
    </div>
  )
}

export default Content