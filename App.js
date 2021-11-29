import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import OrdersList from './components/OrdersList';

const App = () => {

    const [ orders, setOrders ] = useState([]);

    const addOrder = order => {

        setOrders(
            
            prevOrders => [ ...prevOrders, {
                id: ( orders.length === 0 ? '213415' : ( parseInt( orders[ orders.length-1 ].id, 10 ) + 1 ) ),
                status: ( orders.length === 0 ? 'processing' : 'on hold' ),
                ...order
            } ]
        
        );

    };

    const removeOrder = id => {

        setOrders(

            prevOrders => {

                const newOrders = prevOrders.filter( item => id !== item.id );

                newOrders.length && (newOrders[0].status = 'processing');

                return newOrders;
                
            },

        );

    };

    return (
    
        <View style={styles.container}>
            <OrdersList orders={orders} addOrder={addOrder} removeOrder={removeOrder} />
        </View>
    );

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
    
});

export default App;