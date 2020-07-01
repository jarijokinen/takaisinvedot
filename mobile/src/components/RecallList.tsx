import React, { useEffect, useState } from 'react';
import { FlatList, Linking, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';
import { firestore as firebaseFirestore } from 'firebase';

export interface IRecallItem {
  id: string;
  title: string;
  url: string;
  date: firebaseFirestore.Timestamp;
  source: string;
}

const RecallList: React.FC = () => {
  const [recalls, setRecalls] = useState<Array<IRecallItem> | undefined>([]);

  useEffect(() => {
    firestore()
      .collection('recalls')
      .orderBy('date', 'desc')
      .limit(30)
      .onSnapshot((querySnapshot) => {
        const recallList: Array<IRecallItem> = [];

        querySnapshot.forEach((documentSnapshot) => {
          const data: IRecallItem = documentSnapshot.data() as IRecallItem;
          data.id = documentSnapshot.id;
          recallList.push(data);
        });

        setRecalls(recallList);
      });
  }, []);

  const onPressItem = (item: IRecallItem) => {
    Linking.openURL(item.url);
  };

  const formatDate = (date: Date): string => {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.');
  };

  const itemIcon = (item: IRecallItem) => {
    if (item.source === 'Ruokavirasto') {
      return { name: 'silverware-fork-knife', type: 'material-community' };
    } else {
      if (item.title.match(/Sähköisku/)) {
        return { name: 'flash', type: 'material-community' };
      } else if (item.title.match(/Palo/)) {
        return { name: 'fire', type: 'material-community' };
      } else if (item.title.match(/Puristuminen/)) {
        return { name: 'compress-arrows-alt', type: 'font-awesome-5' };
      } else if (item.title.match(/Kemiallinen/)) {
        return { name: 'chemical-weapon', type: 'material-community' };
      } else {
        return { name: 'warning', type: 'material' };
      }
    }
  };

  return (
    <FlatList
      data={recalls}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressItem(item)}>
          <ListItem
            title={item.title}
            subtitle={item.source + ' - ' + formatDate(item.date.toDate())}
            leftIcon={itemIcon(item)}
            bottomDivider
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default RecallList;
