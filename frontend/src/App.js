import { ChakraProvider, useToast, Box  } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showGreeting, wrongAuthData } from './store/actions/userActions'
import { getIssuedTokens, getPurchasedTokens } from './store/actions/legalActions'
import { getRegistrationRequests, getTokenApproveRequests } from './store/actions/adminActions'
import { getMarketTokens } from './store/actions/marketActions'
import Unauthorized from './components/Unauthorized/Unauthorized'
import Legal from './components/Legal/Legal'
import Natural from './components/Natural/Natural'
import Market from './components/Market/Market'
import Admin from './components/Admin/Admin'
import theme from './theme/index'

function App() {

  const toast = useToast()
  const user = useSelector(state => state.user)
  const legal = useSelector(state => state.legal)
  const admin = useSelector(state => state.admin)
  const market = useSelector(state => state.market)
  const natural = useSelector(state => state.natural)
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
    if(user.userAuthenticated){
      switch (user.type) {
        case 'LEGAL':
          dispatch(getIssuedTokens(user.uuid))
          dispatch(getMarketTokens())
          dispatch(getPurchasedTokens())
          break
  
        case 'NATURAL':
          dispatch(getMarketTokens())
          break
        
        case 'ADMIN':
          dispatch(getMarketTokens())
          dispatch(getRegistrationRequests())
          dispatch(getTokenApproveRequests())
      
        default:
          break
      } 
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
        
        user.marketPlaceShown ? <Market user={user} market={market}/> :
            user.type === 'LEGAL' ? <Legal legal={legal} user={user}/> : 
            user.type === 'NATURAL' ? <Natural natural={natural} user={user}/> : 
            user.type === 'ADMIN' ? <Admin admin={admin} user={user}/> : null
        :
        <Unauthorized user={user}/>
      }
    </ChakraProvider>
  );
}

export default App;
