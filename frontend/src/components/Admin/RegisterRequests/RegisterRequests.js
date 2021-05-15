import { 
    Flex,
    Box,
    Text,
    Image,
    Skeleton
 } from "@chakra-ui/react"

function RegisterRequests () {
    return(
        <Box bg="#f3f3f3" borderRadius="30px" p="20px" mt="2rem">
            <Flex justify="start" align="center">
                <Flex mr="1.5rem" maxWidth="37px" w="100%" h="37px" p="8px" bg="#C80F2E" borderRadius="8px" justify="center">
                    <Image src="./img/Promo__icon.svg" alt="Promo icon" />
                </Flex>
                <Text>Запросы на регистрацию</Text>
            </Flex>

            <Flex direction="column" mt="2rem">
                <Skeleton height="20px" mb="0.5rem" w="100%" />
                <Skeleton height="20px" mb="0.5rem" w="100%" />
                <Skeleton height="20px" mb="0.5rem" w="100%" />
                <Skeleton height="20px" mb="0.5rem" w="100%" />
                <Skeleton height="20px" mb="0.5rem" w="100%" />
            </Flex>
        </Box>
    )
}

export default RegisterRequests