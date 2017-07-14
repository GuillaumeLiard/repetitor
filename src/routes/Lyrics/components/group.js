import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from './videoPlayer'
import Lyrics from './lyricsComponent'

class Group extends React.Component {
  render () {
    return (
        <div>
            <div>
                <VideoPlayer title="Not afraid - Eminem" loopStart={this.props.loopStart} loopEnd={this.props.loopEnd}/>
            </div>
            <div>
                <Lyrics items={this.props.items} selectedItems={this.props.selectedItems} selectionMade={this.props.selectionMade}/>
            </div>
        </div>
    )
  }
}

export default Group
