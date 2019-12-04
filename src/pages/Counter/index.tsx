import React from 'react';
import { cnCounter } from './Counter.const';
import { Button } from './../../components/Button/Button';
import { ICounterMappedDispatchProps, ICounterMappedStateProps, connectToStore } from './Counter.store';

interface ICounterProps extends ICounterMappedDispatchProps, ICounterMappedStateProps {
    value: number;
}

class CounterComponent extends React.PureComponent<ICounterProps> {
    constructor(props: ICounterProps) {
        super(props);
    }

    incrementClick = () => {
        this.props.incrementCounter();
    }

    render() {
        const { value } = this.props;

        return (
            <>
                <h1 className={cnCounter('header')}>Counter page</h1>
                <Button text="Increment" onClick={this.incrementClick}/>
                {value}
            </>
        );
    }
};

export const Counter = connectToStore(CounterComponent)
