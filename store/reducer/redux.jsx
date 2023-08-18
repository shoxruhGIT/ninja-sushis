import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: "chat",
  users: [],
  data: [],
};

const mealSlice = createSlice({
  name: "Meal",
  initialState,
  reducers: {
    mealLoading(state, action) {
      state.isLoading = "Loading";
    },
    mealLoaded(state, action) {
      state.isLoading = "Loaded";
      state.data = action.payload;
    },
    usersFetched(state, action) {
      state.users = action.payload;
    },
  },
});

export const { mealLoaded, mealLoading, usersFetched } = mealSlice.actions;
export default mealSlice.reducer;
// const MealRuducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "mealLoading": {
//       return {
//         ...state,
//         isLoading: "loading",
//       };
//     }
//     case "mealLoaded": {
//       return {
//         isLoading: "loaded",
//         data: action.payload,
//       };
//     }
//   }
// };

// export default MealRuducer;
