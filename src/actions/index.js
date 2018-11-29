export const getCharName = e => ({
    type: 'NAME_INPUT',
    value: e.target.value
});

export const cardClick1 = () => ({
    type: 'CLICKED_KNIGHT'
});
export const cardClick2 = () => ({
    type: 'CLICKED_ARCHER'
});
export const cardClick3 = () => ({
    type: 'CLICKED_WIZARD'
});

export const validInput = () => ({
    type: 'VALID_INPUT'
})

export const invalidInput = () => ({
    type: 'INVALID_INPUT'
})

export const attack = (str) => ({
    type: 'ATTACK',
    str
})

