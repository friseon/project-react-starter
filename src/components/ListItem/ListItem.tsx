import React from 'react';

import './ListItem.scss'

interface IListItemProps {
    key?: any;
    text?: any;
}

export class ListItem extends React.PureComponent<IListItemProps> {
    componentDidUpdate() {
        console.log('>>> !!! componentDidUpdate', this.props.text);
    }

    render() {
        let { text } = this.props;

        return <li className="list-item">{text}</li>
    }
}