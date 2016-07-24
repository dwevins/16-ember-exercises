import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newBookmark() {
      const data = {
        url: this.url,
        nickName: this.nickName,
      };

      fetch('https://tiny-tn.herokuapp.com/collections/dwe-bookmarks', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data),
      });
    }
  }
});
