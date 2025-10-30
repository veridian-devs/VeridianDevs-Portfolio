import { Route, Routes } from "react-router";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import App from "../App";

export default function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
    );

}
