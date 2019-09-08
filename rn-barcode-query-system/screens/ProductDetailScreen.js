import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Image
} from 'react-native';

// Import components
import BackgroundImage from '../components/BackgroundImage.js';
import ToggleView from '../components/ToggleView.js';
import ProductDetailItem from '../components/ProductDetailItem.js';

// Import constants
import Colors from '../constants/colors.js';
import Texts from '../constants/texts-en.js';

// Import media file
import BackgroundImg from '../media/background_grocery.png';
import SampleProductImg from '../media/sample_product.png';


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const ProductDetailScreen = (props) => {

  // Hooks
  const [loggedin, setLoggedin] = useState(true); // TODO: needs to be changed back to false after testing

  // Handler for clicking New Search Button for a new search
  const clickNewSearchButtonHandler = () => {
    props.onNewSearchButtonClicked();
  };

  // Handler for clicking History Button to check the updating history of this product
  const clickHistoryButtonHandler = () => {
    console.log("History Button is clicked!");
  };

  // Handler for clicking Edit Button to edit the product's details
  const clickEditButtonHandler = () => {
    console.log("Edit Button is clicked!");
  };

  console.log("=============================================================================");
  console.log("Before rendering, test if the product details passed from App.js is correct:");
  console.log(props.details);
  console.log("=============================================================================");

  return (
    <View style={styles.screen}>

      {/* Backgound Image */}
      <View>
        <Image style={styles.backgroundImg} source={BackgroundImg} />
      </View>

      {/* Togglable extra buttons for logged in situation */}
      <ToggleView
        hide={!loggedin}
        style={styles.extraButtonsContainer}
      >
        {/* History Button */}
        <TouchableOpacity style={styles.extraButton}>
          <Button
            title={Texts.historyButtonText}
            color='white'
            onPress={clickHistoryButtonHandler}
          />
        </TouchableOpacity>
        {/* Edit Button */}
        <TouchableOpacity style={styles.extraButton}>
          <Button
            title={Texts.editButtonText}
            color='white'
            onPress={clickEditButtonHandler}
          />
        </TouchableOpacity>
      </ToggleView>

      {/* Scrollale Main Body */}
      <ScrollView contentContainerStyle={styles.body}>

        {/* Container for Product Details */}
        <View style={styles.productDetailsContainer}>
          <View style={styles.topPart}>
            <View>
              <ProductDetailItem title={Texts.productDetailsNameText} value={props.details.Name}/>
              <ProductDetailItem title={Texts.productDetailsRetailPriceText} value={props.details.RetailPrice + " / Box"}/>
              <ProductDetailItem title={Texts.productDetailsWholesalePriceText} value={props.details.WholesalePrice + " / Box"}/>
            </View>
            <Image style={styles.previewImg} source={SampleProductImg}/>
          </View>

          <ProductDetailItem title={Texts.productDetailsAmountText} value={props.details.Amount + " Box(es)"}/>
          <ProductDetailItem title={Texts.productDetailsStatusText} value={props.details.Status}/>
          <ProductDetailItem title={Texts.productDetailsDateLastUpdatedText} value="11:36PM - Aug 17, 2019"/>
          <ProductDetailItem title={Texts.productDetailsDescriptionText} valueStyle={styles.textfulBlock} value={props.details.Description}/>
          <ProductDetailItem title={Texts.productDetailsRemarksText} valueStyle={styles.textfulBlock} value={props.details.Remarks}/>
        </View>

      </ScrollView>

      {/* Operating Buttons Container */}
      <View style={styles.buttonContainer}>

        {/* New Search Button */}
        <TouchableOpacity style={styles.newSearchButton}>
          <Button
            title={Texts.newSearchButtonText}
            color='white'
            onPress={clickNewSearchButtonHandler}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
};

// Styling information
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%'
  },
  body: {
    width: '100%',
    alignItems: 'center'
  },
  backgroundImg: {
    height: screenHeight,
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover'
  },
  extraButtonsContainer: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: 'green'
  },
  extraButton: {
    width: 150,
    maxWidth: '50%',
    height: 50,
    maxHeight: '90%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    marginBottom: 20
  },
  productDetailsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: Colors.accent
  },
  topPart: {
    width: 500,
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow'
  },
  previewImg: {
    width: 150,
    maxWidth: '50%',
    height: 200,
    maxHeight: '100%',
    resizeMode: 'contain',
    backgroundColor: 'black'
  },
  textfulBlock: {
    fontSize: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  newSearchButton: {
    width: 250,
    maxWidth: '80%',
    height: 50,
    maxHeight: '90%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    marginBottom: 20
  }
});

export default ProductDetailScreen;
