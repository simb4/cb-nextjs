import moment  from '../utils/moment';

export const User = (u = {}) => ({
  id: u.id,
  email: u.email,
  phone: u.phone,
  avatar: (u.avatar || {}).url || '',
})

const momentOrNull = (d) => !d ? null : moment(d);
