import moment from 'moment';

export const formatDate = (date) => moment(date).format('Do MMMM, h:mm a');
