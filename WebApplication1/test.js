// Code goes here

$(function () {

    var Person = function (name) {
        this.name = ko.observable(name);
    };

    var viewmodel = (function () {
        var p1 = new Person('Haley');
        var p2 = new Person('Ella');
        var people = ko.observableArray([p1, p2]);
        return {
            people: people
        };
    })();

    ko.applyBindings(viewmodel);
});

