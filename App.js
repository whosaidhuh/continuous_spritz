import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '../node_modules/react-spritz/build/main.css';
import ReactSpritz from 'react-spritz';
import React, { useState } from 'react';


export default function App() {
    const [cart, setCart] = useState([]);

    function addItemToCart(e) {
        const item = e.target.value;
        console.log(item);
        setCart(cart => [...cart, item]);
    }
    return (
    <View style={styles.container}>
        <div className="items">
            <button value="MacBook Pro" onClick={addItemToCart}>💻 MacBook Pro</button>
            <button value="iPhone XS" onClick={addItemToCart}>📱iPhone XS</button>
            <button value="Gem" onClick={addItemToCart}>💎 Gem</button>
            <button value="Teddy Bear" onClick={addItemToCart}>🧸 Teddy Bear</button>
        </div>
        <div className="cart">
            🛒Cart
            <ul>
                {cart.map(item => <li key={item}>{item}</li>)}
            </ul>
            <ReactSpritz
                text= "test_string test_string test string
            test_string test string test_string test string
            test_string test string test_string test string "
                wpm={400}
                playing={true}
                stop={true}
            />
        </div>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
