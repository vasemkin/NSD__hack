import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Flex,
    Td,
    Button
} from '@chakra-ui/react'
  
function PurchasedTokens () {
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th fontSize="14px" color="#000">Название</Th>
                    <Th fontSize="14px" color="#000">Цена выплаты</Th>
                    <Th fontSize="14px" color="#000">Цена покупки</Th>
                    <Th fontSize="14px" color="#000">Дата погашения</Th>
                    <Th fontSize="14px" color="#000" isNumeric>Кол-во</Th>
                    <Th fontSize="14px" color="#000">Действия</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>
                        <Flex>
                            <Button variant="secondary" size="sm">Передать токен</Button>
                            <Button ml="1rem" variant="secondary" size="sm">Подробнее</Button>
                        </Flex>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    )
}  

export default PurchasedTokens