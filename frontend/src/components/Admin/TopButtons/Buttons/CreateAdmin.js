import { 
    Flex,
    Button,
    Box,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    useToast
 } from "@chakra-ui/react"

import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../../store/actions/userActions'

function CreateAdmin() {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    const [registerAdmin, setRegisterAdmin] = useState({
        uuid : '',
        password : '',
        type : 'ADMIN'
    })

    function triggerAdminCreation () {
        dispatch(registerUser(registerAdmin))

        toast({
            position: "bottom",
            render: () => (
            <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
                Администратор {registerAdmin.uuid} успешно создан
            </Box>
            ),
            duration: 4000,
        })
    }

    return(<Box w="31%" >
            <Flex 
            w="100%"
            as={Button} 
            onClick={onOpen}
            variant="secondary" 
            fontSize="16px" 
            color="#000" 
            h="99px" 
            justify="center" 
            align="center" 
            borderRadius="30px">
                <Text>Создать админа</Text>
            </Flex>
        
            <Modal size="sm" isOpen={isOpen} isCentered={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius="30px" p="30px">
                    <ModalHeader p="0" mb="2rem">Создание админа</ModalHeader>
                    <ModalCloseButton mr="30px" mt="30px" maxWidth="none"/>
                    <ModalBody p="0">

                        <FormControl mb="1rem">
                            <FormLabel mb="0">Логин</FormLabel>
                            <Input 
                                variant="flushed"
                                onChange={(e) => setRegisterAdmin({
                                    ...registerAdmin,
                                    uuid : e.target.value
                                    })
                                }
                                type="text" />
                        </FormControl> 

                        <FormControl >
                            <FormLabel mb="0">Пароль</FormLabel>
                            <Input 
                                variant="flushed"
                                onChange={(e) => setRegisterAdmin({
                                    ...registerAdmin,
                                    uuid : e.target.value
                                    })
                                }
                                type="password" />
                        </FormControl> 

                    </ModalBody>

                    <ModalFooter p="0" mt="2rem">
                        <Button onClick={triggerAdminCreation}>Создать</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    </Box>
    )
}

export default CreateAdmin