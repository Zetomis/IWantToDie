import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface RecipeInterface {
    title: string;
    ingredients: string[];
    servings: string;
    instructions: string;
    id: string;
}

interface initialValue {
    recipes: RecipeInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: initialValue = {
    recipes: [],
    loading: false,
    error: null,
};

export const getRecipes = createAsyncThunk("recipes/getRecipes", async () => {
    const response = await axios.get("http://localhost:8000/recipes");
    return response.data;
});

export const addRecipe = createAsyncThunk(
    "recipes/addRecipe",
    async ({ recipe }: { recipe: RecipeInterface }) => {
        const response = await axios.post(
            "http://localhost:8000/recipes",
            recipe
        );
        return response.data;
    }
);

export const searchRecipe = createAsyncThunk(
    "recipes/searchRecipe",
    async ({ title }: { title: string }) => {
        const response = await axios.get("http://localhost:8000/recipes");
        const filteredData = response.data.filter((recipe: RecipeInterface) =>
            recipe.title.includes(title)
        );
        return filteredData;
    }
);

export const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        filterRecipes: (state, action: PayloadAction<{ title: string }>) => {
            state.recipes = state.recipes.filter((recipe) =>
                recipe.title.includes(action.payload.title)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addRecipe.fulfilled, (state, action) => {
                state.recipes.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.recipes = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getRecipes.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRecipes.rejected, (state) => {
                state.loading = false;
                state.error = "Something went wrong";
            })
            .addCase(searchRecipe.fulfilled, (state, action) => {
                state.recipes = action.payload;
                state.loading = false;
                state.error = null;
            });
    },
});

export const { filterRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
