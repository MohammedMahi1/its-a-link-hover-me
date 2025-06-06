
import Box from '../components/ui/box'
import Container from '../components/ui/container'
import Link from '../components/ui/link'
import Paper from '../libs/paper'


const App = () => {
  return (
    <Container flex="center">
      <Paper>
        <Box className='text-xl flex flex-row flex-wrap'>
          This is a <Link href='/store'> Link </Link>, hover on it
        </Box>
      </Paper>
    </Container>
  )
}

export default App