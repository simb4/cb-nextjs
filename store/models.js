import moment  from '../utils/moment';

export const Subscription = (s = {}) => ({
  id: s.id,
  action_type: s.action_type,
  date_created: momentOrNull(s.date_created),
  due_date: momentOrNull(s.due_date),
  start_date: momentOrNull(s.start_date),
  limits: s.limits,
  name: s.name,
  price: s.price,
  real_price: s.real_price,
  status: s.status,
})

export const User = (u = {}) => ({
  id: u.id,
  email: u.email,
  phone: u.phone,
  avatar_url: (u.avatar || {}).url || '',
  birth_date: momentOrNull(u.birth_date),
  first_name: u.first_name,
  last_name: u.last_name,
  full_name: u.full_name,
  gender: u.gender,
  has_bought: u.has_bought,
  promocode: u.promocode,
  promocode_description: u.promocode_description,
  subscription: Subscription(u.subscription || {}),
})

export const Sport = (s) => ({
    id: s.id,
    name: s.name,
    image: s.image,
    preview: s.preview,
    logo: s.logo,
})

export const Fitness = (f) => {
  const sports = f.sport_types.map(Sport);
  const images = (f.image_urls || []);
  const location = f.location || {};
  return {
    id: f.id,
    name: f.name,
    sports: sports,
    logo: f.logo,
    images: images,
    image: images[0],
    contacts: f.contacts,
    location: [location.latitude, location.longitude],
    address: location.address || '',
    description: f.description,
    keywords: `${f.name},${sports.map(s => s.name).join(',')},${f.location && f.location.address}`,
    promocode: f.promocode,
    qrcode: f.qrcode,
    rating: f.rating_data,
  }
}

export const Template = (t) => ({
    id: t.id,
    name: t.name,
    sport_name: t.sport_type.name,
    sport_type: t.sport_type.id,
    coach: t.coach,
    image_url: t.image_url,
    users_count: t.users_count,
    max_users: t.max_users,
    unlimited: t.unlimited,
    description: t.description,
})

export const Training = (t) => ({
    id: t.id,
    name: t.name,
    fitness: t.fitness,
    template_id: t.template_id,
    start: momentOrNull(t.timestamp_start),
    end: momentOrNull(t.timestamp_end),
    image_url: t.thumbnail_url,
    repeat_type: !t.training_repeat ? 'NO_REPEAT' : t.training_repeat.repeat_type,
    unlimited: t.unlimited,
    is_favorite: !!t.is_favorite
})

export const Visit = (visit, isNew) => ({
    id: visit.id,
    status: visit.status,
    timestamp: visit.timestamp,
    training: {
        start: visit.training.timestamp_start,
        end: visit.training.timestamp_end,
        name: visit.training.name,
        type: visit.training.sport_type.type,
        sportName: visit.training.sport_type.name,
        template_id: visit.training.template_id,
    },
    user: {
        id: visit.user.id,
        name: visit.user.full_name,
        avatar: visit.user.avatar,
        phone: visit.user.phone,
    },
    isNew: !!isNew,
})

const momentOrNull = (d) => !d ? null : moment(d);
