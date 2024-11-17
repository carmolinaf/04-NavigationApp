// Tab1Screen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Sección de Bienvenida */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Bienvenido</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="information-circle-outline" size={24} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Información general sobre la aplicación</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sección de Funcionalidades */}
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Funcionalidades</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="stats-chart-outline" size={24} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Revisión de estadísticas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="heart-outline" size={24} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Monitoreo de frecuencia cardíaca</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sección de Prueba de CFT */}
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Prueba de CFT</Text>
      
          <Ionicons name="play-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Comenzar</Text>

      </View>

      {/* Sección de Ajustes Rápidos */}
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Ajustes Rápidos</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="cog-outline" size={24} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Configuración de la aplicación</Text>
          </View>
        </TouchableOpacity>
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
    paddingVertical: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  optionText: {
    fontSize: 18,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
});

export default Tab1Screen;
