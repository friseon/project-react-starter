import { FSAAction } from './index';

export enum CounterActionTypes {
    RESET = 'COUNTER:RESET',
    INCREMENT = 'COUNTER:INCREMENT',
    DECREMENT = 'COUNTER:DECREMENT',
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
 * Добавляет к счетчику +1
 */
export type IncrementCounter = FSAAction<CounterActionTypes.INCREMENT>;

export const incrementCounter = (_?: void): IncrementCounter => ({
    type: CounterActionTypes.INCREMENT,
});

export type CounterActions = ResetCounter | IncrementCounter;
