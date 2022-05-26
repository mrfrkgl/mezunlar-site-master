import TopBar from "./components/topbar/topbar.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Home from "./pages/Home/Home.jsx";
import Single from "./pages/single/Single.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Haberler from "./pages/haberler/Haberler.jsx";
import Kadro from "./pages/idari-kadro/Kadro.jsx";
import Iletisim from "./pages/iletisim/Iletisim.jsx";
import Galeri from "./pages/galeri/Galeri.jsx";
import Mezunlar from "./pages/mezunlar/Mezunlar.jsx";

function App() {
    const user = false;
    return (
        <Router>
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route
                    path="/register"
                    element={user ? <Home /> : <Register />}
                />
            </Routes>
            <Routes>
                <Route path="/login" element={user ? <Home /> : <Login />} />
            </Routes>
            <Routes>
                <Route
                    path="/settings"
                    element={user ? <Settings /> : <Home />}
                />
            </Routes>
            <Routes>
                <Route path="/post/:postId" element={<Single />} />
            </Routes>
            <Routes>
                <Route path="/haberler" element={<Haberler />} />
            </Routes>
            <Routes>
                <Route path="/kadro" element={<Kadro />} />
            </Routes>
            <Routes>
                <Route path="/iletisim" element={<Iletisim />} />
            </Routes>
            <Routes>
                <Route path="/galeri" element={<Galeri />} />
            </Routes>
            <Routes>
                <Route path="/mezunlar" element={<Mezunlar />} />
            </Routes>
        </Router>
    );
}

export default App;
