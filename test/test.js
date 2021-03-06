// require('../js/array_test');
describe("multiplyNumeric", function () {
    it("multiplies all numeric properties by 2", function () {
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };
        let result = multiplyNumeric(menu);
        assert.equal(menu.width, 400);
        assert.equal(menu.height, 600);
        assert.equal(menu.title, "My menu");
    });

    it("returns nothing", function () {
        assert.isUndefined(multiplyNumeric({}));
    });

});

describe("camalize", function () {
    it("hi into hi", function () {
        assert.equal(camalize("hi"), "hi");
    });

    it("leaves an empty line as is", function () {
        assert.equal(camalize(""), "");
    });

    it("turns background-color into backgroundColor", function () {
        assert.equal(camalize("background-color"), "backgroundColor");
    });

    it("turns list-style-image into listStyleImage", function () {
        assert.equal(camalize("list-style-image"), "listStyleImage");
    });

    it("turns -webkit-transition into WebkitTransition", function () {
        assert.equal(camalize("-webkit-transition"), "WebkitTransition");
    });
});

describe('makeJson test', function() {
    it("log test by 5 ", function() {
        assert.equal(makeJson(5), 5);
    });
    it("log test by 7 ", function() {
        assert.equal(makeJson(7), 7);
    });
});

describe('minimum func test', function() {
    it('test for min(2,5)',function(){
        assert.equal(min(2, 5), 2);
    });
    it('test for min(3,-1)',function(){
        assert.equal(min(3, -1), -1);
    });
    it('test for min(1,1)',function(){
        assert.equal(min(1, 1), 1);
    });
});

describe('x in power n func test', function () {
    it('test for pow(3, 2)', function () {
        assert.equal(pow(3, 2), 9);
    });
    it('test for pow(3, 3)',function(){
        assert.equal(pow(3, 3), 27);
    });
    it('test for pow(1, 100)',function(){
        assert.equal(pow(1, 100), 1);
    });
});
