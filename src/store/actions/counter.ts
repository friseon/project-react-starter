import { FSAAction } from './index';

export enum CounterActionTypes {
    RESET = 'COUNTER:RESET',
    INCREMENT = 'COUNTER:INCREMENT',
    DECREMENT = 'COUNTER:DECREMENT',
    SET = 'COUNTER:SET',
}

/**
 * RESET
 *
 * Сбрасывает счетчик к 0
 */
export type ResetCounter = FSAAction<CounterActionTypes.RESET>;

export const resetCounter = (_?: void): ResetCounter => ({
    type: CounterActionTypes.RESET,
});

/**
 * INCREMENT
 *
 * Увеличивает счетчик на 1
 */
export type IncrementCounter = FSAAction<CounterActionTypes.INCREMENT>;

export const incrementCounter = (_?: void): IncrementCounter => ({
    type: CounterActionTypes.INCREMENT,
});

/**
 * DECREMENT
 *
 * Уменьшает счетчик на 1
 */
export type DecrementCounter = FSAAction<CounterActionTypes.DECREMENT>;

export const decrementCounter = (_?: void): DecrementCounter => ({
    type: CounterActionTypes.DECREMENT,
});


/**
 * SET
 *
 * Устанавливает счетчик на определенное значение
 */
export type SetCounter = FSAAction<CounterActionTypes.SET>;

export const setCounter = (payload: any): SetCounter => ({
    type: CounterActionTypes.SET,
    payload: payload
});

export type CounterActions = ResetCounter | IncrementCounter | DecrementCounter | SetCounter;
