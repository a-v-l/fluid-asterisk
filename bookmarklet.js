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
