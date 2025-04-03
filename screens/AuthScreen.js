import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function AuthScreen() {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com',
    androidClientId: '776698076336-iaad3o4adm40u2assbmkpl8e0kjvqghq.apps.googleusercontent.com',
    iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
    webClientId: '776698076336-7mtm2klaq1ptps79ve9gj0kpftf3hh8i.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Token de acesso do Google:', authentication?.accessToken);
      setModalVisible(false);
      navigation.navigate('Home');
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Faça login ou cadastre-se</Text>
            <Text style={styles.modalSubtitle}>
              Selecione seu método preferido para continuar configurando sua conta
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('RegisterScreen') }}>
              <Text style={styles.buttonText}>Continuar com e-mail</Text>
            </TouchableOpacity>

            {/* Adicionando o 'ou' entre os botões */}
            <Text style={styles.orText}>ou</Text>

            <View style={styles.socialLoginContainer}>
              <TouchableOpacity
                style={[styles.socialButton, styles.leftSocialButton]}
                onPress={() => promptAsync()}
                disabled={!request}
              >
                <Image
                  source={require('../assets/google.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.privacyText}>
              Se você estiver criando uma nova conta,{' '}
              <Text style={styles.linkText}>Termos e Condições</Text> e{' '}
              <Text style={styles.linkText}>Política de Privacidade</Text> serão aplicados.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'hsla(0, 0.00%, 0.00%, 0.50)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    height: '50%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeText: {
    fontSize: 24,
    color: '#888',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFEC00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#797979',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  leftSocialButton: {
    marginRight: 5,
  },
  socialIcon: {
    width: 140,
    height: 24,
    resizeMode: 'contain',
  },
  privacyText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
  },
  linkText: {
    fontWeight: 'bold',
    color: '#000',
  },
  orText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center',
  },
});
