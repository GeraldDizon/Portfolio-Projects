$( document ).ready(function() {
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".fixed-top");
            var $logo = $(".navbar-brand");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $logo.toggleClass('colored', $(this).scrollTop() > $nav.height());
        });
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('codingSVG'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/svg/CodingImage.json'
    })
});

