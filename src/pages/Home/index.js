import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const [value, setValue] = useState('');
  const {navigate} = useNavigation();

  const handlePress = useCallback(() => {
    navigate('Repositories', {username: value});
  }, [navigate, value]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Usuário Github"
        placeholderTextColor="#666360"
        value={value}
        onChangeText={(v) => setValue(v)}
      />

      <TouchableOpacity style={styles.buttom} onPress={handlePress}>
        <Text style={styles.buttomText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
