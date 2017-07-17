import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'lyrics',
    getComponent( nextState, cb) {
        require.ensure([], (require) => {
            const container = require('./containers/lyricsContainer').default
            const reducer = require('./modules/lyrics').default
            injectReducer(store, {
                key: 'lyrics',
                reducer
            })
            // const speedContainer = require('./containers/speedContainer').default
            // const reducer = require('./modules/lyrics').default
            // injectReducer(store, {
            //     key: 'lyrics',
            //     reducer
            // })
            cb(null, container)
        }, 'lyrics')
    }
})
