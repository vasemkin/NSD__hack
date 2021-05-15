export const Button = {
    baseStyle: {
        fontWeight: "normal", // Normally, it is "semibold"
    },
    sizes: {
        xl : {
            p: "1rem",
            fontSize: "1rem",
            borderRadius : "15px 0px 15px 15px"
        },
    },
    variants: {
        "with-shadow": {
            bg: "red.400",
            boxShadow: "0 0 2px 2px #efdfde",
        },
        solid: (props) => ({
            bg: props.colorMode === "dark" ? "red.300" : "#C80F2E",
            color: '#FFFFFF',
            _hover : {
                bg: props.colorMode === "dark" ? "red.300" : "rgba(190, 5, 36, 1)",
            }
        }),
    }
}