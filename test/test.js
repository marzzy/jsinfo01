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
