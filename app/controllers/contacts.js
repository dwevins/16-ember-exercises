import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addContact() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        phoneNumber: this.phoneNumber,
      };

      fetch('https://tiny-tn.herokuapp.com/collections/dwe-people', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(data),
      });

      Ember.set(this, firstName, '');
      Ember.set(this, lastName = '');
      Ember.set(this, address = '');
      Ember.set(this, phoneNumber = '');
    }
  }
});
