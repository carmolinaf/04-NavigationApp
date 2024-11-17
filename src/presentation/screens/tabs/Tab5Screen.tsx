// Tab5Screen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab5Screen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cuenta */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Cuenta</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.optionText}>Información personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="black" />
          <Text style={styles.optionText}>Cambiar contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="log-out-outline" size={24} color="black" />
          <Text style={styles.optionText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Preferencias */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Preferencias</Text>
        <View style={styles.optionContainer}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.optionText}>Notificaciones</Text>
          <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} style={styles.switch} />
        </View>
        <View style={styles.optionContainer}>
          <Ionicons name="moon-outline" size={24} color="black" />
          <Text style={styles.optionText}>Modo oscuro</Text>
          <Switch value={darkModeEnabled} onValueChange={setDarkModeEnabled} style={styles.switch} />
        </View>
      </View>

      {/* Privacidad */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Privacidad</Text>
        <View style={styles.optionContainer}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.optionText}>Acceso a ubicación</Text>
          <Switch value={locationEnabled} onValueChange={setLocationEnabled} style={styles.switch} />
        </View>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="shield-checkmark-outline" size={24} color="black" />
          <Text style={styles.optionText}>Política de privacidad</Text>
        </TouchableOpacity>
      </View>

      {/* Soporte */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Soporte</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="help-circle-outline" size={24} color="black" />
          <Text style={styles.optionText}>Centro de ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <Text style={styles.optionText}>Contáctanos</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de eliminar cuenta */}
      <View style={styles.sectionContainer}>
        <Button title="Eliminar cuenta" color="red" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  switch: {
    marginLeft: 'auto',
  },
});

export default Tab5Screen;