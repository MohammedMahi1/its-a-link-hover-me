import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { cn } from "../../libs/cn";


const containerVariants = cva(
    [
        "px-16 ",
        "py-4",
        "flex"
    ],
    {
        variants: {
            flex: {
                col: "flex-col",
                row: "flex-row",
                center:"items-center justify-center w-[100vw] h-[100vh]"
            }
        },
        defaultVariants: {
            flex: "col"
        }
    }
)

type ContainerProps = {
    children: ReactNode;
} & React.ComponentProps<"div"> & VariantProps<typeof containerVariants>

const Container: React.FC<ContainerProps> = ({ flex,children, className, ...rest }) => {
    return (
        <div className={cn(containerVariants({flex,className}))} {...rest}>
            {children}
        </div>
    )
}

export default Container