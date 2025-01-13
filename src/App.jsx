import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import Dashboard from "./components/dashboard";
import Footer from "./components/global/Footer";
import ChatExperts from "./components/ChatExperts";
import Plans from "./components/plans";
import FAQ from "./components/faq"
import Recommendations from "./components/recommendations";


const App = () => {
  return (
    <AppProvider>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Router>
          <ChatExperts />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;
