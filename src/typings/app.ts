import { StoreEnhancer } from 'redux';

export interface WindowExtended extends Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => StoreEnhancer;
}