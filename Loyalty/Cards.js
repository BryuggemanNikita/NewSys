"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(name, percent) {
        this.name = name;
        this.percent = percent;
    }
    ;
    Card.prototype.getName = function () {
        return this.name;
    };
    ;
    Card.prototype.getPercent = function () {
        return this.percent;
    };
    ;
    return Card;
}());
exports.Card = Card;
;
