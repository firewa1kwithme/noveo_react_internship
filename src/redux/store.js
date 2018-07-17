import Redux, {createStore} from 'redux';
import authFunction from './reducer';

// const { createStore } = Redux;
const store = createStore(authFunction);

export {store};
