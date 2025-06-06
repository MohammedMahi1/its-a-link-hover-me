import React, { ReactNode } from 'react'


type PaperProps = {
    children : ReactNode;
} & React.ComponentProps<"div">

const Paper:React.FC<PaperProps> = ({children}) => {
  return (
    <div className='outline-1 p-5 rounded-lg border-gray-300 w-fit h-fit '>
        {children}
    </div>
  )
}

export default Paper