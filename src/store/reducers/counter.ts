import produce from 'immer';

import { CounterActionTypes, CounterActions } from '../actions/counter';

export type CounterState = {
    value?: number;
};

export type CounterReducer = (state?: Readonly<CounterState>, action?: CounterActions) => Readonly<CounterState>;

const initialState: CounterState = {
    value: 0,
};

export const counterReducer: CounterReducer = produce((draft, action) => {
    if (!action) {
        return;
    }

    const { payload } = action;

    switch (action.type) {
        case CounterActionTypes.RESET:
            draft.value = 0;
            break;

        case CounterActionTypes.INCREMENT:
            draft.value = Number(draft.value) + 1;
            break;

        case CounterActionTypes.DECREMENT:
            draft.value = Number(draft.value) - 1;
            break;

        case CounterActionTypes.SET:
            draft.value = payload;
            break;

        default:
            break;
    }
}, initialState);