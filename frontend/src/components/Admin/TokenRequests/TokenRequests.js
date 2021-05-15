import React from 'react'

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
    Text
} from '@chakra-ui/react'
  
function TokenRequests () {
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
                    <Tr>
                        <Td>inches</Td>
                        <Td>inches</Td>
                        <Td>inches</Td>
                        <Td>inches</Td>
                        <Td>inches</Td>
                        <Td>inches</Td>
                        <Td>
                            <Button ml="rem" variant="secondary" size="sm">Подробнее</Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
        )
}  

export default TokenRequests