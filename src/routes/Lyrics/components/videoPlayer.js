import React, { Component } from 'react'
import PropTypes from 'prop-types'

let inter;

import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(this.player)
        console.log(this.player)
        // this.player.props.playbackRate = 2
        let duration = this.player.getDuration();
        if (duration){
            this.player.seekTo(nextProps.loopStart / this.player.getDuration());
            let delta = 1000 * (nextProps.loopEnd - nextProps.loopStart) / nextProps.speed
            clearInterval(inter)
            inter = setInterval(()=>{
              this.player.seekTo(nextProps.loopStart / this.player.getDuration());
            },delta)
        }
    //
        }
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=j5-yKhDd64s'
        // playing
        controls
        playbackRate ={this.props.speed}
        ref={player => { this.player = player }}
         />
  }
}
//
// class VideoPlayer extends React.Component {
//     componentDidMount() {
//         console.log(videojs)
//         console.log(vjsy)
//         // instantiate video.jsid
//         this.player = videojs(this.videoNode, this.props.videoConfig, () => {
//             // this.player.currentTime(5);
//             // setInterval(()=>{
//             //     this.player.currentTime(5);
//             // },2000)
//             console.log('onPlayerReady', this)
//         });
//     }
//
//     // destroy player on unmount
//     componentWillUnmount() {
//         if (this.player) {
//             this.player.dispose()
//         }
//     }
//     componentWillReceiveProps(nextProps) {
//       this.player.currentTime(nextProps.loopStart);
//       let delta = 1000 * (nextProps.loopEnd - nextProps.loopStart)
//       clearInterval(inter)
//       inter = setInterval(()=>{
//           this.player.currentTime(nextProps.loopStart);
//       },delta)
//
//     }
//
//     render () {
//         return (
//             <div>
//                 VIDEO
//                 <h1>
//                     {this.props.title}
//                 </h1>
//                 <h2>
//                     loop : [{this.props.loopStart}, {this.props.loopEnd}]
//                 </h2>
//                 <div data-vjs-player>
//                     <video ref={ node => this.videoNode = node } className="video-js vjs-default-skin"></video>
//             </div>
//         </div>
//     )
// }
// }

export default VideoPlayer
