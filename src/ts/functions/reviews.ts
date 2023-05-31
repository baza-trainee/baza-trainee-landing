export function reviews(): void {
    $(document).ready(function () {
        $('.slider').slick({
            dots: true,
            adaptiveHeight: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
        })
    })
};