// Tab2Screen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab2Screen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [currentStage, setCurrentStage] = useState(1);
  const [cft, setCft] = useState(70); // Valor simulado de CFT, puedes ajustarlo para probar

  const handleStart = () => {
    setModalVisible(false);
  };

  const handleNextStage = () => {
    if (cft < 65) {
      Alert.alert('Aviso', 'El CFT no es suficiente para continuar. Mostrando resultados.');
      setCurrentStage(4); // Salta a la pantalla de resultados
    } else {
      setCurrentStage(currentStage + 1);
    }
  };

  const handleFinishTest = () => {
    Alert.alert('Aviso', 'Test finalizado. Mostrando resultados.');
    setCurrentStage(4); // Salta a la pantalla de resultados
  };

  const handleRestartTest = () => {
    setCurrentStage(1);
    setCft(70); // Reiniciar el valor de CFT si es necesario
    setModalVisible(true);
  };

  const handleCancelTest = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Prepárate</Text>
            <Text style={styles.content}>FCR: Recuéstate 5 minutos y registra FCR. Mide tu frecuencia cardíaca en reposo.</Text>
            <Text style={styles.content}>Sube y baja: Sube con pie derecho. Baja con pie derecho. Sigue el ritmo del sonido. Cada sonido es un paso.</Text>
            <Text style={styles.content}>¡Ahora practica!</Text>
            <TouchableOpacity style={styles.button} onPress={handleStart}>
              <Text style={styles.buttonText}>Comenzar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancelTest}>
              <Ionicons name="close-outline" size={24} color="white" />
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {currentStage <= 3 && (
        <ScrollView contentContainerStyle={styles.stageContainer}>
          <Text style={styles.title}>Etapa {currentStage}</Text>
          <Text style={styles.content}>3 minutos de carga. Se debe registrar FC cada minuto.</Text>
          <Text style={styles.content}>FC 1', FC 2', FC 3', FC 1' (Recuperación)</Text>
          <Text style={styles.cftText}>CFT: {cft}%</Text>
          {currentStage < 3 ? (
            <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNextStage}>
              <Ionicons name="arrow-forward-outline" size={24} color="white" />
              <Text style={styles.buttonText}>Siguiente</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.button, styles.finishButton]} onPress={handleFinishTest}>
              <Ionicons name="checkmark-outline" size={24} color="white" />
              <Text style={styles.buttonText}>Terminar</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancelTest}>
            <Ionicons name="close-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {currentStage === 4 && (
        <View style={styles.resultsContainer}>
          <Text style={styles.title}>Resultados</Text>
          <TouchableOpacity style={styles.optionContainer}>
            <Ionicons name="heart-outline" size={24} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.optionText}>CFT: {cft}% - Valor y clasificación</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <Ionicons name="barbell-outline" size={24} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.optionText}>PC: Valor y clasificación</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <Ionicons name="body-outline" size={24} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.optionText}>IMC: Valor y clasificación</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.observationCard}>
            <Text style={styles.observationTitle}>Observación</Text>
            <Text>Un buen valor de CFT es un indicador de salud y protector de ECNT, EC y hospitalización por COVID.</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkButtonText}>Infórmate aquí</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.button, styles.restartButton]} onPress={handleRestartTest}>
            <Ionicons name="refresh-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Volver a empezar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  stageContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cftText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  resultsContainer: {
    alignItems: 'center',
    padding: 20,
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
  observationCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  observationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  linkButton: {
    marginTop: 10,
  },
  linkButtonText: {
    color: '#2196F3',
    fontWeight: 'bold',
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
  nextButton: {
    backgroundColor: '#4CAF50',
  },
  finishButton: {
    backgroundColor: '#f44336',
  },
  restartButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
});

export default Tab2Screen;
