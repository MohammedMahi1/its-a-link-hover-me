import Button from './button'

const NavContent = () => {
    return (
        <>
            <h1 className='font-DotGothic16 tracking-[4px]'>
                MOHAMMED MAHI
            </h1>
            <Button>
                Contact
            </Button>
        </>
    )
}

const Navbar = () => {
    return (
        <div className='fixed top-0 w-screen flex flex-row justify-between items-center px-20 py-4'>
            <NavContent/>
        </div>
    )
}


export default Navbar