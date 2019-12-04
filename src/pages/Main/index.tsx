import React from 'react';
import { cnMain } from './Main.const';
import { Input } from '../../components/Input/Input';
import { Button } from './../../components/button/button';
import { IMainMappedDispatchProps, IMainMappedStateProps, connectToStore } from './Main.store';

import './Main.scss';

interface IMainProps extends IMainMappedDispatchProps, IMainMappedStateProps {
    counterValue: number;
}

class MainPage extends React.PureComponent<IMainProps> {
    constructor(props: IMainProps) {
        super(props);
    }

    change = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        this.props.changeCounter(value);
    }

    reset = () => {
        this.props.resetCounter();
    }

    render() {
        const { counterValue } = this.props;

        return (
            <>
                <h1 className={cnMain('header')}>Main page</h1>
                <Input className={cnMain('input')} text={counterValue} onChange={this.change}/>
                <Button className={cnMain('button')} text="Reset" onClick={this.reset}/>
            </>
        );
    };
}

export const Main = connectToStore(MainPage);
