import { 
    Box,
    Image,
    Center,
    Text 
} from "@chakra-ui/react"

import PromoCard from "./PromoCard/PromoCard"

function Promo() {
    return (
        <Box>

            <Box p="80px 100px 0 100px" bg="#eee" h="90%">

                <Center>
                    <Box w="249px" h="60px">
                        <Image src="./img/Promo__logo.png" alt="NSD" />
                    </Box>
                </Center>

                <Center h="100%">
                    <Box>
                        <PromoCard heading="Юридические лица"/>
                        <PromoCard heading="Физические лица"/>
                    </Box>
                </Center>
                
            </Box>

            <Center h="69px" bg="#fff" w="100%">
                <Text>Помощь</Text>
            </Center>
        </Box>
    )
}

export default Promo