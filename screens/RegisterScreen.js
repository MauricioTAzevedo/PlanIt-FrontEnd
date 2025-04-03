import React, { useState } from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

export default function CadastroScreen() {
  const navigation = useNavigation();

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Crie sua conta</Text>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
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
            style={styles.passwordInput}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#aaa" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirmar senha"
            secureTextEntry={!showConfirmPassword}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeButton}
          >
            <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#aaa" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginLink}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: '30%',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: '#888',
    marginTop: 60,
    marginBottom: 20,
  },
  formContainer: {
    marginTop: '40%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  eyeButton: {
    padding: 8,
  },
  button: {
    backgroundColor: '#FF0080',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#555',
  },
  loginLink: {
    fontSize: 14,
    color: '#FF0080',
    fontWeight: 'bold',
  },
});
