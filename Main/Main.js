"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../User/User");
var Shop_1 = require("../Shop/Shop");
var CashRegister_1 = require("../CashRegister/CashRegister");
var Product_1 = require("../Products/Product");
var DecountCards_1 = require("../Loyalty/DecountCards");
var Descount_1 = require("../Loyalty/Descount");
var Cards_1 = require("../Loyalty/Cards");
var card1 = new Cards_1.Card("Bronze", 10);
var card2 = new Cards_1.Card("Silver", 15);
var card3 = new Cards_1.Card("Gold", 20);
var card4 = new Cards_1.Card("Platinum", 25);
var cards = new DecountCards_1.DescountCards();
cards.pushNewCard(card3);
cards.pushNewCard(card1);
cards.pushNewCard(card2);
cards.pushNewCard(card4);
var shop = new Shop_1.Shop("Лента", new Descount_1.Descount("Карты посетителей", cards));
var user = new User_1.User("Oleg");
var pr1 = new Product_1.Product("Хлеб", 100);
var pr2 = new Product_1.Product("Вода", 60);
var pr3 = new Product_1.Product("Черная икра", 5300);
var pr4 = new Product_1.Product("Красная икра", 700);
shop.getShopSystem().pushProductsInAssortiment(pr1);
shop.getShopSystem().pushProductsInAssortiment(pr2);
shop.getShopSystem().pushProductsInAssortiment(pr3);
shop.getShopSystem().pushNewUserInShopSystem(user);
shop.getShopSystem().pushProductInUserBasket(user, pr1);
shop.getShopSystem().pushProductInUserBasket(user, pr2);
var userInd = shop.getIndexUserInShop(user);
shop.getShopSystem().getUserLoyaltyInShop()[userInd].setDescount(card1);
CashRegister_1.CashRegister.buy(user, shop);
shop.getShopSystem().pushProductInUserBasket(user, pr3);
shop.getShopSystem().pushProductInUserBasket(user, pr4);
shop.getShopSystem().getUserLoyaltyInShop()[userInd].setDescount(card2);
CashRegister_1.CashRegister.buy(user, shop);
// console.log(shop.getDescount().getCards().getDescountCards())
