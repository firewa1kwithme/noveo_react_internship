import {connect} from 'react-redux';
import {authSelectors} from 'ducks/auth';
import AppComponent from 'components/app/AppComponent';

export default connect((state) => {
    return {
        isAuthenticated: authSelectors.selectAuthState(state),
        isInitialised: authSelectors.selectInitialisedState(state)
    };
})(AppComponent);
