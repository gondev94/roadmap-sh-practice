function calculateTotal(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function calculateCategoryTotal(expenses, category) {
    return expenses.reduce((total, expense) => expense.category === category ? total + expense.amount : total, 0);
}

function findLargestExpense(expenses) {
    return expenses.reduce((largest, expense) => expense.amount > largest.amount ? expense : largest);
}

function createExpenseSummary(expenses) {
    const total = calculateTotal(expenses);
    const categoryTotals = expenses.reduce((totals, expense) => {
        totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
        return totals;
    }, {});
    const largestExpense = findLargestExpense(expenses);
    return {
        total,
        categoryTotals,
        largestExpense
    };
}