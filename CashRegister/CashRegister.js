"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashRegister = void 0;
var CashRegister = /** @class */ (function () {
    function CashRegister() {
    }
    CashRegister.buy = function (user, shop) {
        var userIndexInSys = shop.getIndexUserInShop(user);
        var userCostBasket = shop.getShopSystem().getUsersBasketInShop()[userIndexInSys].getBasket().getCostBasket();
        var userDescount = shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].getDescount();
        var costBasketAfterDescount = userCostBasket - userCostBasket * (userDescount / 100);
        var lengthDescCards = shop.getDescount().getCards().getDescountCards().length - 1;
        var descountIndUser = shop.getDescount().getCards().getDescountCards().map(function (e) { return e.getPercent(); }).indexOf(shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].getDescount());
        var nextDescountInd = descountIndUser + 1;
        var nameCard = shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].getName();
        var nameNextCard = shop.getDescount().getCards().getDescountCards()[nextDescountInd].getName();
        console.log("\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u044B \u0434\u043E \u0441\u043A\u0438\u0434\u043A\u0438: ".concat(userCostBasket, " \u0440\u0443\u0431\u043B\u0435\u0439\n\u0421\u043A\u0438\u0434\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430: ").concat(userDescount, "%\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u044B \u043F\u043E\u0441\u043B\u0435 \u0441\u043A\u0438\u0434\u043A\u0438: ").concat(costBasketAfterDescount, " \u0440\u0443\u0431\u043B\u0435\u0439"));
        if (lengthDescCards === descountIndUser) {
            console.log("\nСпасибо за покупку! Возвращайтесь ещё");
        }
        else {
            console.log("\n\u0423 \u0432\u0430\u0441 ".concat(nameCard, " \u043A\u0430\u0440\u0442\u0430, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0443 \u0443\u0440\u043E\u0432\u043D\u044F ").concat(nameNextCard));
        }
        ;
        console.log(CashRegister.STRING);
    };
    ;
    CashRegister.nextLvl = 5000;
    CashRegister.STRING = "\n------------------------------------------------";
    return CashRegister;
}());
exports.CashRegister = CashRegister;
;
