var bookApp = angular.module('bookApp', ['ngRoute','ui.bootstrap','LocalStorageModule']);

bookApp.config(['$routeProvider','$locationProvider','localStorageServiceProvider',function($routeProvider, $locationProvider, localStorageServiceProvider) {
	localStorageServiceProvider
	    .setPrefix('stuzoBooks');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$routeProvider
		.when('/',{
			templateUrl: 'views/list.html'
		})
		.when('/book/:bookId',{
			templateUrl: 'views/bookDetails.html',
			controller: 'bookCtrl as bookCtrl'
		})
		.when('/addBook',{
			templateUrl: 'views/addBook.html',
			controller: 'listCtrl as listCtrl'
		})
		.when('/contacts',{
			templateUrl: 'views/contacts.html',
			controller: 'contactCtrl as contactCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
}]);