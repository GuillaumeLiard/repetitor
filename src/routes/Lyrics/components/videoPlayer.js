import React from 'react'
import PropTypes from 'prop-types'

class VideoPlayer extends React.Component {
  render () {
    return (
        <div>
            VIDEO
            <h1>
                {this.props.title}
            </h1>
            <h2>
                loop : [{this.props.loopStart}, {this.props.loopEnd}]
            </h2>
        </div>
    )
  }
}

export default VideoPlayer
