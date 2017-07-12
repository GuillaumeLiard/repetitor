export const LYRIC_SELECT = 'LYRIC_SELECT'

export function selection (id) {
    return {
        type: LYRIC_SELECT,
        payload: id
    }
}
//
// export const actions = {
//     selection
// }

const ACTION_HANDLERS = {
    // [LYRIC_SELECT]: (state, action) => state + action.payload
    [LYRIC_SELECT]: (state, action) => {
        let o = state.findIndex(e => e.id === action.payload)
        let newState = [...state]
        newState[o].active = newState[o].active ? false : true;
        return newState
    }
}

const initialState = [
    {
        "id":1,
        "text":"You can try and read my lyrics off of this paper before I lay 'em",
        "start":23,
        "end":26,
        "active":false
    },
    {
        "id":2,
        "text":"But you won't take the sting out these words before I say 'em",
        "start":26.5,
        "end":29,
        "active":false
    },
    {
        "id":3,
        "text":"Cause ain't no way I'ma let you stop me from causing mayhem",
        "start":29,
        "end":31.7,
        "active":false
    }
]


export default function lyricsReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
