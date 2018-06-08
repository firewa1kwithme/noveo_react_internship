import {connect} from 'react-redux';
import {appActions} from 'ducks/app';
import {authSelectors} from 'ducks/auth';
import NavbarComponent from 'components/navbar/NavbarComponent';

export default connect((state) => {
    return {
        user: authSelectors.selectUser(state)
    };
}, {
    logout: appActions.logoutUser
})(NavbarComponent);
