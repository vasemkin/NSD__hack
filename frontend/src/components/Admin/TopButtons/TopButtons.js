import { 
    Flex,
    Box
} from "@chakra-ui/react"

import CreateAdmin from './Buttons/CreateAdmin'
import ConfiscateFunds from './Buttons/ConfiscateFunds'
import BlockUser from './Buttons/BlockUser'

function TopButtons(props) {
    const admin = props.admin

    return(
        <Box>

            <Flex justify="space-between">

                <CreateAdmin />
                <ConfiscateFunds />
                <BlockUser />

            </Flex>
            
        </Box>
    )
}

export default TopButtons