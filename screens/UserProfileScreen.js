import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image 
            source={require('../assets/Womam.png')}
            style={styles.profileImage} 
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.userName}>Iriana Darua</Text>
        </View>
        <View style={styles.right}>
        </View>
      </View>

      <View style={styles.menu}>
      <MenuItem icon="user" text="Conta" onPress={() => {navigation.navigate('AccountProfile')}} />
      <MenuItem icon="settings" text="Configurações" onPress={() => {}} />
        <MenuItem icon="share-2" text="Compartilhar Agenda" onPress={() => {}} />
        <MenuItem icon="credit-card" text="Métodos de Pagamento" onPress={() => {}} />
        <MenuItem icon="log-out" text="Logout" color="red" onPress={() => {}} />
      </View>

      <View style={styles.footer}>
        <FooterItem icon="briefcase" onPress={() => navigation.navigate('Gifts')} />
        <FooterItem icon="calendar" onPress={() => navigation.navigate('Calendar')} />
        
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="#fff" />
        </TouchableOpacity>
        
        <FooterItem icon="users" onPress={() => navigation.navigate('Friends')} />
        <FooterItem icon="user" onPress={() => navigation.navigate('Profile')} />
      </View>
    </View>
  );
};

const MenuItem = ({ icon, text, onPress, color = "#000" }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={20} color="#7D3C98" />
    </View>
    <Text style={[styles.menuText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

const FooterItem = ({ icon, onPress }) => (
  <TouchableOpacity style={styles.footerItem} onPress={onPress}>
    <Icon name={icon} size={24} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,     
    marginBottom: 30,  
    paddingHorizontal: 20,
  },
  left: {
    width: 80,
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    width: 80, 
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30, 
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#EAE2F8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  footerItem: {
    padding: 10,
  },
  homeButton: {
    backgroundColor: '#FF007F',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default UserProfileScreen;
