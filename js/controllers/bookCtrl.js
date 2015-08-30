bookApp.controller('bookCtrl', ['listFactory','$routeParams','$modal', function(listFactory, $routeParams, $modal){
	this.isEditing = false;
	this.editingBook = null;
	
	if ($routeParams.bookId) {
		this.detailBook = listFactory.getBookById($routeParams.bookId);
	};

	this.askRemoving = function(book){
		var modalInstance,
			that = this;

			modalInstance = $modal.open({
				animation: true,
				templateUrl: 'modalContent.html',
				controller: 'modalCtrl as modalCtrl',
				size: 'sm',
				resolve: {
					message: function() {
						return 'Are you realy want remove this book: ' + book.title + '?';
					},
					type: function() {
						return 'removeBook'
					}
				}
			});

	    modalInstance.result.then(function (answer) {
	    	that.removeBook(book);
	    }, function () {
	    	console.log('Removing was canceled...');
	    });
	};

	this.removeBook = function(book){
		listFactory.removeBook(book);
	};

	this.editBook = function(book){
		this.isEditing = true;
		this.editingBook = angular.copy(book);
	};

	this.updateBook = function(){
		this.isEditing = false;
		listFactory.updateBook(this.editingBook);
	};

	this.cancelUpdating = function(){
		this.isEditing = false;
		this.editingBook = null;
	};
}]);