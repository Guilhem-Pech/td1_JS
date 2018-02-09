(function() {
    "use strict";
    let css_blanc = {
        'background-color': 'black',
        'color': 'white',
        'font-weight': 'bold',
        'border': 'solid 1px white'
    }
    let css_noire = {
        'background-color': 'white',
        'color': 'black',
        'border': 'solid 1px black',
        'font-weight': 'bold'
    }

    let css_rouge = {
        'background-color': 'red',
        'color': 'yellow',
        'border': 'solid 1px black',
        'font-weight': 'bold'
    }
    $(document).ready(function() {
        /* On peut travailler sur le DOM ! */

        function Damier() {
          let damier = $(id)
          function construct(sizeX,sizeY,id) {
            for (let i = 0; i < sizeX; i++) {
              let tr = $('<tr />');
              for (var j = 0; j < sizeY; j++) {
                tr.append($('<td />').addClass(((j+i)%2 == 0 ? 'case-blanche':'case-noire')).html('TD'))
              }
              damier.append(tr);
            }
          }          
        }

        let damier = $('#damier')

        for (let i = 0; i < 8; i++) {
          let tr = $('<tr />');
          for (var j = 0; j < 10; j++) {
            tr.append($('<td />').addClass(((j+i)%2 == 0 ? 'case-blanche':'case-noire')).html('TD'))
          }
          damier.append(tr);
        }


        let case_blanche = $('.case-blanche');
        let case_noire = $('.case-noire');


        case_blanche.css(css_blanc).hover(function(event) {
            $(this).css(css_rouge);
        }, function() {
            $(this).css(css_blanc);
        });

        case_noire.css(css_noire).hover(function(event) {
            $(this).css(css_rouge);
        }, function() {
            $(this).css(css_noire);
        });


    });
})();
