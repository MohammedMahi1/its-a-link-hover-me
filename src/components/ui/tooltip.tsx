

type TooltipProps = {
    label:string;
}

const Tooltip = ({label}:TooltipProps) => {
  return (
    <div>
        {label}
    </div>
  )
}

export default Tooltip