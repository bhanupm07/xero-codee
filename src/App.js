import ComparisonPage from "./components/ComparisonPage/ComparisonPage";
import FeaturesCard from "./components/FeatureCard/FeaturesCard";
import FirstPage from "./components/FirstPage/FirstPage";
import Footer from "./components/Footer/Footer";
import Logos from "./components/LogoSection/Logos";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import SecondPage from "./components/SecondPage/SecondPage";
import Stories from "./components/Stories/Stories";
import XeroCodeeWay from "./components/XeroCodeeWay/XeroCodeeWay";
import "./index.css";

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <FirstPage />
      <Logos />
      <SecondPage />
      <ComparisonPage />
      <FeaturesCard />
      <XeroCodeeWay />
      <Stories />
      <Newsletter />
      <Footer />
    </div>
  );
}
