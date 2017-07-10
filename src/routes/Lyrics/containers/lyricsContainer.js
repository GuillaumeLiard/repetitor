import {connect} from 'react-redux'
import lyricsComponent from '../components/lyricsComponent'

const mapDispatchToProps = {

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
