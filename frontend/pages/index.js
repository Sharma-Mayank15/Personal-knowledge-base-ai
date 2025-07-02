// Entry point for the app
import HeroSection from "../components/Herosection";
import UploadSection from "../components/UploadSection";
import ChatInput from "../components/ChatInput";
import SearchResults from "../components/SearchResults";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <UploadSection />
      <ChatInput />
      <SearchResults />
    </Layout>
  );
}
