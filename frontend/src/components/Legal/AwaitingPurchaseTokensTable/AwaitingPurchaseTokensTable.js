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
  
function AwaitingPurchaseTokensTable () {
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Название</Th>
                    <Th>Цена ВЫплаты</Th>
                    <Th>Цена покупки</Th>
                    <Th>Дата погашения</Th>
                    <Th isNumeric>Кол-во</Th>
                    <Th>Действия</Th>
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
                        <Button size="sm">Отказаться от покупки</Button>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    )
}  

export default AwaitingPurchaseTokensTable