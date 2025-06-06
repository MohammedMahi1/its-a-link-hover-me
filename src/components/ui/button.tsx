import { ReactNode } from "react"
import { cn } from "../../libs/cn"
import { cva, VariantProps } from "class-variance-authority"


const variants = cva(
  [
    'py-3',
    'px-5',
    "rounded-xl",
  ],
  {
    variants:{
      variant:{
        containe:["bg-black text-white"]
      },
      size:{
        sm:["text-sm font-semibold"],
        md:["text-md font-semibold"],
        lg:["text-lg font-bold"]
      }
    },
    defaultVariants:{
      variant:"containe",
      size:"md"
    }
  }
)


type ButtonProps = {
    children ?: any
} & React.ComponentProps<"button"> & VariantProps<typeof variants>



const Button:React.FC<ButtonProps> = ({variant, children, className,...props}) => {
  return (
    <button className={cn(variants({variant,className}))} {...props}>{children}</button>
  )
}

export default Button