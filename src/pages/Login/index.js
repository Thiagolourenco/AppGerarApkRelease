import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="******"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSignUp}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.btnTextSignUp}>Cadastra</Text>
      </TouchableOpacity>
    </View>
  );
}
