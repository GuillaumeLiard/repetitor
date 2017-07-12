import React from 'react'
import PropTypes from 'prop-types'

export const LyricsComponent = ({items, selection}) => (
    <div>
        abc
        <ul className="phrases">
            {items.map((item, index) =>
                <li className={item.active ? "phrase phrase_active" : "phrase"} key={item.id} onClick={() => selection(item.id)}> {item.text} </li>
            )}
        </ul>

    </div>

)

LyricsComponent.propTypes = {
    items: PropTypes.array,
    selection: PropTypes.func,
}
export default LyricsComponent
