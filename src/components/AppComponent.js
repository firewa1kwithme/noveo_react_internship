import React, {Component, Fragment} from 'react';
import NavBarContainer from '../containers/NavBarContainer';
import ArticleOverviewContainer from '../containers/ArticleOverviewContainer';
import LoginContainer from '../containers/LoginContainer';
import FeedContainer from '../containers/FeedContainer';
import RegisterContainer from '../containers/RegisterContainer';

export default class AppComponent extends Component {

    render() {
        return (
            <Fragment>
                <NavBarContainer/>
                <ArticleOverviewContainer/>
                <LoginContainer/>
                <RegisterContainer/>
                <FeedContainer/>
            </Fragment>
        );
    }
}
