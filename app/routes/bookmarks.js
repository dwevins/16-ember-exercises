import Ember from 'ember';

export default Ember.Route.extend({
  return fetch ('https://tiny-tn.herokuapp.com/collections/dwe-bookmarks')
    .then((res) => res.json);
});
