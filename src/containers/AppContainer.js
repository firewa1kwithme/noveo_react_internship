import {connect} from 'react-redux';
import {authSelectors} from 'ducks/auth';
import {appSelectors} from 'ducks/app';
import AppComponent from 'components/app/AppComponent';

export default connect((state) => {
    return {
        isAuthenticated: authSelectors.selectAuthState(state),
        isInitialised: appSelectors.selectInitialisedState(state)
    };
})(AppComponent);
