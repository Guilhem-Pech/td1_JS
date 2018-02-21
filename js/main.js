(function () {

    "use strict";
    let css_blanc = {
        'background-color' :'black',
        'color' : 'white',
        'border' : 'solid 1px white',
        'font-weight' : 'bolder',
        'width' : '50',
        'height' : '50',
        'text-align' : 'center'
    };
    let css_noir = {
        'background-color' :'white',
        'color' : 'black',
        'border' : 'solid 1px black',
        'font-weight' : 'bolder',
        'width' : '50',
        'height' : '50',
        'text-align' : 'center'
    };
    let css_surbrillance = {
        'background-color' : 'red',
        'color' : 'white'
    };

    let goLight = function () {
        $(this).css(css_surbrillance);
    };

    let goWhite = function () {
        $(this).css(css_blanc);
    };

    let goBlack = function () {
        $(this).css(css_noir);
    };

    let creer_case_noire = function () {
        return $('<td />').addClass('case-noire').html('N');
    };
    let creer_case_blanche = function () {
        return $('<td />').addClass('case-blanche').html('B');
    };

    
    $(() => {
        let dummy = new Damier(3,3,'#damier');

        let case_blanche = $(".case-blanche");
        let case_noire = $(".case-noire");

        case_blanche.css(css_blanc).hover(goLight,goWhite); // Chaining + callback de bogoss

        case_noire.css(css_noir).hover(goLight,goBlack);
    });
    
}) ();
