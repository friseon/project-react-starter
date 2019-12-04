import { connect } from 'react-redux';

import { mapStateToProps } from './mapStateToProps';
import { mapDispatchToProps } from './mapDispatchToProps';

export const connectToStore = (Component: any) => {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Component);
};

export type IMainMappedStateProps = ReturnType<typeof mapStateToProps>;
export type IMainMappedDispatchProps = ReturnType<typeof mapDispatchToProps>;