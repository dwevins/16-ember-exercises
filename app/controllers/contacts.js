import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showForm() {
      this.toggleProperty('formVisible');
    },

    deleteContact(contact) {
      if (confirm('remove contact?')) {
        fetch('https://tiny-tn.herokuapp.com/collections/dwe-people/' + contact._id, {
          method: 'delete',
        })
        .then(() => {
          this.set('model', this.model.filter((item) => {
            return item._id !== contact._id;
          }))
        })
      }
    },

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
      })
      .then((res) => res.json())
      .then((contact) => {
        this.set('model', [contact, ...this.model]);
      });
      this.toggleProperty('formVisible')
      this.set(firstName, '');
      this.set(lastName, '');
      this.set(address, '');
      this.set(phoneNumber, '');
    }
  }
});
