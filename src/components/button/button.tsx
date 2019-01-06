import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { click, IButtonState as F } from '../../reducers/button';
import { IStore } from '../../store';

import styles from './button.scss';

interface IButtonProps {
    text?: string;
    buttonText?: string;
    fieldValue?: string;
}

interface IButtonState {
    text: string;
}

export class Button extends React.Component<DispatchProp & IButtonProps, IButtonState> {
    handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const { dispatch } = this.props;
        const value = this.props.fieldValue;

        if (!value) {
            return;
        }

        dispatch(click(value));
    }

    render() {
        return (
            <button className={styles.header} onClick={this.handleClick}>
            { this.props.buttonText }
            </button>
        );
    }
}

const mapStateToProps = (state: IStore, ownProps: IButtonProps) => ({
    fieldValue: state.field.value,
    buttonText: state.button.text,
});

export default connect<{}, {}, IButtonProps>(mapStateToProps)(Button);
