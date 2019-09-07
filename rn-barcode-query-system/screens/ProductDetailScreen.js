import React, { useState, useRef } from 'react';
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
import ProductDetailItem from '../components/ProductDetailItem.js';

// Import constants
import Colors from '../constants/colors.js';
import Texts from '../constants/texts-en.js';

// Import media file
import BackgroundImg from '../media/background_grocery.png';


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

let testValue = "Pei pa koa is made up of a blend of herbal ingredients[8] including the fritillary bulb (Bulbus fritillariae cirrhosae, 川貝母), loquat leaf (Eriobotrya japonica, 枇鈀葉), ladybell root (Adenophora stricta, 南沙參), Indian bread (Wolfiporia extensa), 茯苓), pomelo peel (Citrus maxima, 化橘紅), chinese bellflower root (Platycodon grandiflorum, 桔梗), pinellia rhizome (Pinellia ternata, 半夏), Schisandra seed (Schisandra chinensis, 五味子), Trichosanthes seed (Trichosanthes cucumerina, 瓜蔞子), coltsfoot flower (Tussilago farfara, 款冬花), thinleaf milkwort root (Polygala tenuifolia, 遠志), bitter apricot kernel (Prunus armeniaca, 苦杏仁), fresh ginger (Zingiber officinale, 生薑), licorice root (Glycyrrhiza uralensis, 甘草),[9] and menthol in a syrup and honey base.";

const ProductDetailScreen = (props) => {

  // Handler for clicking New Search Button for a new search
  const clickNewSearchButtonHandler = () => {
    props.onBackButtonClicked();
  };

  return (
    <View style={styles.screen}>

      {/* Backgound Image */}
      <View>
        <Image style={styles.backgroundImg} source={BackgroundImg} />
      </View>

      {/* Scrollale Main Body */}
      <ScrollView contentContainerStyle={styles.productDetailsContainer}>

        {/* Container for Product Details */}
        <View style={styles.productDetailsContainer}>
          <ProductDetailItem title="Name:" value="NIN JIOM PEI PA KOA"/>
          <ProductDetailItem title="Retail Price:" value="$9.99 / Box"/>
          <ProductDetailItem title="Wholesale Price:" value="$6.59 / Box"/>
          <ProductDetailItem title="Amount:" value="12 Box(es)"/>
          <ProductDetailItem title="Status:" value="Enough"/>
          <ProductDetailItem title="Date Last Updated:" value="11:36PM - Aug 17, 2019"/>
          <ProductDetailItem title="Description:" valueStyle={styles.textfulBlock} value={testValue}/>
          <ProductDetailItem title="Remarks:" valueStyle={styles.textfulBlock} value="None"/>
        </View>

      </ScrollView>

      {/* Operating Buttons Container */}
      <View style={styles.buttonContainer}>

        {/* New Search Button */}
        <TouchableOpacity style={styles.newSearchButton}>
          <Button
            title={Texts.newSearchButtonText}
            color='white'
            onPress={() => {}}
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
  productDetailsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: Colors.accent
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
