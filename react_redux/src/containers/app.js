import {connect} from 'react-redux'

import {increment, decrement, inAsync} from '../redux/actions'
import Counter from '../components/counter'

export default connect(
    state => ({count: state}),
    {increment, decrement, inAsync}
)(Counter)