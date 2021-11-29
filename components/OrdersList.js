import React, { useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View, FlatList, Button } from 'react-native';

import OrderItem from './OrderItem';

const OrdersList = ( { orders, addOrder, removeOrder } ) => {

    const [ active, setActive ] = useState( false );

    const toggleActive = () => { setActive( ! active ) };

    const handleAddOrder = () => {

        addOrder({
            
            source_name: 'KFC',
            source_img: 'http://assets.stickpng.com/images/58429977a6515b1e0ad75ade.png',
            customer_name: 'Jihad Ibrahim',

        });

    };

    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={toggleActive}>
                <View style={styles.header}>
                    <View style={styles.shortBar}></View>
                    <Text style={styles.headerText}>Orders</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={[styles.ordersList, ( active ? styles.activeOrdersList : {} )]}>
                <FlatList
                    contentContainerStyle={{width: '100%'}}
                    ListEmptyComponent={<Text>No Orders Available.</Text>}
                    data={orders}
                    renderItem={ ({item}) => <OrderItem orderItem={item} removeOrder={removeOrder} /> }
                    keyExtractor={ (item) => item.id }
                />
                <Button
                    onPress={handleAddOrder}
                    title="Add Order"
                    color="#841584"
                    accessibilityLabel="Add Order"
                />
            </View>
        </View>

    );

};

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ededed',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        bottom: 0,
    },

    header: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },

    shortBar: {
        width: 120,
        height: 3,
        backgroundColor: '#333',
        borderRadius: 15,
    },

    headerText: {
        fontSize: 24,
        fontWeight: '600',
        paddingTop: 10,
    },

    ordersList: {
        width: '100%',
        alignItems: 'center',
        height: 0,
    },

    activeOrdersList: {
        height: 200,
        padding: 20,
    },
    
});

export default OrdersList;