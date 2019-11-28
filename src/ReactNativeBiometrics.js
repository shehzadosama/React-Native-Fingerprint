import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics'


class Biometrics extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = { 
          
         };
    }
    componentDidMount(){

// ReactNativeBiometrics.isSensorAvailable()
// .then((resultObject) => {
//   console.log("resultObject : ",resultObject)
//   const { available, biometryType } = resultObject

//   if (available && biometryType === ReactNativeBiometrics.TouchID) {
//     console.log('TouchID is supported')
//   } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
//     console.log('FaceID is supported')
//   } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
//     console.log('Biometrics is supported')
//   } else {
//     console.log('Biometrics not supported')
//   }
// })

// ReactNativeBiometrics.createKeys('Confirm fingerprint')
//   .then((resultObject) => {
//     console.log("resultObject : ",resultObject)
//     const { publicKey } = resultObject
//     console.log(publicKey)
//     sendPublicKeyToServer(publicKey)
//   })

  // ReactNativeBiometrics.biometricKeysExist()
  // .then((resultObject) => {
  //   const { keysExist } = resultObject
  //   console.log("resultObject : ",resultObject)
 
  //   if (keysExist) {
  //     console.log('Keys exist')
  //   } else {
  //     console.log('Keys do not exist or were deleted')
  //   }
  // })

  // ReactNativeBiometrics.deleteKeys()
  // .then((resultObject) => {
  //   const { keysDeleted } = resultObject
 
  //   if (keysDeleted) {
  //     console.log('Successful deletion')
  //   } else {
  //     console.log('Unsuccessful deletion because there were no keys to delete')
  //   }
  // })

  let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
  let payload = epochTimeSeconds + 'some message'
   
  ReactNativeBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload: payload
    })
    .then((resultObject) => {
      console.log("resultObject : ",resultObject)
      const { success, signature } = resultObject
   
      if (success) {
        console.log(signature)
        verifySignatureWithServer(signature, payload)
      }
    }).catch(err=>{
      console.log("err : ",err)
    })

  //   ReactNativeBiometrics.simplePrompt('Confirm fingerprint')
  // .then((resultObj) => {
  //   const { success } = resultObj
  //   console.log("resultObj : ",resultObj)

 
  //   if (success) {
  //     console.log('successful biometrics provided')
  //   } else {
  //     console.log('user cancelled biometric prompt')
  //   }
  // })
  // .catch(() => {
  //   console.log('biometrics failed')
  // })


    }
    

    render(){
        return(
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}
export default Biometrics;
   