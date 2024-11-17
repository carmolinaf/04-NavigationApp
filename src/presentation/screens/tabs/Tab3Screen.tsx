// Tab3Screen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab3Screen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Histórico de CFT */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Histórico de CFT</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="analytics-outline" size={24} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>CFT</Text>
            <Text style={styles.dateText}>01/01/24</Text>
          </View>
          <Text style={styles.cftValue}>65%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="analytics-outline" size={24} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>CFT</Text>
            <Text style={styles.dateText}>15/02/24</Text>
          </View>
          <Text style={styles.cftValue}>70%</Text>
        </TouchableOpacity>
      </View>

      {/* Dashboard Resumen */}
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Dashboard Resumen</Text>
        <TextInput placeholder="EJE Y: Valor CFT" style={styles.input} />
        <TextInput placeholder="EJE X: Fecha" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
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
  dateText: {
    fontSize: 16,
    color: '#777',
  },
  cftValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Tab3Screen;
