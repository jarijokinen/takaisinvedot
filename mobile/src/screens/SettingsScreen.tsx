import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

const SettingsScreen: React.FC = () => {
  const [enableNotifications, setEnableNotifications] = useState<boolean>(
    false
  );

  useEffect(() => {
    loadEnableNotifications();
  }, []);

  const toggleEnableNotifications = () => {
    const val = !enableNotifications;

    AsyncStorage.setItem(
      '@enableNotifications',
      val ? 'true' : 'false'
    ).then(() => setEnableNotifications(val));

    if (val) {
      messaging()
        .subscribeToTopic('recalls')
        .then(() => console.log('Subscribed to recalls'));
    } else {
      messaging()
        .unsubscribeFromTopic('recalls')
        .then(() => console.log('Unsubscribed from recalls'));
    }
  };

  const loadEnableNotifications = () => {
    AsyncStorage.getItem('@enableNotifications').then((val) =>
      setEnableNotifications(val === 'true')
    );
  };

  if (enableNotifications === null) {
    return <></>;
  }

  return (
    <View>
      <ListItem
        title="Aktivoi ilmoitukset"
        switch={{
          value: enableNotifications,
          onValueChange: toggleEnableNotifications
        }}
      />
    </View>
  );
};

export default SettingsScreen;
