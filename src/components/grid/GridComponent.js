import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import CardComponent from 'components/card/CardComponent';
import styles from './GridComponent.scss';
import EditArticleFormComponent from 'components/edit-article-form/EditArticleFormComponent';
import PaginationComponent from 'components/pagination/PaginationComponent';

/* eslint-disable */
const data = [{
    'id': 1,
    'title': 'Towering Inferno, The',
    'creationDate': '12/1/2017',
    'author': 'Giuseppe',
    'image': 'http://dummyimage.com/271x350.jpg/ff4444/ffffff',
    'body': 'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam'
}, {
    'id': 2,
    'title': 'Drama/Mex',
    'creationDate': '6/2/2017',
    'author': 'Cash',
    'image': 'http://dummyimage.com/290x269.png/ff4444/ffffff',
    'body': 'primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat'
}, {
    'id': 3,
    'title': 'Jumping the Broom',
    'creationDate': '1/9/2018',
    'author': 'Arnold',
    'image': 'http://dummyimage.com/283x322.png/cc0000/ffffff',
    'body': 'odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac'
}, {
    'id': 4,
    'title': 'Yes: 9012 Live',
    'creationDate': '1/21/2018',
    'author': 'Arlie',
    'image': 'http://dummyimage.com/287x452.png/ff4444/ffffff',
    'body': 'ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu'
}, {
    'id': 5,
    'title': 'Nostalghia',
    'creationDate': '11/1/2017',
    'author': 'Nickolai',
    'image': 'http://dummyimage.com/398x331.jpg/dddddd/000000',
    'body': 'maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam'
}, {
    'id': 6,
    'title': 'Morgan Stewart\'s Coming Home',
    'creationDate': '3/1/2018',
    'author': 'Ines',
    'image': 'http://dummyimage.com/292x402.jpg/ff4444/ffffff',
    'body': 'ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor'
}, {
    'id': 7,
    'title': 'Into the Forest of Fireflies\' Light',
    'creationDate': '3/30/2018',
    'author': 'Ivor',
    'image': 'http://dummyimage.com/420x255.jpg/dddddd/000000',
    'body': 'ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque'
}, {
    'id': 8,
    'title': 'Tomorrow at Dawn (Demain dès l\'aube)',
    'creationDate': '3/15/2018',
    'author': 'Thain',
    'image': 'http://dummyimage.com/281x394.jpg/ff4444/ffffff',
    'body': 'cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis'
}, {
    'id': 9,
    'title': 'Millions Game, The (Das Millionenspiel)',
    'creationDate': '5/21/2018',
    'author': 'Matias',
    'image': 'http://dummyimage.com/425x291.jpg/ff4444/ffffff',
    'body': 'turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla'
}, {
    'id': 10,
    'title': 'Claustrofobia',
    'creationDate': '3/5/2018',
    'author': 'Roxi',
    'image': 'http://dummyimage.com/483x327.bmp/5fa2dd/ffffff',
    'body': 'eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla'
}];

/* eslint-enable */

function GridComponent(props) {
    return (
        <div className={styles.grid}>
            <Masonry>
                {
                    data.map(item => {
                        return (
                            <CardComponent {...item} key={item.id}/>
                        );
                    })
                }
            </Masonry>
            <div className={styles.pagination}>
                <PaginationComponent/>
            </div>
            <Link to={`${props.match.url}/new`}>
                <div className={styles.addButton}/>
            </Link>
            <Route path={`${props.match.url}/new`} component={EditArticleFormComponent}/>
        </div>
    );
}

GridComponent.propTypes = {
    match: PropTypes.object.isRequired
};

export default GridComponent;
