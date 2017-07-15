import React from 'react'
import PropTypes from 'prop-types'
import videojs from 'video.js'
require('!style-loader!css-loader!video.js/dist/video-js.min.css')

class VideoPlayer extends React.Component {
    componentDidMount() {
        // instantiate video.js
        this.player = videojs(this.videoNode, this.props.videoConfig, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

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
                <div data-vjs-player>
                    <video ref={ node => this.videoNode = node } className="video-js vjs-default-skin"></video>
            </div>
        </div>
    )
}
}

export default VideoPlayer
