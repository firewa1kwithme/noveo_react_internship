import actionTypes from './action-types';

// const initialState = {
// TODO: тут написать из чего состоит изаутентификэйтед, эррор, объект ЮЗЕРА
// };
//это же феч артиклз???
function articleFunction(state = '', action) {
    switch (action.type) {
        case actionTypes.newArticleSuccess:
        case actionTypes.singleArticleSuccess:
        case actionTypes.allArticlesSuccess:
            return action.article;
        case actionTypes.newArticleError:
        case actionTypes.singleArticleError:
        case actionTypes.allArticlesError:
            return action.error;
        default:
            return state;
    }

}

export default articleFunction;
