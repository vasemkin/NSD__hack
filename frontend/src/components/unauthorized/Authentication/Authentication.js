import {
    FormControl,
    FormLabel,
    Box,
    Input,
    Button,
    Flex,
    Text,
    Heading
  } from "@chakra-ui/react"

import { switchLoginRegister, authenticateUser } from '../../../store/actions/userActions'
import { useDispatch } from 'react-redux'
import React , { useState } from 'react'

function Authentication () {
    const dispatch = useDispatch()
    const [authValue, setAuthValue] = useState({
        id : '',
        password : ''
    })

    function triggerLoginRegSwitch () {
        dispatch(switchLoginRegister())
    }

    function triggerAuthenticateUser () {
        dispatch(authenticateUser(authValue))
    }

    return(
        <Box borderWidth="1px" p="2rem" borderRadius="2rem" bg="#fff">

            <Heading as="h1" mb="2rem">Вход</Heading>

            <FormControl id="authentication__id" mb="1rem"> 
                <FormLabel mb="0">Логин</FormLabel>
                <Input
                    variant="flushed"
                    onChange={(e) => setAuthValue({
                        ...authValue,
                        id : e.target.value
                        })
                    }
                    type="text" />
            </FormControl>

            <FormControl id="authentication__password" mb="2rem">
                <FormLabel mb="0">Пароль</FormLabel>
                <Input 
                    w="336px"
                    variant="flushed"
                    onChange={(e) => setAuthValue({
                        ...authValue,
                        password : e.target.value
                        })
                    }
                    type="password" />
            </FormControl>

            <Button width="100%" size="xl" mb="2rem" onClick={triggerAuthenticateUser}>Войти</Button>

            <Flex justify="flex-start" align="center">
                <Text mr="0.5rem">Еще нет аккаунта?</Text>
                <Button variant="link" color="rgb(200,15,46)" onClick={triggerLoginRegSwitch}>Зарегистрироваться</Button>
            </Flex>

        </Box>
    )
}

export default Authentication