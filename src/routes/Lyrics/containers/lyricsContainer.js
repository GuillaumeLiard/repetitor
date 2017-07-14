import {connect} from 'react-redux'
import {selectionMade} from '../modules/lyrics'
import lyricsComponent from '../components/lyricsComponent'
import group from '../components/group'

import nota from '../data/notafraid.json'
const items = nota.phrases
//
// const items = [
//     {
//         "text":"You can try and read my lyrics off of this paper before I lay 'em",
//         "start":23,
//         "end":26
//     },
//     {
//         "text":"But you won't take the sting out these words before I say 'em",
//         "start":26.5,
//         "end":29
//     },
//     {
//         "text":"Cause ain't no way I'ma let you stop me from causing mayhem",
//         "start":29,
//         "end":31.7
//     }
// ]

const mapDispatchToProps = {
    selectionMade
}

const mapStateToProps = (state) => ({
    selectedItems: state.lyrics,
    items: items,
    loopStart: calculateLoopStart(state.lyrics),
    loopEnd: calculateLoopEnd(state.lyrics)
})

function calculateLoopStart(state){
    return state.length ? Math.min(...state.map(i => items[i].start)) : 0
}

function calculateLoopEnd(state){
    return state.length ? Math.max(...state.map(i => items[i].end)) : 0
}

export default connect(mapStateToProps, mapDispatchToProps)(group)
