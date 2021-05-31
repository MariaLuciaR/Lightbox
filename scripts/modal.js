// Open modal when an image is clicked
$('.photos a').on('click', function(e){
    // Prevent anchor elements' default action
    e.preventDefault();

    $('.modal').fadeIn(250);
    $('.modal-content').html($(e.currentTarget).html());
});

// Close modal when the 'close' button or modal background is clicked
$('.modal-close, .modal-background').on('click', function(){
    $('.modal').fadeOut(250);
});