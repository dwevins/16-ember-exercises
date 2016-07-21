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

      this.firstName = '';
      this.lastName = '';
      this.address = '';
      this.phoneNumber = '';
    }
  }
});
