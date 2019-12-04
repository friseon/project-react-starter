import { IAppState } from '../../../store';

export const mapStateToProps = (state: IAppState) => ({
    value: state.counter.value,
});