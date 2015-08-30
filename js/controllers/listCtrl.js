bookApp.controller('listCtrl', ['listFactory','$modal', function(listFactory, $modal){
	this.books = listFactory.getList();
	this.singleBook = {};

	this.addBook = function(){
		listFactory.addBook(this.singleBook);
		this.singleBook = {};

		$modal.open({
			animation: true,
			templateUrl: 'modalContent.html',
			controller: 'modalCtrl as modalCtrl',
			size: 'sm',
			resolve: {
				message: function() {
					return 'A new book has been successfully added...';
				},
				type: function() {
					return 'addBook'
				}
			}
	    });
	};
}]);