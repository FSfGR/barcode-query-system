import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

// Import components
import Header from '../components/Header.js';
import Input from '../components/Input.js';
import ToggleView from '../components/ToggleView.js';
import BackgroundImage from '../components/BackgroundImage.js';
import Icon from '../components/Icon.js';

// Import constants
import Colors from '../constants/colors.js';
import Texts from '../constants/texts-en.js';

// Import media file
import BackgroundImg from '../media/background_grocery.png';
import ScanImg from '../media/barcode_icon.png';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {

  // Hooks
  const [barcode, setBarcode] = useState(props.barcode);
  const [keyboardEnabled, setKeyboardEnabled] = useState(false);

  // Handler for pressing barcode result showing input box
  const searchBarPressedHandler = () => {
    setKeyboardEnabled(true);
  };

  // Handler for editing search bar input box
  const searchBarEditHandler = (newBarcode) => {
    setKeyboardEnabled(true);
    setBarcode(newBarcode);
  };

  // Handler for hiding keyboard when user clicked somewhere other than the keypad
  const hideKeyboardHandler = () => {
    Keyboard.dismiss();
    setKeyboardEnabled(false);
  };

  // Handler for cleaning search bar content
  const clearSearchBarHandler = () => {
    setBarcode('');
  };

  // Handler for searching a product with the given barcode
  const searchProductHandler = () => {
    props.onProductSearch(barcode);
    // Clean up search bar field after searching
    setBarcode('');
  };

  // Handler for clicking barcode scanning button
  const clickScanButtonHandler = () => {
    props.onScanButtonClicked();
  };

  return (
    <TouchableWithoutFeedback
      onPress={hideKeyboardHandler}
    >
      <View style={styles.screen}>

        {/* Backgound Image */}
        <BackgroundImage sourceFile={BackgroundImg} />

        {/* Main Body */}
        <View style={styles.body}>

          {/* Container for search bar and operating buttons */}
          <View style={styles.searchSectionContainer}>

            {/* Editable  */}
            <View style={styles.searchBarContainer}>

              {/* Scan barcode icon */}
              <Icon
                onPress={clickScanButtonHandler}
                withImg={true}
                imageSource={ScanImg}
              />


              {/* Editable search bar */}
              <Input
                style={styles.input}
                blurOnSubmit
                autoCaptalize='none'
                autoCorrect={false}
                keyboardType='number-pad'
                onChangeText={searchBarEditHandler}
                onFocus={searchBarPressedHandler}
                value={barcode}
                contextMenuHidden={true}
              />

            </View>

            {/* Operating Buttons Container */}
            <View style={styles.buttonContainer}>

              {/* Clear Button */}
              <TouchableOpacity style={styles.clearButton}>
                <Button
                  title={Texts.clearButtonText}
                  color='white'
                  onPress={clearSearchBarHandler}
                />
              </TouchableOpacity>

              {/* Search Button */}
              <TouchableOpacity style={styles.searchButton}>
                <Button
                  title={Texts.searchButtonText}
                  color='white'
                  onPress={searchProductHandler}
                />
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

// Styling information
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  body: {
    width: screenWidth,
    marginTop: screenHeight/4,
    alignItems: 'center'
  },
  searchSectionContainer: {
    flexDirection: 'column',
    width: 350,
    maxWidth: '90%',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 300,
    maxWidth: '80%',
    height: 50,
    maxHeight: '90%',
    textAlign: 'center',
    fontSize: 25
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  clearButton: {
    width: 130,
    maxWidth: '80%',
    height: 50,
    maxHeight: '90%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    marginBottom: 20
  },
  searchButton: {
    width: 130,
    maxWidth: '80%',
    height: 50,
    maxHeight: '90%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    marginBottom: 20
  },
});

export default HomeScreen;
