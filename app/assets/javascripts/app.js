app = angular.module('DynamicForm', ['dynform','schemaForm', 'ngRoute', 'templates', 'ngDragDrop']).config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/new_form', {
                templateUrl: 'new.html',
                controller: 'DynamicFormCtrl'
            }).when('/', {
                templateUrl: 'index.html',
                controller: 'DynamicFormCtrl'
            }).when('/form_lists', {
                templateUrl: 'form_list.html',
                controller: 'DynamicFormCtrl'
            }).when('/form/show', {
                templateUrl: 'show.html',
                controller: 'DynamicFormCtrl'
            });
            //~ $locationProvider.html5Mode(true);
						  }]);
        

$(function() {
  $("#catalog").accordion();
}); 