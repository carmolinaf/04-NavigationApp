// Tab1Screen.tsx
import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const Tab1Screen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Pantalla Inicio1 */}
      <View style={styles.card}>
        <Text style={styles.title}>¿Qué es la capacidad física de trabajo?</Text>
        <Text style={styles.content}>
          Se refiere a la capacidad de realizar alguna actividad física con un rendimiento óptimo sin afectar la salud. 
          Se conoce como "Capacidad Física de Trabajo" (CFT) y depende del fitness cardiorrespiratorio.
        </Text>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      </View>
      {/* Pantalla Inicio2 */}
      <View style={styles.card}>
        <Text style={styles.title}>Importancia del CFT</Text>
        <Text style={styles.content}>
          Una baja CFT se relaciona con un mayor riesgo de desarrollar enfermedades crónicas no transmisibles (ECNT, diabetes, hipertensión, insulino resistencia, otras) y menor expectativa de vida si estas están presentes. 
          Una Baja CFT aumenta el riesgo de enfermedades coronarias (EC), riesgo de hospitalización por COVID y riesgo de mortalidad por todas las causas. 
          Un buen valor de CFT es un indicador de salud y protector de ECNT, EC y hospitalización por COVID.
        </Text>
      </View>
      {/* Pantalla Inicio3 */}
      <View style={styles.card}>
        <Text style={styles.title}>¿Estás listo para ponerte a prueba?</Text>
        <Button title="Comenzar" onPress={() => {}} color="#4CAF50" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default Tab1Screen;
