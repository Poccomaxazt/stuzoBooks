bookApp.controller('modalCtrl', ['$modalInstance','message', 'type', function($modalInstance, message, type){
	this.message = message;
	this.type = type;

	this.ok = function() {
		$modalInstance.close(true);
	};

	this.cancel = function() {
	    $modalInstance.dismiss('cancel');
	};
}]);