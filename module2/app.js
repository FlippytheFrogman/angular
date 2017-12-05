(function() {
'use strict';
console.log("start");
angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

        var toBuyController = this;

        toBuyController.getToBuy = function() {
            return ShoppingListCheckOffService.getToBuyItems();
        }

        toBuyController.isEmpty = function() {
            return ShoppingListCheckOffService.getToBuyItems().length == 0;
        }

        toBuyController.buyItem = function(index) {
            return ShoppingListCheckOffService.buyItem(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtController = this;

        alreadyBoughtController.getAlreadyBoughtItems = function() {
            return ShoppingListCheckOffService.getAlreadyBoughtItems();
        }

        alreadyBoughtController.isEmpty = function() {
            return ShoppingListCheckOffService.getAlreadyBoughtItems().length == 0;
        }

    }

    function ShoppingListCheckOffService() {
    var service = this;

    var alreadyBoughtItems = [];
    var toBuyItems = [
        {name:"Pumpkins", quantity:"2 "},
        {name:"Alfalfa Seed", quantity:"1 kilogram"},
        {name:"Bread", quantity:"1 loaf"},
        {name:"Yeast", quantity:"20 grams"},
        {name:"Nasturtium Seeds", quantity:"1 gram"}
    ];

    service.buyItem = function (itemIndex) {
        var transfer = toBuyItems.splice(itemIndex, 1);
        alreadyBoughtItems.push(transfer[0]);
        console.debug(alreadyBoughtItems[0]);
    };

    service.isNothingBought = function () {
        return alreadyBoughtItems.length == 0;
    };

    service.getToBuyItems = function () {
        return toBuyItems;
    };

    service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
    };
}
})();
