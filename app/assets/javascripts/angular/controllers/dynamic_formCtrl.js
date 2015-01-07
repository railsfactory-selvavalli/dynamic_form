app.controller('DynamicFormCtrl', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
	$scope.newField = {};
	$scope.editing = false;

	$scope.list1 = [];
	$scope.list2 = [{'title': 'Zebra Striped'},{'title': 'Black Leather'},{'title': 'Alligator Leather'}];
	$scope.list3 = [{'title': 'iPhone'},{'title': 'iPod'},{'title': 'iPad'}];
	$scope.list4 = [{'type': 'text','label': 'Text Box','model': ''},{'type': 'textarea','label': 'Text Area','model': ''},{'type': 'submit', 'label': 'Button', 'model': ''}];

	$scope.getFormFields = function(input_response) {
		angular.forEach(input_response, function(choice) {
			choice.model = choice.label;
		});
		$scope.form = {}
		$scope.form.form_fields = input_response;
		$http.post('/api/form',$scope.form).success(function(data) {
			$location.path('/form_lists')
		});
	}

	$scope.getFormLists = function() {
		$http.get('/api/form').success(function(data) {
			$scope.form_lists = data;
		});
	}

	$scope.showForm = function(form) {
		$rootScope.form = form;
		$rootScope.formTemplate = form.form_fields;
		$location.path('/form/show')
	}

	$scope.deleteElement = function(index){
		$scope.list1.splice(index, 1);
	}

	$scope.showDropSection =  function(){
		if(!$("#drop-item").hasClass('highlight'))
			$("#drop-item").addClass('highlight');
		}

		$scope.removeDropHighLight = function(){
			$("#drop-item").removeClass('highlight');
		}
	}]);
