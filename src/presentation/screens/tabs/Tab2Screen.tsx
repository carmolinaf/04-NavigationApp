// Tab2Screen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, ScrollView, Alert } from 'react-native';

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
            <Button title="Comenzar" onPress={handleStart} color="#4CAF50" />
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
            <Button title="Siguiente" onPress={handleNextStage} color="#4CAF50" />
          ) : (
            <Button title="Terminar" onPress={handleFinishTest} color="#f44336" />
          )}
        </ScrollView>
      )}

      {currentStage === 4 && (
        <View style={styles.resultsContainer}>
          <Text style={styles.title}>Resultados</Text>
          <Text style={styles.content}>Semáforo de la salud</Text>
          <Text style={styles.content}>CFT: {cft}% - Valor y clasificación</Text>
          <Text style={styles.content}>PC: Valor y clasificación</Text>
          <Text style={styles.content}>IMC: Valor y clasificación</Text>
          <View style={styles.observationCard}>
            <Text style={styles.observationTitle}>Observación</Text>
            <Text>Un buen valor de CFT es un indicador de salud y protector de ECNT, EC y hospitalización por COVID.</Text>
            <Button title="Infórmate aquí" onPress={() => {}} />
          </View>
          <Button title="Volver a empezar" onPress={handleRestartTest} color="#4CAF50" />
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
});

export default Tab2Screen;
