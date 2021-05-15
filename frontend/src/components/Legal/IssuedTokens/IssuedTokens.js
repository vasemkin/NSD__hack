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
  
function IssuedTokens (props) {
    const legal = props.legal

    return(
        <Table variant="simple" size="md">
            <Thead>
                <Tr>
                    <Th fontSize="14px" color="#000">Название</Th>
                    <Th fontSize="14px" color="#000">Цена Выплаты</Th>
                    <Th fontSize="14px" color="#000">Дата погашения</Th>
                    <Th fontSize="14px" color="#000">Статус</Th>
                    <Th fontSize="14px" color="#000" isNumeric>Кол-во</Th>
                    <Th fontSize="14px" color="#000">Действия</Th>
                </Tr>
            </Thead>
            <Tbody>
                {legal.issuedTokens.length > 0
                
                ? legal.issuedTokens.map((token) => {
                    return(
                        <Tr key={token.name}>
                            <Td>{token.name}</Td>
                            <Td>{token.payoff}</Td>
                            <Td>{token.expiryDate}</Td>
                            <Td>
                                {token.creationStatus === 'PENDING' ? 'В рассмотрении' : null}
                            </Td>
                            <Td isNumeric>{token.totalCount}</Td>
                            <Td>
                                <Button variant="secondary" size="sm">Убрать с торгов</Button>
                            </Td>
                        </Tr>
                    )
                })
                :
                null
            }
            </Tbody>
        </Table>
    )
}  

export default IssuedTokens