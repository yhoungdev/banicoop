import { createSlice } from "@reduxjs/toolkit";

const values = {
  totalAdminUsers: 0,
  totalAppUsers: 0,
  totalAgentManagers: 0,
  totalPosReversals: 0,
  totalDispenseError: 0,
  totalFeedBack: 0,
  totalAgents: 0,
  totalWallet: 0,
  totalWalletTransactions: 0,
  totalBankList: [],
};

const totalCountSlice = createSlice({
  name: "totalCounts",
  initialState: values,
  reducers: {
    getTotalAdminUsers: (state, action) => {
      state.totalAdminUsers = action.payload;
    },
    getTotalAppUsers: (state, action) => {
      state.totalAppUsers = action.payload;
    },
    getTotalAgentManagers: (state, action) => {
      state.totalAgentManagers = action.payload;
    },
    getTotalAgents: (state, action) => {
      state.totalAgents = action.payload;
    },
    getTotalDispenseError: (state, action) => {
      state.totalDispenseError = action.payload;
    },
    getTotalFeedbacks: (state, action) => {
      state.totalFeedBack = action.payload;
    },
    getTotalPosReversals: (state, action) => {
      state.totalPosReversals = action.payload;
    },
    getTotalWallet: (state, action) => {
      state.totalWallet = action.payload;
    },
    getTotalWalletTransactionsOfItems: (state, action) => {
      state.totalWalletTransactions = action.payload;
    },
    getTotalBankList: (state, action) => {
      state.totalBankList = action.payload;
    },
  },
});

export const {
  getTotalAgentManagers,
  getTotalAppUsers,
  getTotalAdminUsers,
  getTotalAgents,
  getTotalFeedbacks,
  getTotalDispenseError,
  getTotalPosReversals,
  getTotalWallet,
  getTotalWalletTransactionsOfItems,
  getTotalBankList,
} = totalCountSlice.actions;

const countReder = totalCountSlice.reducer;
export default countReder;
