import { 
    Flex,
    Box,
    Image,
    Text,
    Menu,
    MenuButton,
    Link,
    MenuList,
    MenuItem
 } from "@chakra-ui/react"

function Header(props) {
    const user = props.user

    return(
        <Flex bg="#fff" borderBottom="1px solid #ccc" align="center" justify="space-between" p="20px 80px">

            <Box w="130px" h="30px">
                <Image src="./img/Promo__logo.png" alt="NSD" />
            </Box>

            <Box 
            as="button">
                <Flex justify="start" align="center">
                    <Box w="20px" h="20px" mr="1rem" mt="2px">
                        <Image src="./img/Header__cart.svg" alt="NSD"/>
                    </Box>
                    <Text>ЦФА</Text>
                </Flex>
            </Box>

            <Flex align="center">
                <Flex 
                borderRadius="50%" 
                bg="#C80F2E" 
                color="#FFF"
                w="30px" h="30px" 
                mr="1rem"
                fontSize="12px"
                justify="center" 
                align="center" 
                >{user.uuid.charAt(0).toUpperCase()}</Flex>

                <Menu>
                    <MenuButton as={Link}>
                        {user.uuid}
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Дашборд</MenuItem>
                        <MenuItem>Выйти</MenuItem>
                    </MenuList>
                </Menu>

            </Flex>
        </Flex>
    )
}

export default Header