import * as Styled from './Header.styled';

const Header: React.FC = () => (
  <Styled.Header>
    <Styled.Brand>Takaisinvedot.fi</Styled.Brand>
    <Styled.Slogan>
      Viallisten tuotteiden ja elintarvikkeiden takaisinvedot koottuna yhdelle
      sivulle
    </Styled.Slogan>
  </Styled.Header>
);

export default Header;
