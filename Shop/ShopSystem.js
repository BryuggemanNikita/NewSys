"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSystem = void 0;
var UserBasketInShop_1 = require("./UserBasketInShop");
var UserLoyaltyInShop_1 = require("./UserLoyaltyInShop");
var BasketOfProduct_1 = require("../Products/BasketOfProduct");
var ShopSystem = /** @class */ (function () {
    function ShopSystem() {
        this.assortymentsOfProducts = [];
        this.arrUserBasketInShop = [];
        this.arrUserLoyaltyInShop = [];
    }
    ;
    ShopSystem.prototype.pushProductsInAssortiment = function (product) {
        this.assortymentsOfProducts.push(product);
    };
    ;
    ShopSystem.prototype.pushNewUserInShopSystem = function (user) {
        this.arrUserBasketInShop.push(new UserBasketInShop_1.UserBasketInShop(user.getUserId(), new BasketOfProduct_1.BasketOfProduct()));
        this.arrUserLoyaltyInShop.push(new UserLoyaltyInShop_1.UserLoyaltyInShop(user.getUserId(), 0, ShopSystem.UNDCARD));
    };
    ;
    ShopSystem.prototype.pushProductInUserBasket = function (user, product) {
        var indexUserInSys = this.arrUserBasketInShop.map(function (e) { return e.id; }).indexOf(user.getUserId());
        var indexProductInSys = this.assortymentsOfProducts.map(function (e) { return e.getId(); }).indexOf(product.getId());
        this.arrUserBasketInShop[indexUserInSys].basket.PushProductInBasket(this.assortymentsOfProducts[indexProductInSys]);
    };
    ;
    ShopSystem.prototype.getAssortyment = function () {
        return this.assortymentsOfProducts;
    };
    ;
    ShopSystem.prototype.getUsersBasketInShop = function () {
        return this.arrUserBasketInShop;
    };
    ;
    ShopSystem.prototype.getUserLoyaltyInShop = function () {
        return this.arrUserLoyaltyInShop;
    };
    ;
    ShopSystem.UNDCARD = "отуствует";
    return ShopSystem;
}());
exports.ShopSystem = ShopSystem;
;