import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { allowTokenIssue } from '../../../store/actions/adminActions'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Box,
    Flex,
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
    useToast
} from '@chakra-ui/react'
  
function TokenRequests (props) {
    const dispatch = useDispatch()
    const admin = props.admin
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ currentToken, setCurrentToken ] = useState({
        name : '',
        totalCount : 0,
        legalId : '',
        payoff : 0,
        expiryDate : '',
        auctionEndDate : ''
    })

    function triggerApproveToken() {
        dispatch(allowTokenIssue(currentToken.legalId, currentToken.name))
        toast({
            position: "bottom",
            render: () => (
            <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
                Токен успешно выпущен!
            </Box>
            ),
            duration: 4000,
        })
    }

    function triggerDeclineToken() {
        toast({
            position: "bottom",
            render: () => (
            <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
                Токен отклонен.
            </Box>
            ),
            duration: 4000,
        })
    }

    function triggerTokenModal(token){
        setCurrentToken({
            name : token.name,
            totalCount : token.totalCount,
            legalId : token.legalId,
            payoff : token.payoff,
            expiryDate : token.expiryDate,
            auctionEndDate : token.auctionEndDate
        })
        onOpen()
    }

    return(
        <Box mt="2rem">
            <Box p="20px" bg="#f3f3f3" borderRadius="30px 30px 0 0">
                <Flex justify="start" align="center">
                    <Flex mr="1.5rem" maxWidth="37px" w="100%" h="37px" p="8px" bg="#C80F2E" borderRadius="8px" justify="center">
                        <Image src="./img/Legal__newtoken.svg" alt="Promo icon" />
                    </Flex>
                    <Text>Запросы на выпуск токена</Text>
                </Flex>
            </Box>

            <Table>
                <Thead>
                    <Tr>
                        <Th fontSize="14px" color="#000">Название</Th>
                        <Th fontSize="14px" color="#000">Цена выплаты</Th>
                        <Th fontSize="14px" color="#000">Цена за токен</Th>
                        <Th fontSize="14px" color="#000">Пользователь</Th>
                        <Th fontSize="14px" color="#000">Дата погашения</Th>
                        <Th fontSize="14px" color="#000">Кол-во</Th>
                        <Th fontSize="14px" color="#000">Действия</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        admin.tokenApproveRequests.length > 0 ?
                        admin.tokenApproveRequests.map((token) => {
                            return(
                                <Tr>
                                    <Td>{token.name}</Td>
                                    <Td>{token.payoff}</Td>
                                    <Td>{token.payoff}</Td>
                                    <Td>{token.legalId}</Td>
                                    <Td>{token.expiryDate}</Td>
                                    <Td>{token.totalCount}</Td>
                                    <Td>
                                        <Button ml="rem" onClick={() => {triggerTokenModal(token)}} variant="secondary" size="sm">Подробнее</Button>
                                    </Td>
                                </Tr>
                            )
                        })
                        : null
                    }
                </Tbody>
            </Table>

            <Modal size="xl" isOpen={isOpen} isCentered={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxWidth="1000px" borderRadius="30px" p="30px">
                    <ModalHeader p="0" mb="2rem">Запрос на выпуск токена</ModalHeader>
                    <ModalCloseButton mr="30px" mt="30px" maxWidth="none"/>

                    <ModalBody p="0">

                        <Table>
                            <Thead>
                                <Tr>
                                    <Th fontSize="14px" color="#000">Название</Th>
                                    <Th fontSize="14px" color="#000">Заявки</Th>
                                    <Th fontSize="14px" color="#000">Имя продавца</Th>
                                    <Th fontSize="14px" color="#000">Цена выплаты</Th>
                                    <Th fontSize="14px" color="#000">Цена за токен</Th>
                                    <Th fontSize="14px" color="#000">Дата погашения</Th>
                                    <Th fontSize="14px" color="#000">Конец аукциона</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{currentToken.name}</Td>
                                    <Td>{currentToken.totalCount}</Td>
                                    <Td>{currentToken.legalId}</Td>
                                    <Td>{currentToken.payoff}</Td>
                                    <Td>{currentToken.payoff}</Td>
                                    <Td>{currentToken.expiryDate}</Td>
                                    <Td>{currentToken.auctionEndDate}</Td>
                                </Tr>
                            </Tbody>
                        </Table>

                    </ModalBody>

                    <ModalFooter p="0" mt="2rem">
                        <Button fontSize="16px" onClick={triggerDeclineToken} variant="secondary" mr="1rem">Отклонить</Button>
                        <Button fontSize="16px" onClick={triggerApproveToken}>Принять</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    
        </Box>
        )
}  

export default TokenRequests