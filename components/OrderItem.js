import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const OrderItem = ( {
    
    orderItem,
    removeOrder,

} ) => {

    const handleRemoveOrder = id => removeOrder(id);

    return (

        <View style={styles.container}>
            <Text>{orderItem.id}</Text>
            <Text>{orderItem.status}</Text>
            <Text>{orderItem.source_name}</Text>
            { orderItem.status === 'processing' && (
            
                <Button
                    onPress={() => {handleRemoveOrder(orderItem.id)}}
                    title="Mark Done"
                    color="#841584"
                    accessibilityLabel="Mark Done"
                />
            ) }
        </View>

    );

};

const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});

export default OrderItem;