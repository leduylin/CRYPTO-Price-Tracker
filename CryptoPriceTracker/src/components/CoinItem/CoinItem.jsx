import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default CoinItem = () => {
    return (
        <View style={styles.coinContainer}>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'}} 
            style={{height:30, width:30, marginRight: 10, alignSelf: 'center'}}/>
            <View>
                <Text style={styles.title}>Bitcoin</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>1</Text>
                    </View>
                    <Text style={styles.text}>BTC</Text>
                    <AntDesign name='caretdown' 
                        size={12} 
                        color='white' 
                        style={{alignSelf:'center', marginRight: 5}}/>
                    <Text style={styles.text}>0.63%</Text>
                </View>
            </View>
            <View style={{marginLeft: 'auto'}}>
                    <Text style={styles.title}>56256.09</Text>
                    <Text style={styles.text}>MCAP 1.076 T</Text>
                </View>
        </View>
    );
}

