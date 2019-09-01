import mixpanel from 'mixpanel-browser';
mixpanel.init('b397a9fe4d6d8439babe807a68d5cc4c');

let env_check = process.env.NODE_ENV === 'production';

let actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;