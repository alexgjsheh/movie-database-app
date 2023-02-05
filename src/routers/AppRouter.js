// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFavourites";
import PageSingle from "../pages/PageSingle";
import PageNotFound from "../pages/PageNotFound";
import "../components/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import backgroundImg from "../images/starBackground.png";

function AppRouter() {
    return (
        <BrowserRouter basename={"/filmspersecond"}>
            <div
                className="App"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <Header />
                <main>
                    <Routes>
                        <Route path="/" exact element={<PageHome />} />
                        <Route path="/about" element={<PageAbout />} />
                        <Route
                            path="/favourites"
                            element={<PageFavourites />}
                        />
                        <Route
                            path="/single-movie/:id"
                            element={<PageSingle />}
                        />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
