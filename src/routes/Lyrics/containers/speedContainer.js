import {connect} from 'react-redux'
import speed from '../components/speed'


const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    speed: 3.1415
})

export default connect(mapStateToProps, mapDispatchToProps)(speed)
