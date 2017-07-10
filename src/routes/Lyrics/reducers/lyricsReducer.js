export const LYRIC_SELECT = 'LYRIC_SELECT'

export function selection (value = 1) {
    return {
        type: LYRIC_SELECT,
        payload: value
    }
}

export const actions = {
    selection
}

const ACTION_HANDLERS = {
    [LYRIC_SELECT]: (state, action) => state + action.payload
}

const initialState = 0
export default function lyricsReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
