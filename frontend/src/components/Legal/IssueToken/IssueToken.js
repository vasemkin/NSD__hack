import { 
    Flex,
    Button,
    Box,
    Image,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Grid,
    FormControl,
    FormLabel,
    Input,
    useToast
 } from "@chakra-ui/react"

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postIssuedToken } from '../../../store/actions/legalActions'

function IssueToken (props) {
    const toast = useToast()
    const user = props.user
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    const [issueToken, setIssueToken] = useState({
        name : '',
        legalId : user.uuid,
        expiryDate : null,
        totalCount : 0,
        payoff : 0,
        auctionEndDate : null
    })

    function triggerIssueToken() {
        dispatch(postIssuedToken(issueToken))
        toast({
            position: "bottom",
            render: () => (
            <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
                Заявка на выпуск токена отправлена
            </Box>
            ),
            duration: 4000,
        })
    }

    return(
    <Box>
        <Flex as={Button} onClick={onOpen} h="99px" justify="center" align="center" w="100%" borderRadius="30px">

            <Box w="34px" h="34px">
                <Image src="./img/Legal__newtoken.svg" alt="New token" />
            </Box>

            <Text ml="1rem">Выпустить токен</Text>

        </Flex>
        
        <Modal size="xl" isOpen={isOpen} isCentered={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius="30px" p="30px">
                <ModalHeader p="0" mb="2rem">Выпуск нового токена</ModalHeader>
                <ModalCloseButton mr="30px" mt="30px" maxWidth="none"/>
                <ModalBody p="0">

                    <Grid templateColumns="repeat(2, 1fr)" gap={30}>

                        <FormControl >
                            <FormLabel mb="0">Название токена</FormLabel>
                            <Input 
                                variant="flushed"
                                onChange={(e) => setIssueToken({
                                    ...issueToken,
                                    name : e.target.value
                                    })
                                }
                                type="text" />
                        </FormControl>

                        <FormControl >
                            <FormLabel mb="0">Количество токенов</FormLabel>
                            <Input 
                                variant="flushed"
                                onChange={(e) => setIssueToken({
                                    ...issueToken,
                                    totalCount : e.target.value
                                    })
                                }
                                type="text" />
                        </FormControl> 

                        <FormControl >
                            <FormLabel mb="0">Дата выплаты</FormLabel>
                            <Input 
                                variant="flushed"
                                onChange={(e) => setIssueToken({
                                    ...issueToken,
                                    expiryDate : e.target.value
                                    })
                                }
                                type="text" />
                        </FormControl>

                        <FormControl >
                            <FormLabel mb="0">Дата окончания аукциона</FormLabel>
                            <Input 
                                variant="flushed"
                                onChange={(e) => setIssueToken({
                                    ...issueToken,
                                    auctionEndDate : e.target.value
                                    })
                                }
                                type="text" />
                        </FormControl>

                        <FormControl>
                            <FormLabel mb="0">Сумма выплаты</FormLabel>
                            <Input 
                                variant="flushed"
                                onChange={(e) => setIssueToken({
                                    ...issueToken,
                                    payoff : e.target.value
                                    })
                                }
                                type="text" />
                        </FormControl>

                        <FormControl>
                            <FormLabel mb="0">Минимальная сумма покупки</FormLabel>
                            <Input 
                                variant="flushed"
                                onChange={(e) => setIssueToken({
                                    ...issueToken,
                                    payoff : e.target.value
                                    })
                                }
                                type="text" />
                        </FormControl>

                    </Grid>

                </ModalBody>

                <ModalFooter p="0" mt="2rem">
                    <Button onClick={triggerIssueToken}>Выпустить</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    </Box>
    )
}

export default IssueToken