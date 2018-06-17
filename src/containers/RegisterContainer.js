import {connect} from 'react-redux';
import {appActions} from 'ducks/app';
import {authSelectors} from 'ducks/auth';
import RegisterComponent from 'components/auth/RegisterComponent';

export default connect((state) => {
    return {
        errorCode: authSelectors.selectError(state)
    };
}, {
    register: appActions.registerUser
})(RegisterComponent);
