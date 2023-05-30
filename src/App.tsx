import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

const App = () => {
    return (
        <div className="font-nunito-sans">
            <div className="w-full min-h-screen bg-slate-300 flex justify-center">
                <div className="rounded border border-black px-10 py-5 my-10 w-full max-w-screen-lg">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipe/:id" element={<Recipe />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
