import React from 'react'
import PropTypes from 'prop-types'

export const LyricsComponent = ({items, selection}) => (
    <div>
        abc
        <ul className="phrases">
            {items.map((item, index) =>
                <li className="phrase" key={index.toString()} onClick={selection}> {item} </li>
            )}
        </ul>

    </div>

)

LyricsComponent.propTypes = {
    items: PropTypes.array,
    selection: PropTypes.func,
}
export default LyricsComponent
