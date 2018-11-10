export const getCharClass = value => ({
    type: 'CHAR_INPUT',
    value
});

export const getCharName = value => ({
    type: 'NAME_INPUT',
    value
});

export const cardClick = () => ({
    type: 'CLICKED'
});

export const cardUnClick = () => ({
    type: 'UNCLICKED'
});
