export const getCharClass = value => ({
    type: 'CHAR_INPUT',
    value
});

export const getCharName = value => ({
    type: 'NAME_INPUT',
    value
});

export const cardClick1 = () => ({
    type: 'CLICKED1'
});
export const cardClick2 = () => ({
    type: 'CLICKED2'
});
export const cardClick3 = () => ({
    type: 'CLICKED3'
});

export const cardUnClick = () => ({
    type: 'UNCLICKED'
});
