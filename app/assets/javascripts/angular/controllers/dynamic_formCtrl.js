app.controller('DynamicFormCtrl', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
<<<<<<< HEAD
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
=======
	//~ $scope.formData = {};   // JavaScript needs an object to put our form's models into.

    //~ $scope.formTemplate = [
        //~ {
            //~ "type": "text",
            //~ "label": "First Name",
            //~ "model": "name.first",
						//~ "required": true,
						//~ "callback": "alert(1)"
        //~ },
        //~ {
            //~ "type": "text",
            //~ "label": "Last Name",
            //~ "model": "name.last"
        //~ },
        //~ {
            //~ "type": "email",
            //~ "label": "Email Address",
            //~ "model": "email"
        //~ },
        //~ {
            //~ "type": "submit",
            //~ "model": "submit",
					  //~ "callback": "alert(1)"
        //~ },
    //~ ];
				
				
				
				//~ $scope.schema = {
  //~ "type": "object",
  //~ "title": "Comment",
  //~ "properties": {
    //~ "name": {
      //~ "title": "Name",
      //~ "type": "string"
    //~ },
    //~ "email": {
      //~ "title": "Email",
      //~ "type": "string",
      //~ "pattern": "^\\S+@\\S+$",
      //~ "description": "Email will be used for evil."
    //~ },
    //~ "comment": {
      //~ "title": "Comment",
      //~ "type": "string",
      //~ "maxLength": 20,
      //~ "validationMessage": "Don't be greedy!"
    //~ }
  //~ },
  //~ "required": [
    //~ "name",
    //~ "email",
    //~ "comment"
  //~ ]
//~ };

  //~ $scope.form =[
  //~ "name",
  //~ "email",
  //~ {
    //~ "key": "comment",
    //~ "type": "textarea",
    //~ "placeholder": "Make a comment"
  //~ },
  //~ {
    //~ "type": "button",
    //~ "style": "btn-info",
    //~ "title": "OK",
		//~ "onClick": "sayNo()"
  //~ }
//~ ];

  //~ $scope.model = {};
		//~ $scope.sayNo = function() {
    //~ alert('Noooooooo');
  //~ };
  $scope.newField = {};
  $scope.editing = false;
  
  $scope.list1 = [];
  $scope.list2 = [{'title': 'Zebra Striped'},{'title': 'Black Leather'},{'title': 'Alligator Leather'}];
  $scope.list3 = [{'title': 'iPhone'},{'title': 'iPod'},{'title': 'iPad'}];
  $scope.list4 = [{'type': 'text','label': 'Text Box','model': ''},{'type': 'textarea','label': 'Text Area','model': ''},{'type': 'submit', 'label': 'Button', 'model': ''}];
  
  $scope.hideMe = function() {
    return $scope.list1.length > 0;
  } 
  
  //~ $scope.editAppKey = function(field) {
      //~ $scope.editing = $scope.list1.indexOf(field);
      //~ $scope.newField = angular.copy(field);
    //~ console.log($scope.list4);
    //~ }
    
    //~ $scope.saveField = function(index) {
        //~ if ($scope.editing !== false) {
            //~ $scope.list1[$scope.editing] = $scope.newField;
            //~ $scope.editing = false;
        //~ }       
    //~ };
  
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
>>>>>>> 659a96bb8ae72c6d1a3b288535e1c1715f1f9a80
	}]);
