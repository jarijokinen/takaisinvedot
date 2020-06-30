import { Helmet } from 'react-helmet';
import * as Styled from './index.styled';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecallList from '../components/RecallList';

const Home: React.FC = () => (
  <Styled.Layout>
    <Helmet>
      <html lang="fi" />
      <title>Takaisinvedot.fi</title>
    </Helmet>
    <Header />
    <RecallList />
    <Footer />
  </Styled.Layout>
);

export default Home;
