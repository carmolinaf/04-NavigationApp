// Tab6Screen.tsx  FRECUENCIA CARDIACA
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import AppleHealthKit, { HealthInputOptions, HealthKitPermissions, HealthValue } from 'react-native-health';

const Tab6Screen = () => {
  const [heartRate, setHeartRate] = useState<number | string | null>(null);
  const [isMeasuring, setIsMeasuring] = useState<boolean>(false);

  const startMeasuringHeartRate = () => {
    setIsMeasuring(true);
    const permissions: HealthKitPermissions = {
      permissions: {
          read: [AppleHealthKit.Constants.Permissions.HeartRate],
          write: []
      },
    };

    AppleHealthKit.initHealthKit(permissions, (err: string, results: HealthValue) => {
      if (err) {
        console.log("Error al inicializar HealthKit: ", err);
        setIsMeasuring(false);
        return;
      }

      // Leer los datos de frecuencia cardíaca
      const options: HealthInputOptions = {};
      AppleHealthKit.getHeartRateSamples(options, (error: string, results: HealthValue[]) => {
        if (error) {
          console.log("Error al obtener datos de frecuencia cardíaca: ", error);
          setIsMeasuring(false);
          return;
        }
        if (results && results.length > 0) {
          setHeartRate(results[0].value);
        } else {
          setHeartRate('No disponible');
        }
        setIsMeasuring(false);
      });
    });
  };

  const cancelMeasuringHeartRate = () => {
    setIsMeasuring(false);
    setHeartRate(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Monitor de Frecuencia Cardíaca</Text>
      <Text style={styles.heartRateText}>
        {heartRate ? `Frecuencia Cardíaca: ${heartRate} bpm` : 'Presiona el botón para medir tu frecuencia cardíaca'}
      </Text>
      <Button
        title={isMeasuring ? "Midiendo..." : "Medir Frecuencia Cardíaca"}
        onPress={startMeasuringHeartRate}
        disabled={isMeasuring}
      />
      {isMeasuring && (
        <Button
          title="Cancelar"
          onPress={cancelMeasuringHeartRate}
          color="red"
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heartRateText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Tab6Screen;
