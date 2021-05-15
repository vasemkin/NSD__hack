import { ChakraProvider, useToast, Box  } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showGreeting, wrongAuthData } from './store/actions/userActions'
import Unauthorized from './components/Unauthorized/Unauthorized'
import Legal from './components/Legal/Legal'
import theme from './theme/index'

function App() {

  const toast = useToast()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.greetingShown) {
      toast({
        position: "bottom",
        render: () => (
          <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
            Добро пожаловать, {user.uuid}
          </Box>
        ),
        duration: 4000,
      })
      dispatch(showGreeting())
    }
    if (user.wrongAuthData) {
      toast({
        position: "bottom",
        render: () => (
          <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
            Некорректные данные
          </Box>
        ),
        duration: 4000,
      })
      dispatch(wrongAuthData())
    }
  }, [user.userAuthenticated, user.wrongAuthData])

  return (
    <ChakraProvider theme={theme}>
      {
        user.userAuthenticated ?  
        user.currentPage === 'LEGAL' ? <Legal user={user}/> : null
        :
        <Unauthorized user={user}/>
      }
    </ChakraProvider>
  );
}

export default App;
