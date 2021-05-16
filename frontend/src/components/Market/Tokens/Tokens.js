import { 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
    Box,
    FormControl,
    FormLabel,
    Input
 } from "@chakra-ui/react"

import React, { useState } from "react"

function Tokens(props) {
    const market = props.market

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ currentToken, setCurrentToken ] = useState({
        token : null
    })

    function triggerPurchase(token) {
        onOpen()
        setCurrentToken({
            token : token
        })
    }

    return(
        <Box>
            <Table variant="simple" size="md">
                <Thead>
                    <Tr>
                        <Th fontSize="14px" color="#000">Название</Th>
                        <Th fontSize="14px" color="#000">Цена выплаты</Th>
                        <Th fontSize="14px" color="#000">Дата погашения</Th>
                        <Th fontSize="14px" color="#000">Конец аукциона</Th>
                        <Th fontSize="14px" color="#000">Кол-во</Th>
                        <Th fontSize="14px" color="#000">&nbsp;</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {market.marketTokens.length > 0
                    
                    ? market.marketTokens.map((token) => {
                        return(
                            <Tr key={token.name}>
                                <Td>{token.name}</Td>
                                <Td>{token.payoff}</Td>
                                <Td>{token.expiryDate}</Td>
                                <Td>{token.auctionEndDate}</Td>
                                <Td>{token.totalCount}</Td>
                                <Td>
                                    <Button onClick={() => {triggerPurchase(token)}} variant="secondary" size="sm">Купить</Button>
                                </Td>
                            </Tr>
                        )
                    })
                    :
                    null
                }
                </Tbody>
            </Table>


            <Modal size="sm" isOpen={isOpen} isCentered={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius="30px" p="30px">
                    <ModalHeader p="0" mb="2rem">Купить токен {currentToken.name}</ModalHeader>
                    <ModalCloseButton mr="30px" mt="30px" maxWidth="none"/>
                    <ModalBody p="0">

                        <FormControl mb="1rem">
                            <FormLabel mb="0">Количество</FormLabel>
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
                            <FormLabel mb="0">Ставка</FormLabel>
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
                        <Button>Купить</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    

        </Box>
        )
}

export default Tokens