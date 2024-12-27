import { AppProvider } from "@shopify/polaris"
import Dashboard from "./components/dashboard";
import Footer from "./components/global/Footer";

const App = () => {
  return (
    <AppProvider>
      <Dashboard/>
      <Footer/>
    </AppProvider>
  )
}

export default App