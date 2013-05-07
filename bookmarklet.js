jQuery('p').css("cursor","pointer").hover(function(){
  jQuery(this).css("box-shadow", "0 0 0.5em rgba(0,0,0,0.5)");
}, function(){
  jQuery(this).css("box-shadow", "0 0 0 transparent");
}).on('click', function(){
  var t = jQuery(this).text();
  if(t.length >= 75){
    t = t.substr(0,44) + "*" + t.substr(45,29) + "*" + t.substring(75,t.length);
  }
  jQuery(this).text(t);
});

/***
 * helper-function zur Ermittlung der aktuellen Breite des ersten <p> in Zeichen
 *

(function($){
    $(window).resize(function(){
        var txt = $('p').first().text(),
            p_width = $('p').first().width();
            n = 0;
        if($('#rr').length === 0){
            $('body').append('<p id="rr"></p>');
        }
        $('#rr').text(txt[0]).css('width', p_width);
        var rr_height = $('#rr').height();
        while($('#rr').height() === rr_height) {
            n++;
            $('#rr').append(txt.substr(n,1));
        }
        console.log(n+1);
    });
}(jQuery))
*/
