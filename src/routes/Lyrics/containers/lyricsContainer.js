import {connect} from 'react-redux'
import {selection} from '../modules/lyrics'
import lyricsComponent from '../components/lyricsComponent'


const mapDispatchToProps = {
    selection
    // selection : id => selection(id)
}

const mapStateToProps = (state) => ({
    items: state.lyrics
})

// const mapStateToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(lyricsComponent)
