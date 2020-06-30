import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
