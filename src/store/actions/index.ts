/**
 * Структура объекта экшна, соответствующая человеко-понятному стандарту Flux Standard Action
 * Все экшны следует создавать в соответствии с этим стандартом
 *
 * https://github.com/redux-utilities/flux-standard-action#actions
 */
export type FSAAction<T, P = undefined> = {
    type: T;
    payload?: P;
    error?: boolean;
    meta?: Object;
};