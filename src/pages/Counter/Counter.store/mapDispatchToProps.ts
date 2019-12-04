import { compose } from 'really-typed-compose';

import { incrementCounter, decrementCounter } from '../../../store/actions/counter';

export const mapDispatchToProps = (dispatch: any) => ({
    incrementCounter: compose(
        dispatch,
        incrementCounter,
    ),
    decrementCounter: compose(
        dispatch,
        decrementCounter,
    ),
});