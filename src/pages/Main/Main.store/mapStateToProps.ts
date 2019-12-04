import { IAppState } from '../../../store';

export const mapStateToProps = (state: IAppState) => ({
    counterValue: state.counter.value,
});