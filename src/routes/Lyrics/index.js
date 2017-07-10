import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'lyrics',
    getComponent( nextState, cb) {
        require.ensure([], (require) => {
            const container = require('./containers/lyricsContainer').default
            const reducer = require('./reducers/lyricsReducer').default
            injectReducer(store, {
                key: 'lyrics',
                reducer
            })
            cb(null, container)
        }, 'lyrics')
    }
})
