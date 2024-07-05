"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescountCards = void 0;
var DescountCards = /** @class */ (function () {
    function DescountCards() {
        this.descontCards = [];
    }
    ;
    DescountCards.prototype.pushNewCard = function (card) {
        this.descontCards.push(card);
        this.descontCards.sort(function (e1, e2) { return e1.getPercent() - e2.getPercent(); });
    };
    ;
    DescountCards.prototype.getDescountCards = function () {
        return this.descontCards;
    };
    ;
    return DescountCards;
}());
exports.DescountCards = DescountCards;
;
