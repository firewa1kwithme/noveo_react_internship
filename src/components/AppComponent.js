// import React, {Component, Fragment} from 'react';
import NavBarContainer from '../containers/NavBarContainer';
import ArticleOverviewContainer from '../containers/ArticleOverviewContainer';
import LoginContainer from '../containers/LoginContainer';
import FeedContainer from '../containers/FeedContainer';
import RegisterContainer from '../containers/RegisterContainer';
import NewArticleContainer from '../containers/NewArticleContainer'
//
// export default class AppComponent extends Component {
//
//     render() {
//         return (
//             <Fragment>
//                 <NavBarContainer/>
//                 <ArticleOverviewContainer/>
//                 <div> If registered, please login:<LoginContainer/></div>
//                 <div><RegisterContainer/></div>
//                 <a> Already registered? </a>
//                 <FeedContainer/>
//             </Fragment>
//         );
//     }
// }

//TODO: в одну строчку
import React, {Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import AuthLayoutComponent from './layouts/auth/AuthLayoutComponent';
import CommonLayoutComponent from './layouts/common/CommonLayoutComponent';
import Routes from '../constants';

//TODO: с фида на логин
export default function AppComponent(props) {
    return (
        <Router>
            <Switch>
                {/*<Route path='/feed' component={FeedContainer}/>*/}
                <AuthLayoutComponent path={Routes.LOGIN} component={LoginContainer}
                                     isAuthenticated={props.isAuthenticated}/>
                <CommonLayoutComponent path={Routes.FEED} component={FeedContainer}
                                       isAuthenticated={props.isAuthenticated}/>
                <AuthLayoutComponent path={Routes.REGISTER} component={RegisterContainer}
                                     isAuthenticated={props.isAuthenticated}/>
                {/*<Route path='/register' component={RegisterContainer}/>*/}
                <CommonLayoutComponent path='/article/:id' component={ArticleOverviewContainer}
                                       isAuthenticated={props.isAuthenticated}/>
                <CommonLayoutComponent path={Routes.NEW} component={NewArticleContainer}
                                       isAuthenticated={props.isAuthenticated}/>
                {/*<Route path='/article/:number' component={ArticleOverviewContainer}/>*/}
                <Redirect from='/' to='/feed'/>
            </Switch>
        </Router>
    );
}
