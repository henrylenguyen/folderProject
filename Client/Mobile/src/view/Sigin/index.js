import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {updateSiginStatus} from '../../redux/slices/authenSlice';

export default function Sigin({navigation}) {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(updateSiginStatus(true));
  };
  const onGoHome = () => {
    navigation.navigate('Scan');
  };
  return (
    <View>
      <Text>Sigin</Text>
      <Button onPress={onPress} title="sigin" />
      <Button onPress={onGoHome} title="Go Home" />
    </View>
  );
}
