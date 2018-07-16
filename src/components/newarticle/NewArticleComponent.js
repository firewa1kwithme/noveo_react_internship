import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import styles from './NewArticleComponent.scss';

//TODO: создает объект article или просто передает некоторые поля в контейнер?
//TODO: При нажатии на сабмит добавляется юзер автоматически
//TODO: названия полей как подсказки
//TODO: как добавить в фетч артиклз
class NewArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', content: '', imageURL: '', createdAt: ''};
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
        let now = new Date();
        this.props.createdAt = now.toLocaleDateString();
        this.props.newArticleFunction(this.state);
    }

    render() {
        console.log('Component ');
        console.log(this.props);
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} className={styles.newArticleForm}>
                    <label>
                        Title:
                        <p><input type='text' value={this.state.title} onChange={this.handleChange} name='title'/></p>
                    </label>
                    <label>
                        Content:
                        <p><textarea value={this.state.content} onChange={this.handleChange}
                                     name='content'/></p>
                    </label>
                    <label>
                        pic:
                        <p><input type='text' value={this.state.imageURL} onChange={this.handleChange}
                                  name='imageURL'/></p>
                    </label>
                    <input type='submit' value='Post'/>
                </form>
            </Fragment>
        );
    }
}

export default withRouter(NewArticleComponent);
