import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { firestore } from 'firebase';
import { useCollection } from '@nandorojo/swr-firestore';

import RecallList, { IRecallItem } from '../RecallList';

import { formatDate } from '../../utils/formatDate';

jest.mock('@nandorojo/swr-firestore');

const buildRecallItem = (id: number, overrides?: IRecallItem): IRecallItem => ({
  id: 'abc' + id,
  title: 'Example Title ' + id,
  url: 'http://example.com/example-path-' + id,
  date: firestore.Timestamp.fromDate(new Date(2020, 5, 20)),
  source: 'Example Source ' + id,
  ...overrides
});

const buildData = (count: number): Array<IRecallItem> => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(buildRecallItem(i + 1));
  }
  return arr;
};

let data = [];
let error = false;

describe('RecallList', () => {
  beforeAll(() => {
    data = buildData(50);
    error = false;
    (useCollection as jest.Mock).mockReturnValue({ data, error });
  });

  it('renders correctly', () => {
    const { asFragment } = render(<RecallList />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('item', () => {
    it('has correct title', () => {
      const { getByText } = render(<RecallList />);
      expect(getByText(data[0].title)).toBeInTheDocument();
    });

    it('has correct url', () => {
      const { getByText } = render(<RecallList />);
      expect(getByText(data[0].title)).toHaveAttribute('href', data[0].url);
    });

    it('has correct date', () => {
      const { container } = render(<RecallList />);
      expect(container.firstChild).toHaveTextContent(
        formatDate(data[0].date.toDate())
      );
    });

    it('has correct source', () => {
      const { container } = render(<RecallList />);
      expect(container.firstChild).toHaveTextContent(data[0].source);
    });
  });

  describe('with error', () => {
    beforeAll(() => {
      data = [];
      error = true;
      (useCollection as jest.Mock).mockReturnValue({ data, error });
    });

    it('renders error message', () => {
      const { getByText } = render(<RecallList />);
      expect(getByText('Virhe tietoja ladatessa...')).toBeInTheDocument();
    });
  });

  describe('with non-existing data', () => {
    beforeAll(() => {
      data = null;
      error = false;
      (useCollection as jest.Mock).mockReturnValue({ data, error });
    });

    it('renders loading message', () => {
      const { getByText } = render(<RecallList />);
      expect(getByText('Ladataan...')).toBeInTheDocument();
    });
  });
});
