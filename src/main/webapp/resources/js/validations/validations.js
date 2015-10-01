var hide = function(div){
    div.hide();
};
var show = function(div){
    div.show();
};
var changeColor = function(div,color){
    div.css("background-color",color);
};
var changeCss = function(div,css){
    div.attr("class",css);
};
var checkFigureSelected = function (element){
    var isSelected=null;
    for (var i = 0 ; i < element.length; i++) {
        if (element[i].checked === true) {
            isSelected=true;
        }
    }
    return isSelected;
};
var changeTextLabel = function(element) {
    element.text("Please select a Figure");
};