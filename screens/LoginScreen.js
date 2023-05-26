import React, {useState}  from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Image } from "react-native";
import {firebaseConfig} from '../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const LoginScreen = () => {

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const handleLogin = () => {
    const auth = getAuth();
    initializeApp(firebaseConfig); 
    signInWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
        const user = userCredential.user;
        console.log('Inicio de sesión exitoso', user);
      })
      .catch((error) => {
        console.log('Error en el inicio de sesión', error);
      });
  };

  const handleSignInGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials)
      console.log('Bienvenido, el inicio de sesión con Google fue exitoso');
    } catch (error) {
      console.log('El inicio de sesión con Goolge tuvo problemas', error);
    }
  }

  const handleNewAccount = async () => {
    console.log('Presionó el botón para crear una cuenta');
  }

  return (
    <View style = { styles.bigContainer}>
      <View style = { styles.appContainer}>
        <View style = { styles.arrowContainer}>
          <Image
            style = { styles.arrowStyle}
            source = { require('../assets/flecha.png') }
          >
          </Image>
        </View>
        <Text style = { styles.textLanguage} >Español</Text>
        <View style = { styles.imageContainer} >
          <Image
            style = { styles.imgStyle}
            source = { require('../assets/facebook-logo.png') }
          >
          </Image>
        </View>
        
        <View style = { styles.formConatiner}>
          <TextInput 
            value= {email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Correo electrónico"
            style = { styles.textInputStyle}
          />

          <TextInput 
            value= {password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Contraseña"
            secureTextEntry
            style = { styles.textInputStyle}
          />
          <TouchableHighlight
          style={styles.buttonStyle} 
          onPress={handleLogin} 
          underlayColor="#0000FF"
          >
            <Text    
              style={styles.textButtonStyle}
            >Iniciar Sesión</Text>
          </TouchableHighlight>
          <Text    
              style={styles.forgetStyle}
            >¿Olvidaste tu contraseña?</Text>
        </View>
        <View style={styles.newAccountContainer}>
          <TouchableHighlight
            style={styles.buttonNewAccount}
            onPress={handleNewAccount}
            underlayColor="#000000"
            >
            <Text    
              style={styles.textButtonStyle}
            >Crear cuenta nueva</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.googleButtonContainer}>
          <Image
              style = { styles.googleLogoImage}
              source = { require('../assets/google-logo.png') }
            >
          </Image> 
          <TouchableHighlight
            style={styles.googleButtonStyle} 
            onPress={handleSignInGoogle}
            underlayColor="#0000FF"
          >
            <Text    
              style={styles.textButtonStyle}
            >Iniciar con Google</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.metaLogoContaimer}>
          <Image
            style = { styles.metaLogoImage}
            source = { require('../assets/meta-logo.png') }
          >
          </Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appContainer: {
    width: 375,
    height: 812,
    backgroundColor: '#10222e',
    paddingTop: 10
  },
  arrowContainer: {
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  arrowStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    transform: [{ rotate: '180deg' }],
    marginLeft: 10
  },
  textLanguage: {
    marginTop: 30,
    textAlign: 'center',
    color: '#495a6a',
    fontFamily: 'Helvetica Arial sans-serif'
  },
  imageContainer: {
    width: '100%',
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle: {
    width: 120,
    height: 120,
  },
  formConatiner: {
    width: '100%',
    height: 300,
  },
  textInputStyle: {
    height: 50,
    color: '#636f79',
    borderColor: '#41535f',
    borderRadius: 12,
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#1c2a33',
    fontFamily: 'Helvetica Arial sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    outlineColor: 'transparent',
    outlineWidth: 0,
  },
  buttonStyle: {
    backgroundColor: '#0064e0',
    padding: 10,
    marginTop: 20,
    width: '96%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  textButtonStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  forgetStyle: {
    marginTop: 14,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500'
  },
  newAccountContainer: {
    width: '100%',
    height: 60,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonNewAccount: {
    backgroundColor: '#10222e',
    padding: 10,
    marginTop: 20,
    width: '96%',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#164571',
    borderWidth: 3
  },
  googleButtonContainer: {
    width: '100%',
    height: 60,
  },
  googleButtonStyle: {
    backgroundColor: '#D40022',
    padding: 10,
    marginTop: 10,
    width: '96%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  googleLogoImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
    top: 16,
    left: 64
  },
  metaLogoContaimer: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  metaLogoImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});

export default LoginScreen;