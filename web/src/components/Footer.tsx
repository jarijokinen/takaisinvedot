import * as Styled from './Footer.styled';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Styled.Line>Palvelun toteutus: Jari Jokinen.</Styled.Line>{' '}
    <Styled.Line>
      Lähdekoodi löytyy{' '}
      <Styled.Link href="https://github.com/jarijokinen/takaisinvedot">
        GitHubista
      </Styled.Link>
      .
    </Styled.Line>
  </Styled.Footer>
);

export default Footer;
