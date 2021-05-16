import { 
    Flex,
    Box,
    useRadioGroup
 } from "@chakra-ui/react"

import { useDispatch } from "react-redux"
import React from "react"
import { switchNaturalTableType } from '../../store/actions/naturalActions'
import Header from '../Common/Header/Header'
import AwaitingPurchaseTokens from './AwaitingPurchaseTokens/AwaitingPurchaseTokens'
import PurchasedTokens from './PurchasedTokens/PurchasedTokens'
import BankData from './BankData/BankData'
import RadioCard from '../Common/RadioCard/RadioCard'

function Natural(props) {
    const user = props.user
    const natural = props.natural
    const dispatch = useDispatch()

    const options = ["purchased_tokens", "awaiting_purchase_tokens"]
    const defaultTypeValue = options[0]
    
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "tokenType",
        defaultValue: defaultTypeValue,
        onChange: (tokenType) => {
            dispatch(switchNaturalTableType(tokenType))
            }
        })
        
    const group = getRootProps()

    return(
        <Box bg="#fff" h="100vh">
            <Header user={user}/>

            <Flex justify="space-between" w="100%" p="30px 80px">

                <Box w="70%">
                    <Flex maxWidth="400px" justify="space-between" {...group} mb="2rem">
                        {options.map((value) => {
                        const radio = getRadioProps({ value })
                        return (
                            <RadioCard customWidth={"47%"} key={value} {...radio}>
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
                            natural.tableType === 'purchased_tokens' ? <PurchasedTokens /> : null
                        }

                        {
                            natural.tableType === 'awaiting_purchase_tokens' ? <AwaitingPurchaseTokens /> : null
                        }
                    </Box>
                
                </Box>

                <Box w="30%" ml="2rem">
                    <BankData />
                </Box>

            </Flex>


        </Box>
    )
}

export default Natural