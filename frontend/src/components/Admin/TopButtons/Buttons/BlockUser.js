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

function BlockUser() {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()

    function triggerBlockUser () {
        toast({
            position: "bottom",
            render: () => (
            <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
                Пользователь успешно заблокирован
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
                <Text>Заблокировать пользователя</Text>
            </Flex>
        
            <Modal size="sm" isOpen={isOpen} isCentered={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius="30px" p="30px">
                    <ModalHeader p="0" mb="2rem">Блокировка</ModalHeader>
                    <ModalCloseButton mr="30px" mt="30px" maxWidth="none"/>
                    <ModalBody p="0">

                        <FormControl mb="1rem">
                            <FormLabel mb="0">Логин</FormLabel>
                            <Input 
                                variant="flushed"
                                // onChange={(e) => setRegisterAdmin({
                                //     ...registerAdmin,
                                //     uuid : e.target.value
                                //     })
                                // }
                                type="text" />
                        </FormControl> 

                        <FormControl >
                            <FormLabel mb="0">Причина</FormLabel>
                            <Input 
                                variant="flushed"
                                // onChange={(e) => setRegisterAdmin({
                                //     ...registerAdmin,
                                //     uuid : e.target.value
                                //     })
                                // }
                                type="text" />
                        </FormControl> 

                    </ModalBody>

                    <ModalFooter p="0" mt="2rem">
                        <Button onClick={triggerBlockUser}>Заблокировать</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    </Box>
    )
}

export default BlockUser