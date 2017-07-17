import React from 'react'
import PropTypes from 'prop-types'
// require('expose?videojs!./video.js')
// require("expose?XModule!./file.js")
// require('videojs-youtube')
// require('imports-loader?define=>false!videojs-youtube')
// require('videojs-abloop')
// import abLoopPlugin from 'videojs-abloop'
require('!style-loader!css-loader!video.js/dist/video-js.min.css')

import videojs from 'video.js'
import vjsy from 'videojs-youtube'

let inter;

class VideoPlayer extends React.Component {
    componentDidMount() {
        console.log(videojs)
        console.log(vjsy)
        // instantiate video.jsid
        this.player = videojs(this.videoNode, this.props.videoConfig, () => {
            // this.player.currentTime(5);
            // setInterval(()=>{
            //     this.player.currentTime(5);
            // },2000)
            console.log('onPlayerReady', this)
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }
    componentWillReceiveProps(nextProps) {
      this.player.currentTime(nextProps.loopStart);
      let delta = 1000 * (nextProps.loopEnd - nextProps.loopStart)
      clearInterval(inter)
      inter = setInterval(()=>{
          this.player.currentTime(nextProps.loopStart);
      },delta)

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
