import moment from 'moment';

export const formatDate = (date) => moment(date).subtract(6, 'days').calendar();
