import React from 'react'
import PropTypes from 'prop-types'

export const LyricsComponent = ({items, selectedItems, selectionMade}) => (
    <div>
        abc
        <ul className="phrases">
            {items.map((item, index) =>
                <li className={selectedItems.includes(index) ? "phrase phrase_active" : "phrase"} key={index} onClick={() => selectionMade(index)}> {item.text} </li>
            )}
        </ul>

    </div>

)

LyricsComponent.propTypes = {
    items: PropTypes.array,
    selection: PropTypes.func,
}
export default LyricsComponent
