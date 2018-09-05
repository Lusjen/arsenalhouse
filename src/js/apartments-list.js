(function() {

    var items = document.querySelectorAll('.js-apartments-list__item');
    var showMoreBtn = document.querySelector('.js-apartments-list__btn');
    var showItems = 10;
    var increaseShowItems = 5;

    function showMore() {
        items.forEach(function(item, index) {
            item.style.display = index < showItems ? 'block' : 'none';
        });
        showItems = showItems + increaseShowItems;
    };
    showMore();

    showMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showMore();
    });

})();