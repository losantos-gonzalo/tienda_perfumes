import { Box } from '@chakra-ui/react'
import './App.css'
import CartPerfumes from './assets/components/cartPerfumes/CartPerfumes'
import './assets/components/cartPerfumes/cartPerfumes.css'
import Navbar from './assets/components/navBar/NavBar'

function App() {

  return (
    <Box>
      <Navbar />
      <CartPerfumes />
    </Box>
  )
}

export default App
