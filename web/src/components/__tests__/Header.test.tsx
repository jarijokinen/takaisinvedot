import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
