// theme.js
import { extendTheme } from "@chakra-ui/react"
import { Button } from "./components/button"
import { Input } from "./components/input"
import { Heading } from "./components/heading"
import { FormLabel } from "./components/formLabel"

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: "rgba(243, 243, 243, 1)"
            },
        }),
    },
    components: {
        Button, 
        Input,
        Heading,
        FormLabel
    }
})

export default theme