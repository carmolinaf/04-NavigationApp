// Tab3Screen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const testHistory = [
  { id: '1', date: '01/01/24', cft: 65 },
  { id: '2', date: '15/02/24', cft: 70 },
  { id: '3', date: '01/03/24', cft: 68 },
  { id: '4', date: '15/03/24', cft: 72 },
];

const Tab3Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <FlatList
        data={testHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <View style={styles.historyTextContainer}>
              <Text style={styles.cftLabel}>CFT</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <View style={styles.cftValueContainer}>
              <Text style={styles.cftValue}>{item.cft}%</Text>
              <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.cftImage} />
            </View>
          </View>
        )}
      />

      <View style={styles.dashboardContainer}>
        <Text style={styles.dashboardTitle}>Dashboard resumen</Text>
        <Text>EJE Y: Valor CFT</Text>
        <Text>EJE X: Fecha</Text>
        <Image source={{ uri: 'https://via.placeholder.com/300x150' }} style={styles.dashboardImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  historyTextContainer: {
    flexDirection: 'column',
  },
  cftLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    color: '#777',
  },
  cftValueContainer: {
    alignItems: 'center',
  },
  cftValue: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cftImage: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  dashboardContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  dashboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dashboardImage: {
    width: 300,
    height: 150,
    marginTop: 10,
  },
});

export default Tab3Screen;
