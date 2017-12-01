(function() {
'use strict';
console.log("start");
angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtController = this;

        alreadyBoughtController.getAlreadyBoughtItems = function() {
            return ShoppingListCheckOffService.getAlreadyBoughtItems();
        }


    }

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyController = this;


        toBuyController.getToBuy = function() {
            return ShoppingListCheckOffService.getToBuyItems();
        }

        toBuyController.isEmpty = function() {
            return ShoppingListCheckOffService.getToBuyItems().length > 0;
        }

        toBuyController.buyItem = function(index) {

            return ShoppingListCheckOffService.buyItem(index);
        }
    }


function ShoppingListCheckOffService() {
    var service = this;

    // Init
    var alreadyBoughtItems = [];
    var toBuyItems = [
        {name:"Pumpkins", quantity:"1 "},
        {name:"Alfalfa Seed", quantity:"1 kilogram"},
        {name:"Bread", quantity:"1 loaf"},
        {name:"Yeast", quantity:"20 grams"},
        {name:"NASTURTIUM SEEDS", quantity:"1 gram"}
            ];

    service.buyItem = function (itemIndex) {
        var transfer = toBuyItems.splice(itemIndex, 1);
        //toBuyItems.splice(itemIndex, 1);
        alreadyBoughtItems.push(transfer[0]);
        console.debug(alreadyBoughtItems[0]);
    };

    service.toBuyEmpty = function () {
        return toBuyItems.length == 0;
    };

    service.getToBuyItems = function () {
        return toBuyItems;
    };

    service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
    };
}
})();
