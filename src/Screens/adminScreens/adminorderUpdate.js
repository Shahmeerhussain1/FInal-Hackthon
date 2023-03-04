import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import React, {useState, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Orders() {
  const [selected, setSelected] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Pending', value: 'pending'},
    {label: 'In-Progress', value: 'in-progress'},
    {label: 'Delivered', value: 'delivered'},
    {label: 'Cancelled', value: 'cancelled'},
  ]);
  const pickerRef = useRef();

  return (
    <ScrollView style={{flex: 10}}>
      {/* header */}
      <View
        style={{
          flex: 1.5,
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
          alignItems: 'center',
          height: 100,
        }}>
        <View
          style={{
            width: '90%',
            height: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: '30%',
                height: '45%',
                marginRight: 5,
              }}>
              <Image source={require('../../Images/Ellipse.png')} />
            </View>
            <View>
              <Text style={styles.adminName}>Mr.Ahmed</Text>
              <Text style={styles.adminSpecialName}>Admin</Text>
            </View>
          </View>
          <Image source={require('../../Images/pool.png')} />
        </View>
      </View>
      <View style={{flex: 8.5, alignItems: 'center'}}>
        <Text style={styles.newtilte}>Orders</Text>

        {/* conditional if product show, it'll show other wise it will now show the product details */}
        <ScrollView style={{width: '90%'}}>
          {/* ///starts from here */}
          <View
            style={{
              width: '100%',
              borderTopColor: 'gray',
              borderTopWidth: 2,
              justifyContent: 'center',
              marginTop: 9,
            }}>
            <View style={{width: '100%'}}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'black', fontWeight : 'bold' , fontSize : 20}}>Inzamam Malik</Text>
                <Text style={{color: '#61b846', fontWeight : 'bold' , fontSize : 20}}>03123445566</Text>
              </View>

              <View>
                <Text style={{color: 'black'}}>
                  {selectedValue ? selectedValue : ''}
                </Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black' , fontWeight : 'bold' , fontSize : 20}}>Total</Text>
                <Text style={{color: '#61b846', fontWeight : 'bold' , fontSize : 20}}>200.00</Text>
              </View>
              <View style={styles.picker}>
                <Picker
                  ref={pickerRef}
                  selectedValue={selectedValue}
                  style={{color: 'gray', width: '100%', padding: 10}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }>
                  <Picker.Item
                    style={{fontSize: 20, fontWeight: 800}}
                    label="Pending"
                    value="Pending"
                  />
                  <Picker.Item
                    style={{fontSize: 20, fontWeight: 800}}
                    label="In Progress"
                    value="In Progress"
                  />
                  <Picker.Item
                    style={{fontSize: 20, fontWeight: 800}}
                    label="Canceled"
                    value="Canceled"
                  />
                  <Picker.Item
                    style={{fontSize: 20, fontWeight: 800}}
                    label="Delevired"
                    value="Delevired"
                  />
                </Picker>
              </View>
            </View>
          </View>




          <View
            style={{
              width: '100%',
              borderTopColor: 'gray',
              borderTopWidth: 2,
              justifyContent: 'center',
              marginTop: 9,
            }}>
            <View style={{width: '100%'}}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'black', fontWeight : 'bold' , fontSize : 20}}>Inzamam Malik</Text>
                <Text style={{color: '#61b846', fontWeight : 'bold' , fontSize : 20}}>03123445566</Text>
              </View>

              <View>
                <Text style={{color: 'black'}}>
                  {selectedValue ? selectedValue : ''}
                </Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
                <Text style={{color: 'black'}}>ITEM Name</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black' , fontWeight : 'bold' , fontSize : 20}}>Total</Text>
                <Text style={{color: '#61b846', fontWeight : 'bold' , fontSize : 20}}>200.00</Text>
              </View>
              <View style={styles.picker}>
                <Picker
                  ref={pickerRef}
                  selectedValue={selectedValue}
                  style={{color: 'gray', width: '100%', padding: 10}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }>
                  <Picker.Item
                    style={{fontSize: 20, fontWeight: 800}}
                    label="Pending"
                    value="Pending"
                  />
                  <Picker.Item
                    style={{fontSize: 20, fontWeight: 800}}
                    label="In Progress"
                    value="In Progress"
                  />
                  <Picker.Item
                    style={{fontSize: 20, fontWeight: 800}}
                    label="Canceled"
                    value="Canceled"
                  />
                  <Picker.Item
                    style={{fontSize: 20, fontWeight: 800}}
                    label="Delevired"
                    value="Delevired"
                  />
                </Picker>
              </View>
            </View>
          </View>
          



        </ScrollView>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  adminName: {
    color: '#024f9d',
    fontSize: 30,
    fontWeight: 'bold',
  },
  adminSpecialName: {
    color: '#61b846',
    fontSize: 30,
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: 'lightgray',
    height: 40,
    width: '100%',
    borderRadius: 20,
    marginTop: 5,
    justifyContent: 'center',
  },
  newtilte: {
    color: '#024f9d',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    width: '90%',
    // borderColor : 'red',borderWidth:2
  },
});
