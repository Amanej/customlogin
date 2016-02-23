// Events
Template.register.events({
  "submit .form-signup": function(event) {

    // Storing the input values
    var first_name = event.target.first_name.value;
    var last_name = event.target.last_name.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password.value;

    // Call to create user
    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        first_name: first_name,
        last_name: last_name
      }
    }, function(err) {
      if(err) {
        FlashMessages.sendError('There was an error with registration.');
      } else {
        FlashMessages.sendSuccess('Accounts Created! You are now logged in.');
      }
    });

    // Prevent submit
    return false;
  }
});
