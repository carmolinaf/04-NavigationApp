// Tab4Screen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab4Screen = () => {
  const [sexo, setSexo] = useState('');
  const [tieneEnfermedad, setTieneEnfermedad] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Perfil General */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Perfil</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="person-outline" size={24} color="black" />
          <TextInput placeholder="Fecha de nacimiento" style={styles.input} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <TextInput placeholder="Email" style={styles.input} />
        </TouchableOpacity>
        <Text style={styles.subtitle}>Sexo</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity style={styles.radioButton} onPress={() => setSexo('hombre')}>
            <View style={[styles.radioCircle, sexo === 'hombre' && styles.selectedRadioCircle]} />
            <Text style={styles.radioLabel}>Hombre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioButton} onPress={() => setSexo('mujer')}>
            <View style={[styles.radioCircle, sexo === 'mujer' && styles.selectedRadioCircle]} />
            <Text style={styles.radioLabel}>Mujer</Text>
          </TouchableOpacity>
        </View>
        {sexo.toLowerCase() === 'mujer' && (
          <View style={styles.sectionContainer}>
            <Text style={styles.subtitle}>Mujer</Text>
            <TouchableOpacity style={styles.optionContainer}>
              <Ionicons name="calendar-outline" size={24} color="black" />
              <TextInput placeholder="Fecha de última regla (FUR)" style={styles.input} />
            </TouchableOpacity>
            <Text style={styles.subtitle}>Métodos anticonceptivos</Text>
            <TextInput placeholder="Indicar nombre del anticonceptivo" style={styles.input} />
          </View>
        )}
      </View>

      {/* Enfermedades */}
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Enfermedad</Text>
        <View style={styles.optionContainerSwitch}>
          <Ionicons name="medkit-outline" size={24} color="black" />
          <Text style={styles.optionText}>¿Presenta alguna?</Text>
          <Switch value={tieneEnfermedad} onValueChange={setTieneEnfermedad} style={styles.switch} />
        </View>
        {tieneEnfermedad && (
          <View style={styles.sectionContainer}>
            <Text style={styles.subtitle}>Enfermedades</Text>
            <TextInput placeholder="Nombre de la(s) enfermedad(es)" style={styles.input} />
          </View>
        )}
      </View>

      {/* Medidas */}
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Medidas</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="barbell-outline" size={24} color="black" />
          <TextInput placeholder="Peso (Kg)" style={styles.input} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Ionicons name="resize-outline" size={24} color="black" />
          <TextInput placeholder="Estatura (Cm)" style={styles.input} />
        </TouchableOpacity>
        <View style={styles.optionContainerSwitch}>
          <Ionicons name="ruler-outline" size={24} color="black" />
          <Text style={styles.optionText}>Perímetro cintura</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons name="information-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TextInput placeholder="Cm" style={styles.input} />
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
  optionContainerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioCircle: {
    backgroundColor: '#2196F3',
  },
  radioLabel: {
    fontSize: 16,
  },
  switch: {
    marginLeft: 'auto',
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

export default Tab4Screen;
