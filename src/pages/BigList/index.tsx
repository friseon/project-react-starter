import React, { Component } from 'react';
import { Button } from './../../components/button/button';
import { ListItem } from './../../components/ListItem/ListItem';

import './BigList.scss';

const arrayGenerator = (length: number) => {
    return Array.from({ length: length }).map(Number.call, Number)
}

interface BigListPageState {
    multiplier: number;
}

export class BigList extends Component<{}, BigListPageState> {
    constructor(props: any) {
        super(props);

        this.state = {
            multiplier: 1
        }
    }

    componentWillMount() {
        console.log('>>> componentWillMount')
    }

    componentDidMount() {
        console.log('>>> componentDidMount')
    }

    componentDidUpdate() {
        console.log('>>> componentDidUpdate')
    }

    resetMultiplier() {
        const next = this.state.multiplier + 1;
        this.setState({ multiplier: next });
    }

    render() {
        return (
            <>
                <Button text="Update List" onClick={this.resetMultiplier.bind(this)} />
                <ul className="big-list">
                    <ListItem text="text2" />
                    {
                        arrayGenerator(10).map(i => {
                            return <ListItem key={i + ''} text={i} />
                        })
                    }
                    {
                        arrayGenerator(10).map(i => {
                            return <ListItem key={i + ''} text={i + '' + this.state.multiplier} />
                        })
                    }
                </ul>
            </>
        );
    };
}
