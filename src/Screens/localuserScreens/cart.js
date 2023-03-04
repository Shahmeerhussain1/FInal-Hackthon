import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import Trash from 'react-native-vector-icons/FontAwesome';

const Carts = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.cart_body}>
          <View style={{width: '100%'}}>
            <View style={styles.image_parent}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../Images/Ellipse.png')}
              />
            </View>
            <View style={styles.header_cart}>
              <View style={{width: '90%' ,flexDirection: 'row', justifyContent : 'space-between'}}>
                <View style={styles.cart_heading}>
                  <Text style={styles.logotext}>Shopping</Text>
                  <Text style={styles.logotext2}>Cart</Text>
                </View>

                <View style={styles.cart_heading2}>
                  <TouchableOpacity >
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('../../Images/Frame.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.header_two}>
            <View>
              <Image
                style={styles.logoImage}
                source={require('../../Images/Rectangle.png')}
              />
            </View>

            <View style={{justifyContent: 'center',width : '25%'}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>ITEfffffffffffffffffffffffffffffffffffM NAME</Text>
            </View>

            <View style={styles.decincpar}>
              <Text style={styles.incdec}>+</Text>
              <Text style={styles.incdec}>1</Text>
              <Text style={styles.incdec}>-</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>250</Text>
            </View>
          </View>

          <View style={styles.header_two}>
            <View>
              <Image
                style={styles.logoImage}
                source={require('../../Images/Rectangle2.png')}
              />
            </View>
            <View style={{justifyContent: 'center',width : '25%'}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>ITEM fffffffffffffffffffffffffffffffffffffffffffNAME</Text>
            </View>
            <View style={styles.decincpar}>
              <Text style={styles.incdec}>+</Text>
              <Text style={styles.incdec}>1</Text>
              <Text style={styles.incdec}>-</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>450</Text>
            </View>
          </View>

          <View style={styles.header_two}>
            <View>
              <Image
                style={styles.logoImage}
                source={require('../../Images/Rectangle.png')}
              />
            </View>

            <View style={{justifyContent: 'center',width : '25%'}}>
              <Text style={{fontWeight: 'bold', color: 'gray' }}>ITEM NAfffffffffffffffffffMEfgsfdgdrtderseersefsd</Text>
            </View>

            <View style={styles.decincpar}>
              <Text style={styles.incdec}>+</Text>
              <Text style={styles.incdec}>1</Text>
              <Text style={styles.incdec}>-</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>350</Text>
            </View>
          </View>

          <View style={styles.Total_Amount}>
            <Text style={{fontWeight: 'bold', color: 'gray'}}> Total</Text>
            <Text style={{fontWeight: 'bold', color: 'gray'}}> 1050</Text>
          </View>

          <View style={styles.header_three}>
            <TextInput
              style={styles.input1}
              placeholderTextColor={'#D4D3D3'}
              placeholder="Full Name"
            />
            <TextInput
              style={styles.input1}
              placeholderTextColor={'#D4D3D3'}
              placeholder="Email"
            />
            <TextInput
              style={styles.input1}
              placeholder="Phone Number"
              placeholderTextColor={'#D4D3D3'}
            />
            <TextInput
              style={styles.input1}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={'#D4D3D3'}
            />
            <View style={styles.button_div}>
              <TouchableOpacity
                // onPress={() => navigation.navigate('Login')}
                style={styles.button}>
                <Text style={styles.buttonText}>Place Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cart_heading: {

    width: '40%',
  },
  cart_heading2: {

    width: '40%',
    flexDirection:'row',
    justifyContent : 'flex-end',
    alignItems : 'center'
  },
  decincpar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '15%',
  },
  incdec: {
    color: 'gray',
    fontWeight: 'bold',
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'lightgray',
  },
  cart_body: {
    backgroundColor: '#fff',
    height: '100%',
  },
  image_parent: {
    alignItems: 'flex-end',
    padding: 10,
  },
  header_cart: {
   
    width: '100%',
    alignItems: 'center',
  },
  logotext2: {
    color: '#024F9D',
    fontSize: 13,
    fontWeight: '600',
  },
  header_two: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
    borderColor:'red',
    borderWidth : 2,
  
  },
  logotext: {
    color: '#61B846',
    fontSize: 23,
    fontWeight: '700',
  },
  line: {
    width: '80%',
    backgroundColor: '#BFBCBC',
    height: 2,
    marginLeft: 40,
    marginTop: 50,
  },

  Total_Amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },

  header_three: {
    justifyContent: 'center',
    width: '60%',
    marginLeft: 40,
  },

  input1: {
    height: 40,
    borderBottomWidth: 0.5,
    padding: 10,
    marginTop: 15,
    borderColor: '#D4D3D3',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#61B846',
    padding: 15,
    width: '85%',
    margin: 'auto',
    marginTop: 40,
    borderRadius: 15,
    elevation: 8,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  button_div: {
    alignItems: 'center',
  },
  logoImage: {
    width: 110,
    height:  110,

  },
});
export default Carts;
