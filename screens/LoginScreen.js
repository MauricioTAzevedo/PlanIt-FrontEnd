import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.topSpace} />

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Entre com o seu e-mail e senha</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.inputPassword, { flex: 1 }]}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topSpace: {
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
    marginTop: -50,
    minHeight: 450,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeText: {
    fontSize: 24,
    color: '#888',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20, 
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  formContainer: {
    marginTop: 20, 
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 30,
  },
  inputPassword: {
    paddingVertical: 10,
    fontSize: 16,
  },
  forgotPassword: {
    color: '#FF0080',
    fontSize: 14,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#FF0080',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
