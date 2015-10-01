describe("I want change shape to figure and I have three options to change shape: circle, square, rectangle",function(){
    describe("When the option square is triggered and button 'change' is clicked",function(){
        beforeEach(function() {
            setFixtures('<div id="d1" class="div1"></div>');
        });
        it("Then the div change shape to square",function(){
            var div = $('#d1');
            changeCss(div,"square");
            expect(div).toHaveClass('square');
        });
    });
    describe("When the option circle is triggered",function(){
        beforeEach(function() {
            setFixtures('<div id="d1" class="div1"></div>');
        });
        it("Then the div change shape to circle",function(){
            var div= $('#d1');
            changeCss(div,"circle");
            expect(div).toHaveClass('circle');
        });
    });
    describe("When the option rectangle is triggered",function(){
        beforeEach(function() {
            setFixtures('<div id="d1" class="div1"></div>');
        });
        it("Then the div change shape to rectangle",function(){
            var div = $('#d1');
            changeCss(div,"rectangle");
            expect(div).toHaveClass('rectangle');
        });
    });
});
describe("Hide Div",function(){
    describe("Given I have a webpage with a div for default",function(){
        describe("When I select the option show is triggered",function(){
            beforeEach(function() {
                setFixtures('<div id="d1" class="div1"></div>');
            });
            it("Then the div is hide",function(){
                var div = $('#d1');
                hide(div);
                expect(div).not.toBeVisible();
            });
        });
    });
});
describe("Show Div",function(){
    describe("Given I have a webpage with a div for default",function(){
        describe("When I select the option show is triggered",function(){
            beforeEach(function() {
                setFixtures('<div id="d1" class="div1"></div>');
            });
            it("Then the div is show",function(){
                var div = $('#d1');
                show(div);
                expect(div).toBeVisible();
            });
        });
    });
});
describe("Figure to change is selected",function(){
    describe("I have selected a color for the shape",function(){
        describe("When the radio button is selected",function(){
            beforeEach(function() {
                setFixtures('<td><input type="radio" name="figure" id="f1" />Square'
                +'<input type="radio" name="figure" id="f2" />Circle'
                +'<input type="radio" name="figure" id="f3" />Rectangle</td>');
            });
            it("Then change the shape",function(){
                var listfigures =$("input:radio[name=figure]");
                expect(!checkFigureSelected(listfigures)).toBeTruthy();
            });
        });
    });
});
describe("Change color of the element",function(){
    describe("I have selected a blue color for the shape",function(){
        describe("I have a shape selected and clicked the button 'Change!!'",function(){
            beforeEach(function() {
                setFixtures('<div id="d1" class="div1"></div>');
            });
            it("Then change the color",function(){
                var colorToChange = "rgb(255, 0, 0)";
                changeColor($('#d1'),colorToChange);
                expect($('#d1').css('background-color')).toEqual(colorToChange);
            });
        });
    });
});