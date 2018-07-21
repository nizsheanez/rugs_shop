var msnry = new Masonry( '#products', {
    // options...
    itemSelector: '.card',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 20,
    transitionDuration: '0.4s',
    stagger: '0.03s',
    horizontalOrder: true
});


$(function() {
    initializeLazyLoadOfImages();
    // $("input[type='radio']").change(function() {
    //     selectPriceBasedOnVariant();
    // });
    // if (!_(productVariants).isEmpty()) {
    //     selectPriceBasedOnVariant();
    // }

 
    

})

// $(document).ready(function() {
//     var $grid = $('#products').masonry({
//         // options...
//         itemSelector: '.card',
//         columnWidth: '.grid-sizer',
//         percentPosition: true,
//         gutter: 20,
//         transitionDuration: '0.4s',
//         stagger: '0.03s',
//         horizontalOrder: true

//     });

//     // $grid.imagesLoaded().progress( function() {
//     //     $grid.masonry('layout');
//     // });
// });


// function resizeGridItem(item){
//     grid = document.getElementsByClassName("products")[0];
//     rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//     rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//     rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
//       item.style.gridRowEnd = "span "+rowSpan;
// }
  
// function resizeAllGridItems(){
//     allItems = document.getElementsByClassName("item");
//     for(x=0;x<allItems.length;x++){
//       resizeGridItem(allItems[x]);
//     }
// }
  
// function resizeInstance(instance){
//       item = instance.elements[0];
//     resizeGridItem(item);
// }

// window.onload = resizeAllGridItems();
// window.addEventListener("resize", resizeAllGridItems);
  
// allItems = document.getElementsByClassName("item");
// for(x=0;x<allItems.length;x++){
//     imagesLoaded( allItems[x], resizeInstance);
// }

function initGrid() {
    
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

