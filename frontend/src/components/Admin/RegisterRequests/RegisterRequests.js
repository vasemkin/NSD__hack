import { 
    Flex,
    Box,
    Text,
    Image,
    Button,
    useToast
 } from "@chakra-ui/react"

import React from "react"
import { useDispatch } from "react-redux"
import { approveUser, declineUser } from '../../../store/actions/adminActions'

function RegisterRequests (props) {
    const admin = props.admin
    const toast = useToast()
    const dispatch = useDispatch()

    function triggerDeclineRegisterRequest(user) {
        dispatch(declineUser(user))
        toast({
            position: "bottom",
            render: () => (
            <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
                Заявка на регистрацию {user} отклонена
            </Box>
            ),
            duration: 4000,
        })
    }

    function triggerAcceptRegisterRequest(user) {
        dispatch(approveUser(user))
        toast({
            position: "bottom",
            render: () => (
            <Box color="white" p="1rem" borderRadius="20px" textAlign="center" bg="#C80F2E">
                Заявка на регистрацию {user} одобрена
            </Box>
            ),
            duration: 4000,
        })
    }

    return(
        <Box bg="#f3f3f3" borderRadius="30px" p="20px" mt="2rem">
            <Flex justify="start" align="center">
                <Flex mr="1.5rem" maxWidth="37px" w="100%" h="37px" p="8px" bg="#C80F2E" borderRadius="8px" justify="center">
                    <Image src="./img/Promo__icon.svg" alt="Promo icon" />
                </Flex>
                <Text>Запросы на регистрацию</Text>
            </Flex>

            <Flex direction="column">
                
                {
                admin.registrationRequests.length > 0 ?
                admin.registrationRequests.map((user) => {
                    return(
                        <Flex key={user} p="15px 20px" justify="space-between" align="center" bg="#fff" mt="20px" borderRadius="15px">
                            <Flex direction="column">
                                <Text fontSize="14px" color="rgb(120,120,120)">Логин</Text>
                                <Text>{user}</Text>
                            </Flex>
                            <Flex>
                                <Button variant="secondary" onClick={() => {triggerDeclineRegisterRequest(user)}} size="sm" mr="1rem">Отклонить</Button>
                                <Button variant="secondary" onClick={() => {triggerAcceptRegisterRequest(user)}}size="sm">Принять</Button>
                            </Flex>
                        </Flex>
                    )
                })
                : null
            }

                
            </Flex>
        </Box>
    )
}

export default RegisterRequests