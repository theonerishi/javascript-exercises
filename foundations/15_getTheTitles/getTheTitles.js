const getTheTitles = function(books) {
    let arr = [];
    for (book of books) {
        for (prop in book) {
            if (prop == 'title') {
                arr.push(book[prop]);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
