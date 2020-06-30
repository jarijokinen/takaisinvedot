import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecallList from '../components/RecallList';

const Home: React.FC = () => (
  <div className="layout">
    <Helmet>
      <html lang="fi" />
      <title>Takaisinvedot.fi</title>
    </Helmet>
    <Header />
    <RecallList />
    <Footer />
  </div>
);

export default Home;
