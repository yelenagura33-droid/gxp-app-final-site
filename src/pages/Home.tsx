import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Audiences from "../sections/Audiences";
import Services from "../sections/Services";
import Regulations from "../sections/Regulations";
import Training from "../sections/Training";
import Templates from "../sections/Templates";
import Telegram from "../sections/Telegram";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Audiences />
        <Services />
        <Regulations />
        <Training />
        <Templates />
        <Telegram />
      </main>
      <Footer />
    </div>
  );
}
