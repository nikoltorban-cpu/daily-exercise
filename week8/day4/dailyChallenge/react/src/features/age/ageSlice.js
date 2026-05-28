import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ageUpAsync = createAsyncThunk(
  "age/ageUpAsync",

  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return 1;
  },
);

export const ageDownAsync = createAsyncThunk(
  "age/ageDownAsync",

  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return 1;
  },
);

const initialState = {
  age: 18,
  loading: false,
};

const ageSlice = createSlice({
  name: "age",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // AGE UP

      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(ageUpAsync.fulfilled, (state) => {
        state.loading = false;

        state.age += 1;
      })

      .addCase(ageUpAsync.rejected, (state) => {
        state.loading = false;
      })

      // AGE DOWN

      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(ageDownAsync.fulfilled, (state) => {
        state.loading = false;

        state.age -= 1;
      })

      .addCase(ageDownAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
