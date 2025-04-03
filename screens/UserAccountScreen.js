import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const UserAccountScreen = () => {
  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Conta</Text>
      <Image 
          source={require('../assets/Womam.png')}
          style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <TextLabelInput label="Nome:" value="Going crazy" editable={isEditable} />
        <TextLabelInput label="E-mail:" value="Bem melhor que C" editable={false} />
        <TextLabelInput label="CPF:" value="VS CODE MELHOR QUE COMMUNITY" editable={isEditable} />
        <TextLabelInput label="Telefone:" value="Call a ambulance" editable={isEditable} />
        <TextLabelInput label="Profissão:" value="ambulancer" editable={isEditable} />
        <TouchableOpacity style={styles.editIcon} onPress={() => setIsEditable(true)}>
          <Icon name="edit" size={18} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TextLabelInput = ({ label, value, editable }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput 
      style={styles.input} 
      value={value} 
      editable={editable} 
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 40,
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative', 
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default UserAccountScreen;
