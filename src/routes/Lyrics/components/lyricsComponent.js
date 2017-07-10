import React from 'react'
import PropTypes from 'prop-types'

// let items = [
//     'a',
//     'd',
//     'g'
// ]

export const LyricsComponent = ({items}) => (
    <div>
        abc
        <h1>
            {items.map((item, index) =>
                <li key={index.toString()}> {item} </li>
            )}
        </h1>

    </div>

)

export default LyricsComponent
// <ul>
//     {
//         items.map(item => {
//             return <li> {item} </li>
//         })
//     }
// </ul>
