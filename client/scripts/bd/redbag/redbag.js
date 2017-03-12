;
(function () {
    $('#dowebok').fullpage({
        navigation: true,
        navigationColor: "#fff",
        navigationPosition: "right",
        // sectionsColor: [],
        verticalCentered: false,
        easing: 'easeInQuart',
        effect: {
            transform: {
                translate: 'Y',
                scale: [1, 1],
                rotate: [0, 0]
            },
            opacity: [0, 1]
        },
    });
}());