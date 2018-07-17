import actionTypes from './action-types';

//возвращает объект action
//навешиваем на кнопки
//TODO: добавить из аутентификатед
//TODO: поменять на юзер
const loginAction = (username) => {
    return {
        type: actionTypes.login,
        username
    };
};

const logoutAction = () => {
    return {
        type: actionTypes.logout
    };
};

export {loginAction, logoutAction};
