(function($){

    $('head').append('<style type="text/css">rr{background-color:red}#range-checker{position:absolute;visibility:hidden}</style>');
    $('body').append('<div id="range-indice"></div>');

    /***
    * helper-function zur Ermittlung der aktuellen Breite des ersten <p> in Zeichen
    */
    var checkRR = function(elem){
        var txt = elem.text(),
            p_width = elem.width(),
            n = 0,
            rchecker,
            rr_height,
            off = elem.offset();
        if($('#range-checker').length === 0){
            $('body').append('<p id="range-checker"></p>');
        }
        rchecker = $('#range-checker');
        rchecker.text(txt[0]).css('width', p_width);
        rr_height = rchecker.height();
        while(rchecker.height() === rr_height) {
            n++;
            rchecker.append(txt.substr(n,1));
        }
        off.left += elem.outerWidth();
        $('#range-indice').text(n+1).css({
            position: "absolute",
            top: off.top,
            left: off.left
        });
    };

    var el;
    $('p').css("cursor","pointer").hover(function(){
        $(this).css("box-shadow", "0 0 0.5em rgba(0,0,0,0.5)");
    }, function(){
        $(this).css("box-shadow", "0 0 0 transparent");
    }).on('click', function(){
        var el = $(this),
        t = el.text(),
        l = el.find('rr').length,
        start = '',
        end = '',
        between = '',
        c = el.css('color');
        if(t.length >= 75 && l == 0){
            start = t.substr(0,44);
            end = t.substring(75,t.length);
            for ( i = 0; i <= 30; i++ ) {
                between += "<rr>" + t.substr(44 + i,1) + "</rr>"
            }
            //t = t.substr(0,44) + "*" + t.substr(45,29) + "*" + t.substring(75,t.length);
            el.html(start + between + end);
        } else if(l > 0){
            $(this).html(t);
        }
        checkRR(el);
    });

    $(window).resize(function(){
        if(el !== 'undefined'){
            checkRR(el);
        }
    })

}(jQuery));
