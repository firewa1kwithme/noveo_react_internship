import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import styles from './NewArticleComponent.scss';

class NewArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', content: '', imageUrl: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        newArticleFunction: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };


    handleSubmit(event) {
        event.preventDefault();
        this.props.newArticleFunction(this.state.title, this.state.content, this.state.imageUrl);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} className={styles.newArticleForm}>
                    <label>
                        Title:
                        <p><input type='text' value={this.state.title} onChange={this.handleChange} name='title'/></p>
                    </label>
                    <label>
                        Content:
                        <p><textarea value={this.state.content} onChange={this.handleChange} name='content'/></p>
                    </label>
                    <label>
                        pic:
                        <p><input type='text' value={this.state.imageUrl} onChange={this.handleChange}
                            name='imageUrl'/></p>
                    </label>
                    <input type='submit' value='Post'/>
                </form>
            </Fragment>
        );
    }
}

export default withRouter(NewArticleComponent);
