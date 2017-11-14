$(document).ready(() => {
    // @media-mobile-513px
    $(window).resize(() => {
        if ($(window).width() <= 513) {
            $('.fa-iconname').addClass("lg-2x");
        }
        else {
            $('.fa-iconname').removeClass("lg-2x");
        }
    });
    // @media-tablet-768px
    $(window).resize(() => {
        if ($(window).width() <= 768) {
            $('.fa-iconname').addClass("lg-2x");
        }
        else {
            $('.fa-iconname').removeClass("lg-2x");
        }
    });

    // Nav
    // Home
    $('#page-ho-date').html("<span class='theme-text-color'>" + daysToGo() + "</span> days to go...");
    // Venue
    hoverClasses('#accom-link', 'accom-active')
    // Gifts
    // RSVP
});

// Methods
const log = (str) => {
    console.log(str);
}

const daysToGo = () => {
    var now = new Date();
    var target = new Date("March 30, 2018 14:00");
    var diff = target.getTime() - now.getTime();
    log(diff);
    // var days = Math.floor(diff / 1000 / 60 / 60 / 24);
    var days = diff / 1000 / 60 / 60 / 24;
    diff -= days
    log(days);
    return days.toString();
}

const hoverClasses = (target, classes) => {
    $(target).hover(
        () => {
            $(this).addClass(classes);
        }, () => {
            $(this).removeClass(classes);
        }
    );
}
