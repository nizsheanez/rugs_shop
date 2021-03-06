$(function() {
    initializeLazyLoadOfImages();
    initializeMasonry();
})

function initializeMasonry() {
    var $grid = $('#products').masonry({
        itemSelector: '.card',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 20,
        // transitionDuration: '0.2s',
        // stagger: '0.03s',
        horizontalOrder: true
    });
    
    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });

    setTimeout(() => {
        $grid.masonry('layout');
    }, 3000);
}


function initializeLazyLoadOfImages() {
    // var bLazy = new Blazy({
    //     loadInvisible: true
    // });
}

function getSelectedVariant(productVariants, selectedProductOption) {
    return _(productVariants).filter(function(productVariant) {
        return _(productVariant.title).isEqual(selectedProductOption)
    }).first()
}

function selectPriceBasedOnVariant() {
    var selectedProductOption = $("input[type='radio']:checked").val();
    var selectedVariant = getSelectedVariant(productVariants, selectedProductOption);
    var notInStock = !productInStock && (productActualPrice !== null);
    if (selectedVariant) {
        $(".product-actual-price").text(selectedVariant.actualPrice);
        $(".product-compare-price").text(selectedVariant.comparePrice);
        notInStock = !selectedVariant.inStock && (selectedVariant.actualPrice !== null);
    }
    $(".product-not-in-stock").toggle(notInStock);
}

