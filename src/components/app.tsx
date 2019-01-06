import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Button from './button';
import Field from './field';

import styles from './app.scss';

interface IHelloProps { compiler: string; framework: string; }

class App extends React.Component<IHelloProps, {}> {
    render() {
        return (
            <main>
                <header>
                    <h1 className={styles.header}>
                        Hello from {this.props.compiler} and {this.props.framework}!
                        <span className={styles['sub-header']}>sub header</span>
                        <span>span</span>
                    </h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/button">button</Link></li>
                            <li><Link to="/field">field</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/" render={ () => <Field placeholder="main!" /> } />
                    <Route path="/button" component={Button}/>
                    <Route path="/field" render={ () => <Field placeholder="I like dev tools!" /> } />
                </Switch>
            </main>
        );
    }
}

export {
    App,
};
