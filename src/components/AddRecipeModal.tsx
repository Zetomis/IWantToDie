import { useState } from "react";
import InputField from "./InputField";
import { useAppDispatch } from "../redux/hooks";
import { addRecipe } from "../redux/features/recipesSlice";

const AddRecipeModal = ({
    isAddRecipeModal,
    setisAddRecipeModal,
}: {
    isAddRecipeModal: boolean;
    setisAddRecipeModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [ingredientsInput, setIngredientsInput] = useState<string>("");
    const [recipeTitle, setRecipeTitle] = useState<string>("");
    const [recipeIngredients, setRecipeIngredients] = useState<string[]>([]);
    const [recipeServings, setRecipeServings] = useState<string>("1");
    const [recipeInstructions, setRecipeInstructions] = useState<string>("");

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newRecipe = {
            title: recipeTitle,
            ingredients: recipeIngredients,
            servings: recipeServings,
            instructions: recipeInstructions,
            id: crypto.randomUUID(),
        };
        dispatch(addRecipe({ recipe: newRecipe }));
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="fixed inset-0 bg-modal-bg flex justify-center items-center">
                <div className="fixed top-3 right-6">
                    <button
                        className="text-white text-2xl"
                        onClick={() => setisAddRecipeModal(false)}
                    >
                        <i className="bx bx-x"></i>
                    </button>
                </div>
                <div className="rounded border border-black px-10 py-5 bg-slate-300 w-full max-w-lg">
                    <h1 className="font-extrabold text-center text-xl">
                        Add Recipe
                    </h1>
                    <InputField
                        id="title"
                        labelText="Enter Recipe's Title"
                        placeholder="Enter Recipe's Title..."
                        state={recipeTitle}
                        setState={setRecipeTitle}
                    />
                    {recipeIngredients.map((ingre, id) => (
                        <div className="flex items-center gap-x-2" key={id}>
                            <div className="w-1 h-1 rounded-full bg-black"></div>
                            <h1 className="font-semibold text-sm">{ingre}</h1>
                        </div>
                    ))}
                    <InputField
                        id="ingredient"
                        labelText="Add Recipe's Ingredient"
                        placeholder="Enter Recipe's Ingredient..."
                        state={ingredientsInput}
                        setState={setIngredientsInput}
                    />
                    <button
                        className="rounded border border-black px-4 py-2 font-semibold"
                        onClick={() => {
                            if (ingredientsInput) {
                                setRecipeIngredients([
                                    ...recipeIngredients,
                                    ingredientsInput,
                                ]);
                                setIngredientsInput("");
                            }
                        }}
                    >
                        Add Ingredient
                    </button>
                    <div className="my-4">
                        <label
                            htmlFor="servings"
                            className="font-semibold text-sm"
                        >
                            Servings Size?
                        </label>
                        <select
                            className="block w-full border border-black rounded px-4 py-2 bg-transparent"
                            id="servings"
                            value={recipeServings}
                            onChange={(e) => setRecipeServings(e.target.value)}
                        >
                            <option value="1" className="bg-slate-300">
                                1
                            </option>
                            <option value="2" className="bg-slate-300">
                                2
                            </option>
                            <option value="3" className="bg-slate-300">
                                3
                            </option>
                            <option value="4" className="bg-slate-300">
                                4
                            </option>
                        </select>
                    </div>
                    <div className="my-4">
                        <label
                            htmlFor="instructions"
                            className="font-semibold text-sm"
                        >
                            Servings Size?
                        </label>
                        <textarea
                            name="instruction"
                            id="instructions"
                            className="block w-full border rounded border-black px-4 py-2 bg-transparent focus:outline-none"
                            required
                            onChange={(e) =>
                                setRecipeInstructions(e.target.value)
                            }
                            value={recipeInstructions}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full border border-black rounded px-4 py-2 font-semibold"
                    >
                        Add Recipe
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddRecipeModal;
