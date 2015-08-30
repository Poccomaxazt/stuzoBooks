bookApp.factory('listFactory', ['localStorageService', function(localStorageService){
	var listService,
		booksList;

	listService = {};

	listService.getList = function(){
		var bookKeys;

		booksList = [];
		bookKeys = localStorageService.keys();
		bookKeys.forEach(function(key){
			booksList.push(localStorageService.get(key));
		});

		return booksList;
	};

	listService.getBookById = function(bookId){
		var listInd;

		booksList.forEach(function(bookItem,i){
			if (bookItem.id === +bookId) {
				listInd = i;
			}
		});

		return booksList[listInd];
	};

	listService.addBook = function(book){
		var lastId = 0;

		booksList.forEach(function(bookItem){
			if (bookItem.id > lastId) {
				lastId = bookItem.id;
			}
		});
		book.id = lastId + 1;
		booksList.push(book);
		localStorageService.set('book-' + book.id, book);
	};

	listService.updateBook = function(book){
		booksList.forEach(function(bookItem,i,list){
			if (bookItem.id === book.id) {
				list[i] = book;
			}
		});
		localStorageService.set('book-' + book.id, book);
	};

	listService.removeBook = function(book){
		booksList.forEach(function(bookItem,i,list){
			if (bookItem === book) {
				list.splice(i,1);
			}
		});
		localStorageService.remove('book-' + book.id);
	};

	return listService;
}]);