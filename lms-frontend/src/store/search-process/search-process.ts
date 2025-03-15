import { createSlice} from "@reduxjs/toolkit";
import { SliceHeadersNamespace } from "../../mocks/sliceHeaders";
import {SearchResults} from "../../types/state";
import { getSearchResult } from "../api-actions";

const initialState: SearchResults = {
  results: [],
  isResultsLoading: false,
  query:""
}

export const searchProcess = createSlice({
  name: SliceHeadersNamespace.SearchResults,
  initialState,
  reducers: {
    changeQueryAction : (state, action : {payload:string}) => {
      state.query = action.payload;
    },
  },
  extraReducers(builder){
    builder
    .addCase(getSearchResult.fulfilled, (state, action) => {
      state.isResultsLoading = false;
      state.results = action.payload;
    })
    .addCase(getSearchResult.pending,(state) => {
      state.isResultsLoading = true;
    })
    .addCase(getSearchResult.rejected,(state) => {
      state.isResultsLoading = false;
      state.results = [];
    })
  }})

  export const {changeQueryAction} = searchProcess.actions;