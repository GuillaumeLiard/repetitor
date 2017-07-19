export const SELECTION_SET = 'SELECTION_SET'
export const SELECTION_ADD = 'SELECTION_ADD'
export const SELECTION_ADD_BETWEEN = 'SELECTION_ADD_BETWEEN'
export const SPEED_UPDATE = 'SPEED_UPDATE'

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

//speed
export function onPlusClicked () {
    return {
        type: SPEED_UPDATE,
        payload: 0.25
    }

}
export function onMinusClicked () {
    return {
        type: SPEED_UPDATE,
        payload: -0.25
    }

}



const ACTION_HANDLERS = {
    [SELECTION_SET]: (state, action) => {
        return {...state, phrases:[action.payload]}
    },
    [SELECTION_ADD]: (state, action) => {
        return {...state, phrases:state.phrases.includes(action.payload) ? [...state.phrases] : [...state.phrases, action.payload]}
    },
    [SPEED_UPDATE]: (state, action) => {
        return {...state, speed:state.speed + action.payload}
    }
}

const initialState = {
    phrases:[],
    speed:1
}

export default function lyricsReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
