export const SELECTION_SET = 'SELECTION_SET'
export const SELECTION_ADD = 'SELECTION_ADD'
export const SELECTION_ADD_BETWEEN = 'SELECTION_ADD_BETWEEN'

export function selectionMade (index, e) {
    let out;
    if(e.ctrlKey){
        out = {
            type: SELECTION_ADD,
            payload: index
        }
    }else {
        out = {
            type: SELECTION_SET,
            payload: index
        }
    }
    return out;

}

const ACTION_HANDLERS = {
    [SELECTION_SET]: (state, action) => {
        return [action.payload]
    },
    [SELECTION_ADD]: (state, action) => {
        return state.includes(action.payload) ? [...state] : [...state, action.payload]
    }
}

const initialState = []

export default function lyricsReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
