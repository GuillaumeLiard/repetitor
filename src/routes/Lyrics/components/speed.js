import React from 'react'
import PropTypes from 'prop-types'

export const Speed = ({speed, onPlusClicked, onMinusClicked}) => (
    <div id="speed">
        <h2>speed : {speed}</h2>
        <div className="buttons">
            <button onClick={onPlusClicked} className="button">+</button>
            <button onClick={onMinusClicked} className="button">-</button>
        </div>

    </div>

)

export default Speed

// export const Speed = ({speed, onPlusClicked, onMinusClicked}) => (
//     <div>
//         <h2>speed : {speed}</h2>
//         <ul className="buttons">
//             <li onClick={onPlusClicked}class="button">+</li>
//             <li onClick={onMinusClicked}class="button">-</li>
//         </ul>
//
//     </div>
//
// )
