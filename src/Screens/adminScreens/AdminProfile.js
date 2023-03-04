import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';

import DocumentPicker from 'react-native-document-picker';

const AdminProfile = ({navigation}) => {
  const [selected, setSelected] = useState(null);

  //document picker function
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelected(result);
      if (result) {
        console.log(selected);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled from single picker');
      } else {
        throw err;
      }
    }
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
        <ScrollView>
      <View style={{alignItems: 'center',}}>
        <Text style={Styles.settings}>Settings</Text>
      </View>
      <View style={{alignItems: 'center',}}>
        <Image source={require('../../Images/Ellipse.png')} />
      </View>
      <View
        style={{
          flexDirection : 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          style={Styles.input1}
          placeholderTextColor={'#D4D3D3'}
          placeholder="Update Full Name"
          />
          <TouchableOpacity>
          <Text style={{paddingTop : 5 , fontSize : 20}} 
          //onPress={
            //function}
          >✅</Text>
          </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center',width : '100%' ,  }}>
        <View style={Styles.imginp}>
            <TouchableHighlight onPress={pickDocument}>
              <Image source={require('../../Images/image32.png')} />
            </TouchableHighlight>
          </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent : 'space-between',
            width: '90%',
          }}>
          <TextInput
            style={Styles.input2}
            placeholderTextColor={'gray'}
            placeholder="new category name"
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#61B846',
              borderRadius: 20,
              width : '23%',
              height : 50,
              justifyContent :'center',
              alignItems : 'center'
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color:'white'
              }}>
              ADD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width : '100%', padding : 10 , alignItems : 'center'}}>
        <Text style={{ width : '90%',color: '#024F9D', fontWeight: '700', fontSize: 20}}>
          All Categories
        </Text>
      </View>
      <ScrollView style={{height: 250}}>
        <View
           style={Styles.categoryBox}>
          <Image
            style={{marginLeft: 50, width: 50, height: 40}}
            source={require('../../Images/image32.png')}
          />
          <Text
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontWeight: '700',
              color: '#61B846',
            }}>
            Fruits
          </Text>
        </View>
        <View
          style={Styles.categoryBox}>
          <Image
            style={{marginLeft: 50, width: 50, height: 40, marginTop: 5}}
            source={require('../../Images/image32.png')}
          />
          <Text
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontWeight: '700',

              color: '#61B846',
            }}>
            Meat
          </Text>
        </View>
        <View
           style={Styles.categoryBox}>
          <Image
            style={{marginLeft: 50, width: 50, height: 40, marginTop: 5}}
            source={require('../../Images/image32.png')}
          />
          <Text
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontWeight: '700',
              color: '#61B846',
            }}>
            Vegetables
          </Text>
        </View>
        <View
           style={Styles.categoryBox}>
          <Image
            style={{marginLeft: 50, width: 50, height: 40, marginTop: 5}}
            source={require('../../Images/image32.png')}
          />
          <Text
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontWeight: '700',
              color: '#61B846',
            }}>
            Vegetables
          </Text>
        </View>
      </ScrollView>
      <View style={{width : '100%' , alignItems : 'center' ,}}>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.btntxt}>Logout</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({  btntxt: {
  color: 'white',
  fontSize: 29,
  fontWeight: 'bold',
},
  settings: {
    color: '#024F9D',
    fontWeight: '600',
    fontSize: 22,
    marginVertical: 10,
  },
  imginp: {
    backgroundColor: 'lightgray',
    height: 120,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop:5
  },
  input1: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 2 ,
    borderColor: '#D4D3D3',
    fontSize: 20,
    color: 'gray',
    borderBottomColor:"#BDBABA"
  },
  categoryBox:{
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#61B846',
    borderWidth: 1,
    height: 65,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 8,
    borderRadius: 14,
  },
  input2: {
    height: 50,
    width: '75%',
    padding: 8,
    fontSize: 18,
    color: 'gray',
    backgroundColor: 'lightgray',
    borderRadius : 20,
    marginTop : 5
  },
  cameraback: {
    height: 125,
    width: 350,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 14,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#61B846',
    padding: 15,
    width: '90%',
    borderRadius: 20,
    justifyContent : 'center',
    // height : '30%'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default AdminProfile;
