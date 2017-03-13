(function() {
    'use strict';

    angular
        .module('BudgetTracker')
        .controller('BudgetTrackerCtrl', btCtrl);

    /* @ngInject */
    function btCtrl() {
        var vm = this;

        vm.addExpense = [];
        vm.addIncome = [];

        vm.addExpenseClick = function (name, amount) {
          vm.addExpense.push(vm.expenseInput);
          vm.expenseInput = {};
        };

        vm.addIncomeClick = function (name, amount) {
          vm.addIncome.push(vm.incomeInput);
          vm.incomeInput = {};
        };
    }
})();
