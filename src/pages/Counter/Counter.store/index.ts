import { connect } from 'react-redux';

import { mapStateToProps } from './mapStateToProps';
import { mapDispatchToProps } from './mapDispatchToProps';

export const connectToStore = (Component: any) => {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Component);
};

export type ICounterMappedStateProps = ReturnType<typeof mapStateToProps>;
export type ICounterMappedDispatchProps = ReturnType<typeof mapDispatchToProps>;