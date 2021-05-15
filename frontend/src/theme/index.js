// theme.js
import { extendTheme } from "@chakra-ui/react"
import { Button } from "./components/button"
import { Input } from "./components/input"
import { Heading } from "./components/heading"
import { Table } from "./components/table"
import { FormLabel } from "./components/formLabel"
import { Text } from "./components/text"

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
        FormLabel,
        Table,
        Text
    }
})

export default theme