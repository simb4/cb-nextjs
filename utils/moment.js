import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/ru';
moment.updateLocale('ru');
moment.tz.setDefault('Etc/GMT-6');

export default moment;