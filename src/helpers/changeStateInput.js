export const changeStateInput = (array, input, condition) => {
    return array.map(el => {
        return {
            ...el,
            [input] : condition
        }
    })
} 