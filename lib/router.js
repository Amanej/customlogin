Router.configure({
  layoutTemplate: 'form_layout'
});


Router.map(function(){

  // Login - Home
  this.route('login', {
    path: '/',
    template: 'login'
  });

  // Register - Home
  this.route('register');

  // Dashboard
  this.route('dashboard', {
    layoutTemplate: 'dashboard_layout',
    path: '/dashboard',
    template: 'dashboard',
    onBeforeAction: function() {
      if(Meteor.user() == null) {
        Router.go('/');
      }
      this.next();
    }
  });

});
