import { compose } from 'really-typed-compose';

import { setCounter, resetCounter } from '../../../store/actions/counter';

export const mapDispatchToProps = (dispatch: any) => ({
    changeCounter: compose(
        dispatch,
        setCounter,
    ),
    resetCounter: compose(
        dispatch,
        resetCounter,
    ),
});