import { ReactNode } from "react";

type BoxProps = {
    children : ReactNode;
} & React.ComponentProps<"div">

const Box:React.FC<BoxProps> = ({children,...props}) => {
  return (
    <div {...props}>
        {children}
    </div>
  )
}

export default Box