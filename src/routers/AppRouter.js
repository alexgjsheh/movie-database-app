// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavorites from "../pages/PageFavorites";
import PageSingle from "../pages/PageSingle";
import PageNotFound from "../pages/PageNotFound";
import "../components/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRouter() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" exact element={<PageHome />} />
                        <Route path="/about" element={<PageAbout />} />
                        <Route path="/favorites" element={<PageFavorites />} />
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

// camel case prop names
// props that pass functions use onclick, actual function name uses the word handle

// import "../components/App.css";

// // Router Components
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Components
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // Pages
// import PageHome from "../pages/PageHome";
// import PageAbout from "../pages/PageAbout";
// import PageFavorites from "../pages/PageFavorites";
// import PageSingle from "../pages/PageSingle";

// function AppRouter() {
//     return (
//         <BrowserRouter>
//             <div className="wrapper">
//                 <Navbar />
//                 <main>
// <Routes>
//     <Route path="/" exact element={<PageHome />} />
//     <Route path="/about" exact element={<PageAbout />} />
//     <Route
//         path="/favorites"
//         exact
//         element={<PageFavorites />}
//     />
//     <Route path="/single" exact element={<PageSingle />} />
// </Routes>
//                 </main>
//                 <Footer />
//             </div>
//         </BrowserRouter>
//     );
// }

// export default AppRouter;
