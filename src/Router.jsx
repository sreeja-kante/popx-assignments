import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Profile from "./pages/Profile";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateAccount />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default Router;