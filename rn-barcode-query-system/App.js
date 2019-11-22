import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import axios from 'axios';

// Import screens
import ScanScreen from './screens/ScanScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductDetailScreen from './screens/ProductDetailScreen.js';

// Import components
import Header from './components/Header.js';

// Import constants
import Texts from './constants/texts-en.js';

export default function App() {

  // Hooks
  const [barcode, setBarcode] = useState('');
  const [displayScreen, setDisplayScreen] = useState('HomeScreen');
  const [productDetails, setProductDetails] = useState({});

  // Handler for Home button redirection on Header
  const redirectToHome = () => {
    setBarcode('');
    setDisplayScreen('HomeScreen');
  };

  // Handler for redirecting from HomeScreen to ScanScreen
  const homeScreentoScanScreenHandler = () => {
    setDisplayScreen('ScanScreen');
  };

  // Handler for redirecting from ScanScreen to HomeScreen with barcode transfering
  const scanScreenToHomeScreenWithBarcodeHandler = (barcode) => {
    setBarcode(barcode);
    setDisplayScreen('HomeScreen');
  };

  // Handler for search a product with given barcode sent from ScanScreen
  const clickSearchButtonHandler = async (barcode) => {
    // TODO: fake backend for now.... need to be updated after BE is established
    // Barcode validation
    if (barcode !== '') {
      console.log("Waiting for BE responds for search product with barcode: " + barcode);
      // Try to get product details
      try {
        // TODO: NOTICE!!! for testing purpose, the IP address should be the one used for your computer (port is the same tho)
        await axios.get('http://192.168.0.14:3306/details/' + barcode + '/')
          .then(res => {
            // Check if the result is empty
            if (res.data.length !== 0) {
              setProductDetails(res.data[0]);
              // redirect to ProductDetailScreen
              setDisplayScreen('ProductDetailScreen');
            } else {
              Alert.alert(
                Texts.itemNotExistTitleText,
                Texts.itemNotExistContentText,
                [{text: Texts.alertOkayButtonText, style: 'destructive', onPress: redirectToHome}]
              );
              setBarcode('');
              setDisplayScreen('HomeScreen');
            }
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.alert(
        'Barcode cannot be empty!',
        "Plese scan or type a valid barcode...",
        [{text: 'Okay', style: 'destructive', onPress: redirectToHome}]
      );
    }
  }

  let content;
  switch (displayScreen) {
    case 'HomeScreen':
      content = (
        <HomeScreen
          onScanButtonClicked={homeScreentoScanScreenHandler}
          onProductSearch={clickSearchButtonHandler}
          barcode={barcode}
        />
      );
      break;
    case 'ScanScreen':
      content = (
        <ScanScreen
          onBackButtonClicked={redirectToHome}
          onConfirmButtonClicked={scanScreenToHomeScreenWithBarcodeHandler}
        />
      );
      break;
    case 'ProductDetailScreen':
      content = (
        <ProductDetailScreen
          details={productDetails}
          onNewSearchButtonClicked={redirectToHome}
        />
      );

  }

  return (
    <View style={styles.screen}>
      {/* Screen Header */}
      <Header onHomeClicked={redirectToHome} />
      {/* Main body for content */}
      { content }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
