$(function () {

    // Menu opener hamburger

    $('.burger-menu').click(function () {
        $('.menu-collapse').toggleClass('active');
        $('.menu').toggleClass('menu-opened');
        $(this).toggleClass('active')
    });

    // Paralax

    if ($(window).width() > 1262)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.par-1',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 3.9,
                                'multiplier': 0.007,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 2.9,
                                'multiplier': 0.005,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });

        $('body').parallax({
            'elements': [
                {
                    'selector': '.par-2',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': -11.7,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -17.1,
                                'multiplier': 0.005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                }
            ]
        });

        $('body').parallax({
            'elements': [
                {
                    'selector': '.par-4',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': -8.8,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -43,
                                'multiplier': 0.005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                }
            ]
        });
    }
    
});