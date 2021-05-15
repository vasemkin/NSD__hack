import { 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button
 } from "@chakra-ui/react"

function Tokens(props) {
    const market = props.market

    return(
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
                                <Button variant="secondary" size="sm">Просмотр</Button>
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

export default Tokens