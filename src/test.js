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
/*
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
*/
/*
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
*/
/*
.firstDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    background-color: #545454;
    color: whitesmoke;
}
.btnDiv {
  display: flex;
  flex-direction: raw;
  justify-content: space-between;
  border-bottom: thin solid whitesmoke;
}
 button {
    background-color: #545454;
    color: whitesmoke;
    padding: 10px 10px 10px 10px;
    outline: none;
  }
  class CounterButton extends React.Component {
  render() {
    const {onPress, children} = this.props

    return (
      <button type='button' onClick={onPress}>
        {children}
      </button>
    )
  }
}

class App extends React.Component {

  state = {count: 0}

  handlePress = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  handlePressTwo = () => {
    const {count} = this.state

    this.setState({count: count - 1})
  }

  render() {
    const {count} = this.state

    return (
      <div class="firstDiv">
        <div class="btnDiv">
          <CounterButton
            count={count}
            onPress={this.handlePress}
          >
            Click HERE to increment
          </CounterButton>
          <CounterButton
            count={count}
            onPress={this.handlePressTwo}
          >
            Click HERE to decrement
          </CounterButton>
        </div>
        <div class="counterDiv">
          <h1>{count}</h1>
        </div>
     </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
 */
/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', lastName: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeLastName(event) {
    this.setState({lastName: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.name + " " + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} name="name"/>
        </label>
        <br></br>
        <label>
        Last name:
        <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} name="lastName"/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
 */

/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', lastName: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  }
  handleChangeLastName = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.name + " " + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} name="name" autocomplete="off"/>
        </label>
        <br></br>
        <label>
        Last name:
        <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} name="lastName" autocomplete="off"/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
 */
/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', lastName: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.name + " " + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
        </label>
        <br></br>
        <label>
        Last name:
        <input type="text" value={this.state.lastName} onChange={this.handleChange} name="lastName"/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
 */
/*
function Header(props) {
  return (
    <h1>{props.title}</h1>
  );
}

class HeaderContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header title='New User'/>
        <Header title='New Profile'/>
        <Header title='New Article'/>
        <Header title='New Blog'/>
      </React.Fragment>
    );
  };
}

ReactDOM.render(
  <HeaderContainer/>,
  document.getElementById('root')
);

 */

// Создадим функцию редюсер
// Заметьте, иногда мы можем ошибиться и отправить несуществующий экшен
// Поэтму необходимо иметь блок default на этот случай
// Это необходимо, чтобы вернуть предыдущий state и не сломать приложение.
// Также это необходимо для инициализации store,
// потому что для этого также вызывается reducer
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Импортируем createStore фнукцию и создаем store, передав внутрь reducer
const { createStore } = Redux;
const store = createStore(counter);

// Создадим компонент для отображения счетчика
// Этот компонент получает текущее значение счетчика, и две функции, для его изменения
let Counter = ({value, onIncrement, onDecrement}) => (
    <div className='redux'>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

// Рендерим наш компонент, передав ему необходимые свойства
// Функции увелечение и уменьшения счетчика - это метод store.dispatch,
// вызванный с определенным экшеном
const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={()=> store.dispatch({type: 'INCREMENT'})}
            onDecrement={()=> store.dispatch({type: 'DECREMENT'})}
        />,
        document.querySelector('body')
    );
};

// Подписываемся на изменения стора
// Теперь всегда при изменении состояния приложения мы будем запускать render()
store.subscribe(render);

// Вызовем рендер для инициализации счетчика
render();
