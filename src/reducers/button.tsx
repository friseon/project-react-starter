/**
 * State
 * 
 * Для начала определим интерфейс этого кусочка хранилища, 
 * и создадим объект с начальным состоянием.
 */
export interface ButtonState {
    value: number;
    text: string;
}

const initialState: ButtonState = {
    value: 0,
    text: 'default'
}

/**
 * Constants
 * 
 * Каждой константе помимо переменной, необходимо задать тип. 
 * Это тянет дополнительную строку кода под константу, но благодаря этому 
 * мы можем создавать интерфейсы действий с уникальными типами.
 */
const CLICK = 'button/CLICK';
type CLICK = typeof CLICK;

/** 
 * Actions
 * 
 * Используя Redux с TypeScript, достаточно определить интерфейс возможных 
 * действий, и определить общий тип (ButtonAction) для редьюсера
 */
export interface SetAction {
    type: CLICK;
    text: string;
}

type ButtonAction = SetAction;

/** 
 * Reducer
 * 
 * В редьюсере мы указываем, что получим в качестве аргумента, и 
 * вернем один и тот же объект. 
 * Аргумент action позволяет проверить только те действия, которые 
 * мы добавили в общий тип действий (ButtonAction), и благодаря 
 * интерфейсам в каждом условном блоке (например case SET) мы знаем 
 * точное содержимое аргумента action.
 */
export default function reducer(state: ButtonState = initialState, action: ButtonAction): ButtonState {
    switch (action.type) {
        case CLICK:
            return {
                ...state,
                text: action.text
            }
        default:
            return state;
    }
}

/** 
 * Action Creators
 * 
 * Для отправки действий используются создатели действий, 
 * благодаря указанию результата вызова функции как интерфейс 
 * конкретного действия, мы не отправим неправильные данные в 
 * хранилище.
 */
export const click = (text: string): SetAction => ({
    type: CLICK,
    text
});
