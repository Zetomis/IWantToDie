import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getRecipes } from "../redux/features/recipesSlice";
import { Link } from "react-router-dom";

const Main = () => {
    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipes.recipes);

    useEffect(() => {
        dispatch(getRecipes());
    }, []);

    return (
        <div>
            <h1 className="text-center font-extrabold text-2xl py-10">
                All Recipes
            </h1>
            <div className="flex flex-col gap-y-4">
                {recipes &&
                    recipes.map((recipe) => (
                        <Link
                            to={`/recipe/${recipe.id}`}
                            key={recipe.id}
                            className="rounded border border-black px-6 py-3"
                        >
                            <h1 className="font-semibold text-center text-xl">
                                {recipe.title}
                            </h1>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Main;
