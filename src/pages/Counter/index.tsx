import React from 'react';
import { cnCounter } from './Counter.const';
import { Input } from '../../components/Input/Input';
import { Button } from './../../components/button/button';
import { ICounterMappedDispatchProps, ICounterMappedStateProps, connectToStore } from './Counter.store';

interface ICounterProps extends ICounterMappedDispatchProps, ICounterMappedStateProps {
    value: number;
}

class CounterPage extends React.PureComponent<ICounterProps> {
    constructor(props: ICounterProps) {
        super(props);
    }

    increment = () => {
        this.props.incrementCounter();
    }

    decrement = () => {
        this.props.decrementCounter();
    }

    render() {
        const { value } = this.props;

        return (
            <>
                <h1 className={cnCounter('header')}>Counter page</h1>
                <Button className={cnCounter('plus')} text="+" onClick={this.increment}/>
                <Input className={cnCounter('input')} text={value} readonly={true}/>
                <Button className={cnCounter('minus')} text="-" onClick={this.decrement}/>
            </>
        );
    }
};

export const Counter = connectToStore(CounterPage);
