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
  Animated, TouchableOpacity, Dimensions,Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipeButton from 'rn-swipe-button';
import {useNavigation,useFocusEffect} from '@react-navigation/native';
import arrowRight from '../../assets/arrow-right.png';
import {useDispatch, useSelector} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {nameIn} from '../../redux/actions/auth';

const Home = () => {
  const [name, setname] = useState('');
  const textInput = React.useRef();
  const [isemulator, setisemulator] = useState(false);
  const [hazardous, sethazardous] = useState('');
  const defaultStatusMessage = 'swipe status appears here';
  const [swipeStatusMessage, setSwipeStatusMessage] = useState(
    defaultStatusMessage,
  );
   const dispatch = useDispatch();
  const navigation = useNavigation();


  useEffect(() => {
    DeviceInfo.isEmulator().then((isEmulator) => {
      if(isEmulator == true){
        setisemulator(isEmulator);
      }
    });
     
  }, []);  
 
  

  const onClickPressme=(from)=>{
    if(name.length > 0){
        if(from == 'text' || from == 'btext' || from == 'bluetext'){
          dispatch(nameIn(name));
          textInput.current.setNativeProps({ text: "" });
          navigation.navigate("NextScreen");
        }
    }else{
      Alert.alert("Error","Please enter name");
    }
    
  }

  const updateSwipeStatusMessage = (message) => {
    console.log("message",message);
    setSwipeStatusMessage(message);
    
  };

  const onSwipeSuccess =()=>{
    dispatch(nameIn(name));
    textInput.current.setNativeProps({ text: "" });
    navigation.navigate("NextScreen");
  }


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
         <View style={{marginHorizontal: 10,backgroundColor:'#efefef',paddingVertical: 10}}>
            <TextInput
              ref={textInput}
              placeholder="Enter name"
              placeholderStyle={{color:'black',fontSize:13}}
              onChangeText={(text)=>{setname(text)}}
              style={{height: 45,borderRadius: 10}}
            />
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

         {isemulator == true ?<Text>App is running on the emulator</Text>:<View></View>}
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

export default Home;
