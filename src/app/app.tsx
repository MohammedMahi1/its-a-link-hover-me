
import Box from '../components/ui/box'
import Container from '../components/ui/container'
import Link from '../components/ui/Link'
import Paper from '../components/ui/paper'

const App = () => {
  return (
    <Container flex={'col'}>
      <Paper>
        <Box className='text-xl flex flex-row'>
          This is a <Link href='/store'> Link </Link>, hover on it
        </Box>
      </Paper>
    </Container>
  )
}

export default App