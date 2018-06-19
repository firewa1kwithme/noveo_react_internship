import {connect} from 'react-redux';
import {appActions} from 'ducks/app';
import EditArticleFormComponent from 'components/article/EditArticleFormComponent';

export default connect(null, {
    createNewArticle: appActions.createNewArticle
})(EditArticleFormComponent);
