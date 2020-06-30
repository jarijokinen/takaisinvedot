import { useCollection } from '@nandorojo/swr-firestore';
import { firestore } from 'firebase';
import { formatDate } from '../utils/formatDate';

import * as Styled from './RecallList.styled';

export interface IRecallItem {
  id?: string;
  title?: string;
  url?: string;
  date?: firestore.Timestamp;
  source?: string;
}

const RecallList: React.FC = () => {
  const { data, error } = useCollection('recalls', {
    orderBy: ['date', 'desc'],
    limit: 30
  });

  if (error) return <div>Virhe tietoja ladatessa...</div>;
  if (!data) return <div>Ladataan...</div>;

  return (
    <Styled.RecallList>
      {data.map((item: IRecallItem) => (
        <Styled.Item key={item.id}>
          <Styled.ItemDate>{formatDate(item.date.toDate())}</Styled.ItemDate>
          <Styled.ItemLink href={item.url}>{item.title}</Styled.ItemLink>
          <Styled.ItemSource>{item.source}</Styled.ItemSource>
        </Styled.Item>
      ))}
    </Styled.RecallList>
  );
};

export default RecallList;
