import { AppProvider } from "@shopify/polaris"
import Dashboard from "./components/dashboard";
import Footer from "./components/global/Footer";
import ChatExperts from "./components/ChatExperts";

const App = () => {
  return (
    <AppProvider>
      <ChatExperts/>
      <Dashboard/>
      <Footer/>
    </AppProvider>
  )
}

export default App