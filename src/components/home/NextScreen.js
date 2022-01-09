import React, { useState, useEffect, useRef } from 'react'
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Animated, TouchableOpacity, Dimensions
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipeButton from 'rn-swipe-button';

import arrowRight from '../../assets/arrow-right.png';
import { useDispatch,useSelector } from 'react-redux';
import {nameOut} from '../../redux/actions/auth';
import {nameIn} from '../../redux/actions/auth';

const NextScreen = () => {
 
  const defaultStatusMessage = 'swipe status appears here';
  const [swipeStatusMessage, setSwipeStatusMessage] = useState(
    defaultStatusMessage,
  );
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();


  useEffect(() => {
    console.log("auth",auth);
  }, []);  
  

  const onClickPressme=()=>{
   dispatch(nameIn(auth));
   navigation.navigate("NextScreen");
  }

  const onSwipeSuccess =()=>{
    dispatch(nameIn(auth));
    navigation.navigate("NextScreen");
  }

  const updateSwipeStatusMessage = (message) => {
    console.log("message",message);
    setSwipeStatusMessage(message);
  };
  const CheckoutButton = () => {
    return(
        <View style={{width: 100, height: 30, backgroundColor: '#C70039', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#ffffff'}}>Checkout</Text>
        </View>
    );
  }

  return (
    <SafeAreaView style={styles.formcontainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.footer}>
         <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',marginHorizontal:15}}>
            <Text style={{fontSize:25}}>{auth}</Text>
        </View> 
      </View>
       <ScrollView>
          <View style={{marginBottom:20,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=> onClickPressme("text")}>
              <Text style={styles.CbtnText}>Press me</Text>
            </TouchableOpacity>
          </View>

         <View style={{marginHorizontal:20}}>
            <TouchableOpacity
              onPress={()=> onClickPressme("btext")}
              activeOpacity={0.6}
              style={[styles.vhCenter, styles.btnContainer]}>
              <Text style={styles.CbtnText}>Press me</Text>
            </TouchableOpacity>
         </View>

          <View style={{marginHorizontal:20}}>
            <TouchableOpacity
              onPress={()=> onClickPressme("bluetext")}
              activeOpacity={0.6}
              style={[styles.vhCenter, styles.bbtnContainer]}>
              <Text style={styles.btnText}>Press me</Text>
            </TouchableOpacity>
         </View>

         <View style={{marginHorizontal:20}}>
            <SwipeButton
              containerStyles={{borderRadius: 10,backgroundColor: '#eeeeee',borderWidth:0}}
              height={55}
              onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
              onSwipeStart={() => updateSwipeStatusMessage('Swipe started!')}
              onSwipeSuccess={()=> onSwipeSuccess()}
              railBackgroundColor='#34424A'
              railStyles={{backgroundColor: '#6EB1F7',borderRadius:4,borderColor:'#6EB1F7'}}
              //thumbIconComponent={CheckoutButton}
              thumbIconImageSource={arrowRight}
              thumbIconBorderColor={'#6EB1F7'}
              thumbIconBackgroundColor={'#6EB1F7'}
              thumbIconStyles={{borderRadius:6}}
              thumbIconWidth={50} 
              title="Slide me to Continue"
              titleStyles={styles.CbtnText}
            />
         </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formcontainer:{
    flex: 1,
  },
  footer:{
    flex: 3,
    backgroundColor: '#fcfcfc',
    paddingVertical: 30
  },
  buttonView:{
    flex:1,alignItems:'center',justifyContent:'center'
  },
  buttonText:{
    fontSize:22,backgroundColor:'#ececec',padding: 10,borderRadius:4
  },
  btnContainer: {
    backgroundColor: '#34424A',
    marginVertical: 10,
    height: 55,
    width: '100%',
    borderRadius: 10,
  },
  bbtnContainer:{
    backgroundColor: '#6EB1F7',
    marginVertical: 10,
    height: 55,
    width: '100%',
    borderRadius: 10,
  },
  btnText: {
    color: '#ffffff',
    fontSize:18
  },
  vhCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CbtnText:{
    color: '#4B729F',
    fontSize:18
  }
});

export default NextScreen;
