import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Journey from './components/Journey';
import Ventures from './components/Ventures';
import Intelligence from './components/Intelligence';
import Book from './components/Book';
import Speaking from './components/Speaking';
import Insights from './components/Insights';
import Beliefs from './components/Beliefs';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Journey />
        <Ventures />
        <Intelligence />
        <Book />
        <Speaking />
        <Insights />
        <Beliefs />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
