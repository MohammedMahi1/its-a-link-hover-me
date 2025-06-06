import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';


type PaperProps = {
    children : ReactNode;
} & React.ComponentProps<"div">

const Paper:React.FC<PaperProps> = ({children,className,...props}) => {
  return (
    <div className={twMerge('p-5 bg-paper rounded-lg w-fit h-fit ',className)} {...props}>
        {children}
    </div>
  )
}

export default Paper