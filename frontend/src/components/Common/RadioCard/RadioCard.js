import { 
    useRadio,
    Box
} from "@chakra-ui/react"

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as="label" w={props.customWidth} textAlign="center">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="15px"
          bg="#F3F3F3"
          fontSize="14px"
          borderColor="#F3F3F3"
          _checked={{
            bg: "#fff",
            color: "rgba(200, 15, 46, 1)",
            borderColor: "rgba(200, 15, 46, 1)",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          p="10px"
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
export default RadioCard