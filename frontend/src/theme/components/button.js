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
        "secondary": {
            bg: "#f3f3f3",
            fontSize: "12px",
            color: "rgb(120,120,120)"
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