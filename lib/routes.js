if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('dashboard');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('home');
	}
});

FlowRouter.route('/admin', {
	name: 'admin',
	action() {
		BlazeLayout.render('adminLayout', {main: 'admin'});
	}
});

FlowRouter.route('/admin/dashboard', {
	name: 'dashboard',
	action() {
		BlazeLayout.render('adminLayout', {main: 'dashboard'});
	}
});
