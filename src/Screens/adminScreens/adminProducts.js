import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';

const AdminProducts = () => {
  const greencolor = '#61b846';

  const toppingsobj = [
    {
      index: '1',
      toppings: 'Pepperoni',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '2',
      toppings: 'Mashroom',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '3',
      toppings: 'Olive',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '4',
      toppings: 'Onions',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '5',
      toppings: 'Capsicum',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '6',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '7',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '8',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '9',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
    {
      index: '10',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      checked: false,
    },
  ];
  return (
      <View  style={{flex: 10 }}>
      <View style={{ width: '100%', alignItems: 'center',height : 100, borderBottomColor: 'lightgray',
          borderBottomWidth: 1, }}>
        <View
          style={{
            width: '90%',
            height: 100,
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
           
      <View style={{flex: 8.5 ,alignItems : 'center'}}>
        <Text style={styles.newtilte}>All Products</Text>

        <FlatList
          keyExtractor={key => {
            return key.index;
          }}
          // horizontal
          data={toppingsobj}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: '#ffffff',
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 5,
                  borderRadius : 20,
                  marginTop: 15,
                  borderWidth: 1,
                  alignSelf: 'center',
                  borderColor: greencolor,
                  height: 100,
                }}>
                <View style={{width: 90, marginLeft: 10}}>
                  <Image
                    style={{width: 90, height: 60, marginTop: 10}}
                    source={require('../../Images/Logo.png')}
                  />
                </View>
                <View
                  style={{
                    // width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: greencolor,
                    }}>
                    {item.toppings}
                  </Text>
                  <Text style={{fontSize: 11, color: '#6d6e9c'}}>
                    {/* //{Units} */}
                    1kg
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: 'center',
                  }}>
                  <Text style={{color:'gray'}}>PKR 150.00</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      </View>
  );
};

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

  newtilte: {
    color: '#024f9d',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    width : '90%',
    // borderColor : 'red',borderWidth:2
  },
});

export default AdminProducts;
