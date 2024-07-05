"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, cost) {
        var resName = name.trim();
        if (resName !== "") {
            this.name = name;
        }
        else {
            throw new Error(Product.ERROR);
        }
        ;
        if (cost !== undefined && cost > 0) {
            this.cost = cost;
        }
        else {
            throw new Error(Product.ERROR);
        }
        ;
        Product.ID++;
        this.idProduct = Product.ID;
    }
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    ;
    Product.prototype.getCost = function () {
        return this.cost;
    };
    ;
    Product.prototype.getId = function () {
        return this.idProduct;
    };
    ;
    Product.prototype.setCost = function (value) {
        this.cost = value;
    };
    ;
    Product.ID = 0;
    Product.ERROR = "Ошибка";
    return Product;
}());
exports.Product = Product;
;
