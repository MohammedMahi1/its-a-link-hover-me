
import Box from '../components/ui/box'
import Container from '../components/ui/container'
import Content from '../components/ui/content'
import Link from '../components/ui/link'
import Paper from '../components/ui/paper'
import Tooltip from '../components/ui/tooltip'


const ItsALink = () => {
  return (
    <Paper>
      <Box className='text-xl flex flex-row'>
        This is a <Link href='/store'> Link </Link>, hover on it
      </Box>
    </Paper>
  )
}


const AnimateTooltip = ()=>{
  return (
    <Paper>
      <Tooltip label='Sport'/>
    </Paper>
  )
}

const App = () => {
  return (
    <Container flex={'col'}>
      <Content
        title='Its a link'
        Component={<ItsALink />}
      />
    </Container>
  )
}

export default App