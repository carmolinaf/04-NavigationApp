// Tab4Screen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet, Modal, Switch, TouchableOpacity } from 'react-native';

const Tab4Screen = () => {
  const [sexo, setSexo] = useState('');
  const [tieneEnfermedad, setTieneEnfermedad] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Perfil General */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Perfil</Text>
        <TextInput placeholder="Fecha de nacimiento" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <Text>Sexo</Text>
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
            <Text style={styles.title}>Mujer</Text>
            <TextInput placeholder="Fecha de última regla (FUR)" style={styles.input} />
            <Text>Métodos anticonceptivos</Text>
            {/* Puedes agregar aquí Checkboxes para los métodos anticonceptivos */}
            <TextInput placeholder="Indicar nombre del anticonceptivo" style={styles.input} />
          </View>
        )}
      </View>

      {/* Enfermedades */}
      <View style={styles.sectionContainer}>
        <Text>Enfermedad</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>¿Presenta alguna?</Text>
          <Switch value={tieneEnfermedad} onValueChange={setTieneEnfermedad} />
        </View>
        {tieneEnfermedad && (
          <View style={styles.sectionContainer}>
            <Text style={styles.title}>Enfermedades</Text>
            {/* Puedes agregar aquí Checkboxes para las enfermedades */}
            <TextInput placeholder="Nombre de la(s) enfermedad(es)" style={styles.input} />
          </View>
        )}
      </View>

      {/* Medidas */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Medidas</Text>
        <TextInput placeholder="Peso (Kg)" style={styles.input} />
        <TextInput placeholder="Estatura (Cm)" style={styles.input} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Perímetro cintura</Text>
          <Button title="ℹ️" onPress={() => setModalVisible(true)} />
        </View>
        <TextInput placeholder="Cm" style={styles.input} />
      </View>

      {/* Modal de Información de Medidas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>¿Cómo tomar las medidas?</Text>
            <Text>Este es un video explicativo en donde se dan las indicaciones para tomar las medidas de forma más precisa.</Text>
            <Button title="OK" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <Button title="Guardar" onPress={() => {}} />
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Tab4Screen;
