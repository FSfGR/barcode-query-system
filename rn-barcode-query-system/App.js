import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import axios from 'axios';

// Import screens
import ScanScreen from './screens/ScanScreen.js';
import HomeScreen from './screens/HomeScreen.js'; // TODO: need to be changed back to Home after testing
import ProductDetailScreen from './screens/ProductDetailScreen.js';

// Import components
import Header from './components/Header.js';

export default function App() {

  // Hooks
  // const [homeScreenOn, setHomeScreenOn] = useState(true);
  const [barcode, setBarcode] = useState('');
  const [displayScreen, setDisplayScreen] = useState('HomeScreen');
  const [productDetails, setProductDetails] = useState({});

  // Handler for Home button redirection on Header
  const redirectToHome = () => {
    // setHomeScreenOn(true);
    setBarcode('');
    setDisplayScreen('HomeScreen');
  };

  // Handler for redirecting from HomeScreen to ScanScreen
  const homeScreentoScanScreenHandler = () => {
    // setHomeScreenOn(false);
    setDisplayScreen('ScanScreen');
  };

  // // Handler for redirecting from ScanScreen to HomeScreen
  // const scanScreenToHomeScreenHandler = () => {
  //   // setHomeScreenOn(true);
  //   setDisplayScreen('HomeScreen');
  // };

  // Handler for redirecting from ScanScreen to HomeScreen with barcode transfering
  const scanScreenToHomeScreenWithBarcodeHandler = (barcode) => {
    setBarcode(barcode);
    // setHomeScreenOn(true);
    setDisplayScreen('HomeScreen');
  };

  // Handler for search a product with given barcode sent from ScanScreen
  const clickSearchButtonHandler = async (barcode) => {
    // TODO: fake backend for now.... need to be updated after BE is established
    // Barcode validation
    if (barcode !== '') {
      console.log("Waiting for BE responds for search product with barcode: " + barcode);
      // Alert.alert(
      //   'Fake Backend',
      //   "Waiting for BE responds for search product with barcode: " + barcode,
      //   [{text: 'Okay', style: 'destructive', onPress: () => {}}]
      // );
      // axios.defaults.withCredentials=true;
      // Try to get product details
      try {
        // TODO: NOTICE!!! for testing purpose, the IP address should be the one used for your computer (port is the same tho)
        await axios.get('http://192.168.0.11:3306/details/' + barcode + '/')
          .then(res => {
            console.log("Result from BE, res.data[0]: " + res.data[0]);
            setProductDetails(res.data[0]);
            // TODO: This part needs to be moved into if (barcode !== '') above as the asyncronous function's callback
            // redirect to ProductDetailScreen
            setDisplayScreen('ProductDetailScreen');
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

  // if (homeScreenOn) {
  //   content = (
  //     <HomeScreen
  //       onScanButtonClicked={homeScreentoScanScreenHandler}
  //       onProductSearch={clickSearchButtonHandler}
  //       barcode={barcode}
  //     />
  //   );
  // } else {
  //   content = (
  //     <ScanScreen
  //       onBackButtonClicked={scanScreenToHomeScreenHandler}
  //       onConfirmButtonClicked={scanScreenToHomeScreenWithBarcodeHandler}
  //     />
  //   );
  // }

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
