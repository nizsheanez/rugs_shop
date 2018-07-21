$(function() {
    initializeLazyLoadOfImages();
    // $("input[type='radio']").change(function() {
    //     selectPriceBasedOnVariant();
    // });
    // if (!_(productVariants).isEmpty()) {
    //     selectPriceBasedOnVariant();
    // }
})

function initializeLazyLoadOfImages() {
    var bLazy = new Blazy();
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

