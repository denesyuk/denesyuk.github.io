$("body a").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
});
$(document).ready(function(){
    $('.block__fixed__nav').click(function() {
        $('.block__opening__settings').toggleClass('active')
        $('.setting__title').toggleClass('active2')
    })
});
$(document).ready(function(){
    $('.block__themes .white').click(function() {
        $('body').removeClass('dark')
        $('body').removeClass('green')
        $('.green').removeClass('active')
        $('.dark').removeClass('active')
        $('.block__themes .white').addClass('active__default')
        $('.block__form.opening').removeClass('green')
        $('.block__form.opening').removeClass('dark')
        $('.content__block-form h3').removeClass('dark')
        $('.block__form').removeClass('dark')
        $('.block__form').removeClass('green')
        $('.form h6').removeClass('dark')
    })
});
$(document).ready(function(){
    $('.block__themes .dark').click(function() {
        $('body').addClass('dark')
        $('body').removeClass('green')
        $(this).addClass('active')
        $('.green').removeClass('active')
        $('.block__themes figure').removeClass('active__default')
        $('.block__form.opening').addClass('dark')
        $('.content__block-form h3').addClass('dark')
        $('.block__form.opening').removeClass('green')
        $('.block__form').addClass('dark')
        $('.form h6').addClass('dark')
    })
});
$(document).ready(function(){
    $('.block__themes .green').click(function() {
        $('body').addClass('green')
        $('body').removeClass('dark')
        $(this).addClass('active')
        $('.dark').removeClass('active')
        $('.block__themes figure').removeClass('active__default')
        $('.block__form.opening').addClass('green')
        $('.content__block-form h3').addClass('dark')
        $('.block__form.opening').removeClass('dark')
        $('.block__form').addClass('green')
        $('.form h6').addClass('dark')
    })
});
$(document).ready(function(){
    $('.block__fixed__contacts, .contact').click(function() {
        $('.block__form').toggleClass('opening')
    })
});
$(document).ready(function(){
    $('.btn__close').click(function() {
        $('.block__form').removeClass('opening')
    })
});
$(document).ready(function(){
    $('#open__soc').click(function() {
        $('.block__socialNetworks').toggleClass('opening_soc'),
        $('#open__soc svg').toggleClass('active')
    })
});
$(document).ready(function(){
    $('#open__form').click(function() {
        $('.form').toggleClass('opening'),
        $('#open__form svg').toggleClass('active')
    })
});
$(document).ready(function(){
    $('.block__fixed__contacts').hover(function() {
        $('.contact__title').toggleClass('active')
    })
});
$(document).ready(function(){
    $('.block__fixed__nav').hover(function() {
        $('.setting__title').toggleClass('active')
    })
});
$(document).ready(function(){
    $('.closed__button').click(function() {
        $('.block__done').removeClass('active')
    })
});

$("#form").submit(function (e) {
    e.preventDefault();
     var form_data = $(this).serialize();
     $.ajax({
         type: "POST", 
         url: "send.php",
         data: form_data,
         success: function () {
            $('.block__done').addClass('active');
            $('.block__form').removeClass('opening')
         }
     });
 });