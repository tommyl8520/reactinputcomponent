

import React, {useState} from 'react';

import {
  SafeAreaView, TextInput

} from 'react-native';


const App = () => {

    const [textValue, setTextValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [email, setEmail] = useState('');

    return (

    <SafeAreaView>
        <TextInput
            style= {{borderWidth:1, padding:10, borderRadius: 4,}}
            value={textValue}
            onChangeText={value =>{
             console.log(value);
             setTextValue(value);

             }}
             autoFocus={true}
             keyboardType={'default'}

             placeholder={'Please enter your name here'}
             />
               <TextInput
                         style= {{borderWidth:1, padding:10, borderRadius: 4,}}
                         value={textValue}
                         onChangeText={value =>{
                          console.log(value);
                          setTextValue(value);

                          }}
                          returnKeyType={'done'}
                          autoFocus={true}
                          keyboardType={'email-address'}

                          placeholder={'Please enter your email here'}
                          />


          <TextInput
            style= {{borderWidth:1, padding:10, borderRadius: 4,}}
            value={passwordValue}
            onChangeText={value =>{
             console.log(value);
             setPasswordValue(value);

             }}
             returnKeyType={'next'}
             keyboardType={'default'}
            // keyboardType={'numeric'}
            // keyboardType={'phone-pad'}
             secureTextEntry={true}
             autoFocus={true}

             placeholder={'Please enter your password'}



        />

    </SafeAreaView>

);

};



export default App;