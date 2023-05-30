import AddRecipeModal from "../components/AddRecipeModal";
import Main from "../components/Main";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
    filterRecipes,
    getRecipes,
    searchRecipe,
} from "../redux/features/recipesSlice";

const Home = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [isAddRecipeModal, setisAddRecipeModal] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipes.recipes);

    useEffect(() => {
        dispatch(searchRecipe({ title: searchInput }));
    }, [searchInput]);

    return (
        <div>
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
            <Main />
            <button
                onClick={() => setisAddRecipeModal(true)}
                className="w-full rounded border border-black px-4 py-2 font-semibold my-10"
            >
                Add Recipe
            </button>
            {isAddRecipeModal && (
                <AddRecipeModal
                    isAddRecipeModal={isAddRecipeModal}
                    setisAddRecipeModal={setisAddRecipeModal}
                />
            )}
        </div>
    );
};

export default Home;
