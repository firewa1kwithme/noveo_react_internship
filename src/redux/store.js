import Redux, {createStore} from 'redux';
import authFunction from './reducer';

const store = createStore(authFunction);

export {store};
