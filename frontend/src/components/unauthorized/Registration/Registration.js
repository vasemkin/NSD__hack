import {
    FormControl,
    FormLabel,
    Box,
    Input,
    Button,
    Flex,
    Text,
    Heading,
    useRadioGroup,
    useToast
  } from "@chakra-ui/react"

import RadioCard from '../../Common/RadioCard/RadioCard'
import { switchLoginRegister, registerUser } from '../../../store/actions/userActions'
import { useDispatch } from 'react-redux'
import React , { useState } from 'react'

function Registration (props) {
    const dispatch = useDispatch()
    const toast = useToast()

    const options = ["LEGAL", "NATURAL"]
    const defaultTypeValue = options[0]

    const [registerValue, setRegisterValue] = useState({
        id : '',
        password : '',
        entity_type : defaultTypeValue
    })

    function triggerLoginRegSwitch () {
        dispatch(switchLoginRegister())
    }

    function triggerRegisterUser () {
        dispatch(registerUser(registerValue))
        toast({
            position: "bottom",
            render: () => (
            <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
                Запрос на регистрацию успешно отправлен
            </Box>
            ),
            duration: 4000,
        })
    }

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "userType",
      defaultValue: defaultTypeValue,
      onChange: (userType) => {
        setRegisterValue({
            ...registerValue,
            entity_type : userType
            })
        },
    })
  
    const group = getRootProps()

    return(
        <Box borderWidth="1px" p="2rem" borderRadius="1rem" bg="#fff">

            <Heading as="h1" fontSize="30px" mb="2rem">Регистрация</Heading>
            
            <Flex justify="space-between" {...group} mb="2rem">
                {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    <RadioCard customWidth={"48%"} key={value} {...radio}>
                        {
                            value === 'LEGAL' ? 'Юр. лицо' : 'Физ. лицо'
                        }
                    </RadioCard>
                )
                })}
            </Flex>

            <FormControl id="registration__id" mb="1rem">
                <FormLabel fontSize="16px" color="rgba(88, 88, 88, 1);" mb="0">Логин</FormLabel>
                <Input 
                    onChange={(e) => setRegisterValue({
                        ...registerValue,
                        id : e.target.value
                        })
                    }
                    w="336px"
                    border="none"
                    borderRadius="none"
                    p="15px"
                    borderBottom="1px solid #CCCCCC"
                    type="text" />
            </FormControl>

            <FormControl id="registration__password" mb="1rem">
                <FormLabel fontSize="16px" color="rgba(88, 88, 88, 1);" mb="0">Пароль</FormLabel>
                <Input
                    onChange={(e) => setRegisterValue({
                        ...registerValue,
                        password : e.target.value
                        })
                    } 
                    border="none"
                    borderRadius="none"
                    p="15px"
                    borderBottom="1px solid #CCCCCC"
                    type="password" />
            </FormControl>

            <FormControl id="registration__repeatpassword" mb="2rem">
                <FormLabel fontSize="16px" color="rgba(88, 88, 88, 1);" mb="0">Пароль еще раз</FormLabel>
                <Input
                    // onChange={(e) => setRegisterValue({
                    //     ...registerValue,
                    //     password : e.target.value
                    //     })
                    // } 
                    border="none"
                    borderRadius="none"
                    p="15px"
                    borderBottom="1px solid #CCCCCC"
                    type="password" />
            </FormControl>

            <Button 
                size="xl"
                width="100%"
                mb="2rem"
                onClick={triggerRegisterUser}>
                Зарегистрироваться</Button>

            <Flex justify="flex-start" align="center">
                <Text mr="0.5rem">Уже есть аккаунт?</Text>
                <Button size="xl" variant="link" color="rgb(200,15,46)" onClick={triggerLoginRegSwitch}>Войти</Button>
            </Flex>

        </Box>
    )
}

export default Registration