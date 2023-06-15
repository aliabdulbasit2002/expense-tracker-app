import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

export const expenseSlice = createSlice({
  name: "expence",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter((expense) => {
        if (expense.id !== action.payload) {
          return expense;
        }
      });
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
