import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"], 
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right", 
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center", 
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Entry Screen - Awesome</Text>

      <View>
        {/* First Text Component with largeText style */}
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>

        {/* Second Text Component with mediumText style */}
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>

        {/* Third Text Component with smallText style */}
        <Text style={styles.smallText}>ALX is awesome</Text>

        {/* Additional Text Components */}
        <Text style={styles.largeText}>Learning React Native is fun!</Text>
        <Text style={styles.mediumText}>Mastering components and state is essential</Text>
        <Text style={styles.smallText}>Practice makes you better every day</Text>
      </View>
    </View>
  );
}
