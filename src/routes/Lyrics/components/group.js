import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from './videoPlayer'
import Lyrics from './lyricsComponent'
import Speed from './speed'

class Group extends React.Component {
  render () {
    return (
        <div>
            <div>
                <VideoPlayer title="Not afraid - Eminem" speed={this.props.speed} videoConfig={this.props.videoConfig} loopStart={this.props.loopStart} loopEnd={this.props.loopEnd}/>
            </div>
            <div>
                <Speed speed={this.props.speed} onPlusClicked={this.props.onPlusClicked} onMinusClicked={this.props.onMinusClicked}/>
            </div>
            <div>
                <Lyrics items={this.props.items} selectedItems={this.props.selectedItems} selectionMade={this.props.selectionMade}/>
            </div>
        </div>
    )
  }
}

export default Group
