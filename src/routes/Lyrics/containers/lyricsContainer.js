import {connect} from 'react-redux'
import {selectionMade} from '../modules/lyrics'
import lyricsComponent from '../components/lyricsComponent'

const items = [
    {
        // "id":1,
        "text":"You can try and read my lyrics off of this paper before I lay 'em",
        "start":23,
        "end":26,
        // "active":false
    },
    {
        // "id":2,
        "text":"But you won't take the sting out these words before I say 'em",
        "start":26.5,
        "end":29,
        // "active":true
    },
    {
        // "id":3,
        "text":"Cause ain't no way I'ma let you stop me from causing mayhem",
        "start":29,
        "end":31.7,
        // "active":false
    }
]

const mapDispatchToProps = {
    selectionMade
    // selection : id => selection(id)
}

const mapStateToProps = (state) => ({
    selectedItems: state.lyrics,
    items: items
})

// const mapStateToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(lyricsComponent)
