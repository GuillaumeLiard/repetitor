import {connect} from 'react-redux'
import {selection} from '../modules/lyrics'
import lyricsComponent from '../components/lyricsComponent'


const mapDispatchToProps = {
    selection
}

const mapStateToProps = (state) => ({
    count: 5,
    items: [
        'a',
        'd',
        'g'
    ]
})

// const mapStateToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(lyricsComponent)
