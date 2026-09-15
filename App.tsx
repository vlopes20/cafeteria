import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import CoffeeCard from './components/CoffeeCard';


export default function App() {
  const [nameUser, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (nameUser.trim() == '') {
      setMessage('Por favor, informe seu nome!');
    } else {
      setMessage(`Olá ${nameUser}, seu pedido foi recebido!`);
    }
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}
      >
      <ScrollView>
        
        <Header />

        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Bom dia!</Text>
            <Text style={styles.grettingSubTitle}>Que tal um café hoje?</Text>
          </View>

          <View style={styles.featured}>
            <Image source={require('./assets/coffee.jpg')} style={styles.image}></Image>
            <Text style={styles.featuredTitle}>Cappuccino Especial</Text>
            <Text style={styles.featuredDescription}>Cremoso e Delicioso</Text>
            <Text style={styles.featuredPrice}>R$ 12,90</Text>
          </View>

          <Text style={styles.sectionTitle}>Nosso Cardápio</Text>

          <View style={styles.sectionMenu}>
            <CoffeeCard name='Expresso' description='Puro e forte' price='7,00'/>
            <CoffeeCard name='Cappucino' description='Clássico com espuma' price='12,90'/>
            <CoffeeCard name='Latte' description='Leite cremoso' price='11,50'/>
            <CoffeeCard name='Mocha' description='Toque de chocolate' price='13,50'/>
          </View>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual é o seu nome?</Text>
            <TextInput 
              style={styles.input}
              placeholder='Digite seu nome...'
              value={nameUser}
              onChangeText={setName}
              >
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={handleOrder}>
              <Text style={styles.buttonText}>Fazer meu pedido</Text>
            </TouchableOpacity>

            {message !== '' && <Text style={styles.messageText}>{message}</Text>}
          </View>

        </View>

        <Footer />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  
  content: {
    paddingHorizontal: 24,
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
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 188,
    borderRadius: 16,
    marginBottom: 16,
  },
  featuredTitle: {
    fontSize: 20,
    color: '#2f2d2c',
    fontWeight: '800'
  },
  sectionMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  featuredDescription: {
    fontSize: 14,
    color: '#9b9b9b',
    marginTop: 4
  },
  featuredPrice: {
    fontSize: 20,
    color: '#c67c4e',
    fontWeight: '800',
    marginTop: 12
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2f2d2c',
    marginBottom: 16
  },
  orderSection: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  question: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2f2d2c',
    marginBottom: 16
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16
  },
  button: {
    backgroundColor: '#c67c4e',
    width: '100%',
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700'
  },
  messageText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#c67c4e',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 20
  }
});