document.addEventListener('DOMContentLoaded', function () {
    // Get all 'navbar-burger' elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function (el) {
            el.addEventListener('click', function () {

                // Get the target from the 'data-target' attribute
                var target = el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });

        // Get div `sections`
        var $home = document.querySelector('#home'),
            $about = document.querySelector('#about'),
            $skills = document.querySelector('#skills'),
            $projects = document.querySelector('#projects');

        var $navbarItems = document.querySelectorAll('.navbar-item');
        var $target = document.getElementById($navbarBurgers[0].dataset.target);

        for (var i = 0; i < $navbarItems.length; i++) {

            // On Click Scroll to div `section`
            $navbarItems[i].addEventListener('click', function (e) {
                var innerText = e.target.innerHTML.trim();
                switch (innerText) {
                    case 'Home':
                        $home.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                        $navbarBurgers[0].classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                        break;
                    case 'About':
                        $about.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                        $navbarBurgers[0].classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                        break;
                    case 'Skills':
                        $skills.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                        $navbarBurgers[0].classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                        break;
                    case 'Projects':
                        $projects.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                        $navbarBurgers[0].classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                        break;
                }
            })
        }
    }

    // TweenMax TimelineMax
    // var timeLine = new TimelineMax({
    //     onUpdate: updatePercentage,
    //     onComplete: killInlineStyle
    // });

    // timeLine.from('#skills .column:nth-child(1)', 1, {
    //     x: 300,
    //     opacity: 0
    // });
    // timeLine.from('#skills .column:nth-child(2)', 1, {
    //     x: 300,
    //     opacity: 0
    // });
    // timeLine.from('#skills .column:nth-child(3)', 1, {
    //     x: 300,
    //     opacity: 0
    // });
    // timeLine.from('#skills .column:nth-child(4)', 1, {
    //     x: 300,
    //     opacity: 0
    // });

    // init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var $scrollMagicProjects = new ScrollMagic.Scene({
            triggerElement: '#projects'
        })
        .setClassToggle('#projects .card.is-shady', 'flip-in')
        .addTo(controller);

    // var $scrollMagicSkills = new ScrollMagic.Scene({var $scrollMagicSkills = new ScrollMagic.Scene({
    //     triggerElement: '#skills',
    //     triggerHook: 'onCenter',
    //     duration: '100%'
    // })

    // window.addEventListener('resize', function () {
    //     if (window.innerWidth >= 720) {
    //         $scrollMagicSkills
    //             .setPin('#skills')
    //             .setTween(timeLine)
    //             .addTo(controller);
    //     } else {
    //         killInlineStyle(true);
    //         $scrollMagicSkills.destroy();
    //     }
    // })

    function updatePercentage() {
        timeLine.progress();
    }

    function killInlineStyle(mobile = false) {
        $skillsProgress = document.querySelectorAll('.progress--circle');
        $magicScrollPin = document.querySelectorAll('.scrollmagic-pin-spacer');
        $scrollPinColumns = document.querySelectorAll('.scrollmagic-pin-spacer .columns');

        $skillsProgress.forEach(function (el) {
            el.removeAttribute('style');
        })

        if (mobile) {
            $magicScrollPin.forEach(function (el) {
                el.removeAttribute('style');
            })

            $scrollPinColumns.forEach(function (el) {
                el.removeAttribute('style');
            })
        }
    }
});