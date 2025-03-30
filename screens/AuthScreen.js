import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

export default function AuthScreen() {
  const [modalVisible, setModalVisible] = useState(true);

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
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Faça login ou cadastre-se</Text>
            <Text style={styles.modalSubtitle}>
              Selecione seu método preferido para continuar configurando sua conta
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Continuar com e-mail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonText}>Continuar com telefone</Text>
            </TouchableOpacity>

            {/* Contêiner para os botões de redes sociais */}
            <View style={styles.socialLoginContainer}>
              {/* Botão Google */}
              <TouchableOpacity style={[styles.socialButton, styles.leftSocialButton]}>
                <Image
                  source={require('../assets/google.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>

              {/* Botão Apple */}
              <TouchableOpacity style={[styles.socialButton, styles.rightSocialButton]}>
                <Image
                  source={require('../assets/appleicon.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
            </View>

            {/* Texto abaixo dos botões sociais */}
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
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#797979',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  /* Estilos para os botões de redes sociais */
  socialLoginContainer: {
    width: '100%', // Container ocupa toda a largura do modalContent
    flexDirection: 'row',
    marginTop: 10,
  },
  socialButton: {
    flex: 1, // Cada botão ocupa metade do espaço do container
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#797979',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  leftSocialButton: {
    marginRight: 5, // Espaço entre o botão da esquerda e o da direita
  },
  rightSocialButton: {
    marginLeft: 5, // Espaço entre o botão da direita e o da esquerda
  },
  socialIcon: {
    width: 140,
    height: 24,
    resizeMode: 'contain',
  },
  /* Estilos para o texto de privacidade */
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
});

