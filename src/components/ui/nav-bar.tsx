import Button from "./button"

const NavBar = () => {
  return (
    <div className="flex flex-rows justify-between items-center px-16 py-4">
        <div className="text-3xl">          
            Logo
        </div>
        <div>

        </div>
        <Button> 
            Contact
        </Button>
    </div>
  )
}

export default NavBar