import { 
    Flex,
    Box,
    useRadioGroup,
    Button
 } from "@chakra-ui/react"

import { useDispatch } from "react-redux"
import { getIssuedTokens } from '../../store/actions/legalActions'
import Header from '../Header/Header'
import AwaitingPurchaseTokensTable from './AwaitingPurchaseTokensTable/AwaitingPurchaseTokensTable'
import RadioCard from '../Common/RadioCard/RadioCard'

function Legal(props) {
    const user = props.user
    const dispatch = useDispatch()

    const options = ["issued_tokens", "purchased_tokens", "token_requests"]
    const defaultTypeValue = options[0]
    
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "tokenType",
        defaultValue: defaultTypeValue,
        onChange: (tokenType) => {
            console.log(tokenType)
            // setRegisterValue({
            //     ...registerValue,
            //     type : userType
            //     })
            }
        })
        
    const group = getRootProps()

    return(
        <Box bg="#fff" h="100vh">
            <Header user={user}/>

            <Flex justify="space-between" w="100%" p="30px 80px">

                <Box w="70%">
                    <Flex maxWidth="500px" justify="space-between" {...group} mb="2rem">
                        {options.map((value) => {
                        const radio = getRadioProps({ value })
                        return (
                            <RadioCard customWidth={"31%"} key={value} {...radio}>
                                {
                                    value
                                }
                            </RadioCard>
                        )
                        })}
                    </Flex>

                <AwaitingPurchaseTokensTable />

                <Button
                onClick = {() => {dispatch(getIssuedTokens(user.uuid))}}
                ></Button>
                
                </Box>

            </Flex>


        </Box>
    )
}

export default Legal