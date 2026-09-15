import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.textFooter}>Cafeteria do Vinicius</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    marginBlock: 20
  },
  textFooter: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9b9b9b',
  }
})