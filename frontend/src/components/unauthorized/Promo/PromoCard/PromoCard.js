import { 
    Text,
    Flex,
    Image,
    Heading,
    Box
} from "@chakra-ui/react"

function PromoCard (props) {
    return(
        <Flex mb="2rem" p="20px" borderRadius="20px" bg="#fff" justify="space-between">
            <Flex mr="1.5rem" maxWidth="37px" w="100%" h="37px" p="8px" bg="#C80F2E" borderRadius="8px" justify="center">
                <Image src="./img/Promo__icon.svg" alt="Promo icon" />
            </Flex>
            <Box>
                <Heading mb="0.7rem" as="h4" fontSize="16px">{props.heading}</Heading>
                <Text fontSize="14px" color="#787878">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet</Text>
            </Box>
        </Flex>
    )
}

export default PromoCard