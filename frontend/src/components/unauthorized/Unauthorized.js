import { 
    Box,
    Flex, 
    Center } from "@chakra-ui/react"

import Authentication from './Authentication/Authentication'
import Registration from './Registration/Registration'
import Promo from './Promo/Promo'

function Unauthorized(props) {
    const user = props.user

    return(
        <Flex>
          <Promo />
          <Center h="100vh" w="100%">
            {
              user.loginTriggered ?
              <Authentication user={user}/>
              :
              <Registration user={user}/>
            }
          </Center>
        </Flex>
    )
}

export default Unauthorized