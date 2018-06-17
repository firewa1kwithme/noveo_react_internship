import {connect} from 'react-redux';
import {appActions} from 'ducks/app';
import {authSelectors} from 'ducks/auth';
import LoginComponent from 'components/auth/LoginComponent';

export default connect((state) => {
    return {
        errorCode: authSelectors.selectError(state)
    };
}, {
    login: appActions.loginUser
})(LoginComponent);
