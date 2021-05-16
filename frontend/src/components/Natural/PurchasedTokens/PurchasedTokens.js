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
  
function PurchasedTokens (props) {
    const natural = props.natural

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
                {natural.purchasedTokens.length > 0
                    
                    ? natural.purchasedTokens.map((token) => {
                        return(
                            <Tr key={token.name}>
                                <Td>{token.name}</Td>
                                <Td>{token.payoff}</Td>
                                <Td>{token.payoff}</Td>
                                <Td>{token.expiryDate}</Td>
                                <Td isNumeric>{token.totalCount}</Td>
                                <Td>
                                    <Button variant="secondary" size="sm">Убрать с торгов</Button>
                                </Td>             
                                <Td>
                                    <Flex>
                                        <Button variant="secondary" size="sm">Передать токен</Button>
                                        <Button ml="1rem" variant="secondary" size="sm">Подробнее</Button>
                                    </Flex>
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

export default PurchasedTokens