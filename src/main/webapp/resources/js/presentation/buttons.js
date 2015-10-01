$(document).ready(function() {
    $('#change').click(function() {
        var listfigures =$("input:radio[name=figure]");
        var squarechecked = $('#f1').is(':checked');
        var circlechecked = $('#f2').is(':checked');
        var rectanglechecked = $('#f3').is(':checked');
        var color = $('#color').val();
        changeColor($('#d1'),color);
        if(!checkFigureSelected(listfigures)){
            changeTextLabel($('#labelmessage'));
        }
        if(squarechecked === true){
           changeCss($('#d1'),"square");
        }
        if(circlechecked === true){
           changeCss($('#d1'),"circle");
        }
        if(rectanglechecked === true){
          changeCss($('#d1'),"rectangle");
        }
    });
    $('#hide').click(function() {
        var div = $('#d1');
        hide(div);
    });
    $('#show').click(function() {
        var div = $('#d1');
        show(div);
    });
   $("input:radio[name=figure]").click(function(){
       $('#labelmessage').text("");
    });
});