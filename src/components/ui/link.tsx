import { ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "motion/react"

type LinkProps = {
    children: ReactNode
} & React.ComponentProps<"a">


const Link: React.FC<LinkProps> = ({ children, className, ...props }) => {
    const [isHovered,setIsHovered] = useState(false)
    return (
        <motion.div className="flex flex-col w-fit relative "
            initial={{
                    color:"#fafafa"
                }}
            animate={
                isHovered ? {
                    color:"#000000"
                }:{
                    color:"#fafafa"
                }
            }
            onHoverStart={()=>setIsHovered(true)}
            onHoverEnd={()=>setIsHovered(false)}
        >
            <a
                className={twMerge("font-semibold px-[0.2rem] flex flex-col items-end justify-end w-fit relative z-[999]", className)}
                {...props}
            >
                {children}
            </a>
            <motion.div 
            className="bg-green-500 w-full absolute bottom-0 z-0 "
            initial={{
                height:"9%"
            }}
            animate={
                isHovered ?{
                    height:"100%",
                    borderRadius:"4px"
                }:
                {
                    height:"9%"
                }
            }
            >
            </motion.div>
        </motion.div>
    )
}

export default Link