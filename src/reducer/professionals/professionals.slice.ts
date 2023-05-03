import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfessionalStructure } from "../../models/professional";

export type ProfessionalStateStructure = {
  filterProfessionals: ProfessionalStructure[];
  details: ProfessionalStructure;
  idCreated: string;
};

const initialState: ProfessionalStateStructure = {
  filterProfessionals: [],
  details: {} as ProfessionalStructure,
  idCreated: "",
};

export const professionalSlice = createSlice({
  name: "professional",
  initialState,
  reducers: {
    loadProfessionals(
      state: ProfessionalStateStructure,
      action: PayloadAction<ProfessionalStructure[]>
    ) {
      state.filterProfessionals = action.payload;
    },
    detailProfessionals(
      state: ProfessionalStateStructure,
      action: PayloadAction<ProfessionalStructure>
    ) {
      state.details = action.payload;
    },
    loadIdCreated(
      state: ProfessionalStateStructure,
      action: PayloadAction<string>
    ) {
      state.idCreated = action.payload;
    },
  },
});

export const { loadProfessionals, detailProfessionals, loadIdCreated } =
  professionalSlice.actions;

export const professionalReducer = professionalSlice.reducer;
