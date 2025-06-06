
import Box from '../components/ui/box'
import Container from '../components/ui/container'
import Link from '../components/ui/Link'

const App = () => {
  return (
    <Container  flex={'col'}>
      <Box className='text-xl flex flex-row'>
        This is a <Link href='/store'> Link </Link>, hover on it
      </Box>
    </Container>
  )
}

export default App