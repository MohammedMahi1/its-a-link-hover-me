import React, { ReactNode } from 'react'


type PaperProps = {
    children : ReactNode;
} & React.ComponentProps<"div">

const Paper:React.FC<PaperProps> = ({children,...props}) => {
  return (
    <div className='p-5 bg-paper rounded-lg w-fit h-fit ' {...props}>
        {children}
    </div>
  )
}

export default Paper