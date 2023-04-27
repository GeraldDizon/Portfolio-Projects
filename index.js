$( document ).ready(function() {
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".fixed-top");
            var $logo = $(".navbar-brand");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $logo.toggleClass('colored', $(this).scrollTop() > $nav.height());
        });
    });
});

