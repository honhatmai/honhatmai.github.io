var productLayouts = document.querySelectorAll('.product-layout');

productLayouts.forEach(function(productLayout) {
    productLayout.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#d8b8f9';
    });

    productLayout.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});