import { compose } from 'really-typed-compose';

import { resetCounter, incrementCounter } from '../../../store/actions/counter';

export const mapDispatchToProps = (dispatch: any) => ({
    resetCounter: compose(
        dispatch,
        resetCounter,
    ),
    incrementCounter: compose(
        dispatch,
        incrementCounter,
    ),
});