"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoyaltyInShop = void 0;
var UserLoyaltyInShop = /** @class */ (function () {
    function UserLoyaltyInShop(id, discount, name) {
        this.id = id;
        this.descount = discount;
        this.name = name;
    }
    ;
    UserLoyaltyInShop.prototype.setDescount = function (card) {
        this.descount = card.getPercent();
        this.name = card.getName();
    };
    ;
    UserLoyaltyInShop.prototype.getDescount = function () {
        return this.descount;
    };
    ;
    UserLoyaltyInShop.prototype.getName = function () {
        return this.name;
    };
    ;
    UserLoyaltyInShop.prototype.getId = function () {
        return this.id;
    };
    ;
    return UserLoyaltyInShop;
}());
exports.UserLoyaltyInShop = UserLoyaltyInShop;
;
