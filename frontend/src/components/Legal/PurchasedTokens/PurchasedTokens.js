import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button
} from '@chakra-ui/react'
  
function PurchasedTokens () {
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th fontSize="14px" color="#000">Название</Th>
                    <Th fontSize="14px" color="#000">Цена ВЫплаты</Th>
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
                        <Button variant="secondary" size="sm">Отказаться от покупки</Button>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    )
}  

export default PurchasedTokens