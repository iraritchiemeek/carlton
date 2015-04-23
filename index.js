$(document).ready(function() {

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.setInterval(function () {
  $('#single_box').remove()
}, 110);



  $('body').keydown(function(e) {
    if ( e.which === 32 ) {
      $(this).css({backgroundColor: getRandomColor()})
    }
    if ( e.which === 38 ) {
      $('.box').animate({
        top: "-=50"
      });
    }
    if ( e.which === 40 ) {
      $('.box').animate({
        top: "+=50"
      });
    }
    if ( e.which === 37 ) {
      $('.box').animate({
        left: "-=50"
      });
    }
    if ( e.which === 39 ) {
      $('.box').animate({
        left: "+=50"
      });
    }
    if ( e.which === 39 ) {

    }
  });


    function makeDiv() {
        var numRand = Math.floor(Math.random() * 501);
        var divsize = Math.floor(Math.random() * 501);
        var posx = (Math.random() * ($('body').width() - divsize)).toFixed();
        var posy = (Math.random() * ($('body').height() - divsize)).toFixed();
        var height = Math.floor(Math.random() * 101);
        var width = Math.floor(Math.random() * 101);
        if ($('.box').length < 20) {
          $newdiv = $("<div id='single_box' class='box'></div>").css({
            'left': posx + 'px',
            'top': posy + 'px',
            'width': width + 'px',
            'height': width + 'px'
        });
        // $('.box').css({borde: getRandomColor()});
        $newdiv.appendTo('body').delay(100).fadeIn(100, function () {
            makeDiv();
        });
          }
    }
    makeDiv();

});



