import { 
    Flex,
    Box,
    useRadioGroup
 } from "@chakra-ui/react"

import { useDispatch } from "react-redux"
import React from "react"
import { getIssuedTokens, switchTableType } from '../../store/actions/legalActions'
import Header from '../Common/Header/Header'
import AwaitingPurchaseTokens from './AwaitingPurchaseTokens/AwaitingPurchaseTokens'
import IssuedTokens from './IssuedTokens/IssuedTokens'
import PurchasedTokens from './PurchasedTokens/PurchasedTokens'
import BankData from './BankData/BankData'
import IssueToken from './IssueToken/IssueToken'
import RadioCard from '../Common/RadioCard/RadioCard'

function Legal(props) {
    const user = props.user
    const legal = props.legal
    const dispatch = useDispatch()

    const options = ["issued_tokens", "purchased_tokens", "awaiting_purchase_tokens"]
    const defaultTypeValue = options[0]
    
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "tokenType",
        defaultValue: defaultTypeValue,
        onChange: (tokenType) => {
            dispatch(switchTableType(tokenType))
            }
        })
        
    const group = getRootProps()

    return(
        <Box bg="#fff" h="100vh">
            <Header user={user}/>

            <Flex justify="space-between" w="100%" p="30px 80px">

                <Box w="70%">
                    <Flex maxWidth="600px" justify="space-between" {...group} mb="2rem">
                        {options.map((value) => {
                        const radio = getRadioProps({ value })
                        return (
                            <RadioCard customWidth={"31%"} key={value} {...radio}>
                                {
                                    value === 'issued_tokens' ? 'Выпущенные токены' : null
                                }
                                {
                                    value === 'purchased_tokens' ? 'Купленные токены' : null
                                }
                                {
                                    value === 'awaiting_purchase_tokens' ? 'Запросы на покупку' : null
                                }
                            </RadioCard>
                        )
                        })}
                    </Flex>

                    <Box>
                        {
                            legal.tableType === 'issued_tokens' ? <IssuedTokens legal={legal} /> : null
                        }

                        {
                            legal.tableType === 'purchased_tokens' ? <PurchasedTokens /> : null
                        }

                        {
                            legal.tableType === 'awaiting_purchase_tokens' ? <AwaitingPurchaseTokens /> : null
                        }
                    </Box>
                
                </Box>

                <Box w="30%" ml="2rem">
                    <BankData />
                    <IssueToken legal={legal} user={user}/>
                </Box>

            </Flex>


        </Box>
    )
}

export default Legal