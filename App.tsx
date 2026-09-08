import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Café do Código</Text>
        <Text style={styles.headerSubTitle}>Seu café, uma linha por vez</Text>
      </View>

      <View style={styles.avatarPlaceholder}>
        <Ionicons name='person' size={20} color={"#2f2d2c"}></Ionicons>
      </View>
      <View style={styles.content}>
        <View style={styles.grettingSection}>
          <Text style={styles.grettingTitle}>Bom dia!</Text>
          <Text style={styles.grettingSubTitle}>Que tal um café hoje?</Text>
        </View>

        <View style={styles.featured}>
          <Image source={require('./assets/coffee.jpg')} style={styles.image}></Image>
          <Text>Cappucino Especial</Text>
          <Text>Cremoso e Delicioso</Text>
          <Text>R$ 12,90</Text>
        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'

  },
  header: {
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2f2d2c"
  },
  headerSubTitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {

    paddingHorizontal: 24
  },
  grettingSection: {
    marginTop: 10,
    marginBottom: 24
  },
  grettingTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2f2d2c'
  },
  grettingSubTitle: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8
  },
  featured: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  image: {
    width: '100%',
    height: 188,
    borderRadius: 16,
    marginBottom: 16,
  }
})