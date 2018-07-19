import React, {Component} from 'react';
import NewArticleComponent from '../components/newarticle/NewArticleComponent';

export default class NewArticleContainer extends Component {
    newArticleFunction = ({title, content, imageURL, createdAt}) => {
        // console.log('Form parameters: ', title, content, imageURL, createdAt);
    };
    render() {
        // console.log('Container ');
        // console.log(this.props);
        return (
            <NewArticleComponent newArticleFunction={this.login}/>
        );
    }
}
