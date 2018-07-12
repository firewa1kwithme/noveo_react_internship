import React from 'react';
import {render} from 'react-dom';

function AppComponent(props) {
    return (
        <div>First React app</div>
    );
}
// render(<AppComponent/>, rootElement);

function AppElement(props) {
    return (
        <div>First React app</div>
    );
}
// render(<AppComponent/>, rootElement);

function ListComponent(props) {
    return [
        <div>First div</div>,
        <div>Second div</div>,
        <div>Third div</div>
    ];
}
// render(<ListComponent/>, rootElement);

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello</h1>
//             <h2>Now {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     render(
//         element,
//         rootElement
//     );
// }
/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

render(
    <Clock />,
    document.getElementById('root')
);
setInterval(tick, 1000);
*/
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    componentDidMount() {
        const timer = setInterval(this.tick, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    };

};

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
