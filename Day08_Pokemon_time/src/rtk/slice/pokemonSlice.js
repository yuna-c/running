import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";

const initialState = {
  select: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    onAdd: (state, action) => {
      if (state.select.length >= 6) {
        alert("최대 6개까지 등록 가능 합니다.");
        return;
      }
      if (state.select.find((el) => el.id === action.payload)) {
        alert("이미 등록된 포켓몬 입니다");
        return;
      }
      const addPokemon = MOCK_DATA.find((el) => el.id === action.payload);
      state.select = [...state.select, addPokemon];
    },
    onDelete: (state, action) => {
      const deletePokemon = state.select.filter(
        (el) => el.id !== action.payload
      );
      state.select = deletePokemon;
    },
  },
});
export const { onAdd, onDelete } = pokemonSlice.actions;
export default pokemonSlice.reducer;
