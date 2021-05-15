import { 
    Flex,
    Box
 } from "@chakra-ui/react"

import React from "react"
import Header from '../Common/Header/Header'
import TopButtons from './TopButtons/TopButtons'
import BankData from './BankData/BankData'
import TokenRequests from './TokenRequests/TokenRequests'
import RegisterRequests from './RegisterRequests/RegisterRequests'


function Admin(props) {
    const user = props.user
    const admin = props.admin
    return(
        <Box bg="#fff" h="100vh">
            <Header user={user}/>

            <Flex justify="space-between" w="100%" p="30px 80px">
                <Box w="70%">
                    <TopButtons admin={admin}/>
                    <TokenRequests />
                </Box>

                <Box w="30%" ml="2rem">
                    <BankData />
                    <RegisterRequests />
                </Box>
            </Flex>
        </Box>

    )
}

export default Admin