import { 
    Flex,
    Box
 } from "@chakra-ui/react"

import React from "react"
import Header from '../Common/Header/Header'
import Tokens from './Tokens/Tokens'
import Publications from './Publications/Publications'
import TopEmmitents from './TopEmmitents/TopEmmitents'

function Market(props) {
    const user = props.user
    const market = props.market
    return(
        <Box bg="#fff" h="100vh">
            <Header user={user}/>

            <Flex justify="space-between" w="100%" p="30px 80px">
                <Box w="70%">
                    <Tokens market={market} />
                </Box>

                <Box w="30%" ml="2rem">
                    <Publications />
                    <TopEmmitents />
                </Box>
            </Flex>
        </Box>

    )
}

export default Market