import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Route from 'react-router-dom/Route';
import withRouter from 'react-router-dom/withRouter';
import Link from 'react-router-dom/Link';
import Button from 'reactstrap/lib/Button';
import CardComponent from 'components/feed/card/CardComponent';
import styles from './GridComponent.scss';
import NewArticleContainer from 'containers/NewArticleContainer';

function GridComponent(props) {
    return (
        <div className={styles.grid}>
            <Masonry>
                {
                    props.articles.map(item => {
                        return (
                            <CardComponent {...item} key={item.id}/>
                        );
                    })
                }
            </Masonry>
            {props.showMoreButton && <Button onClick={props.fetchButtonClick} className={styles.showMoreButton}>
                Show more
            </Button>}
            <Link to={`${props.match.url}/new`}>
                <div className={styles.addButton}/>
            </Link>
            <Route path={`${props.match.url}/new`} component={NewArticleContainer}/>
        </div>
    );
}

GridComponent.propTypes = {
    match: PropTypes.object.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchButtonClick: PropTypes.func.isRequired,
    showMoreButton: PropTypes.bool.isRequired
};

export default withRouter(GridComponent);
