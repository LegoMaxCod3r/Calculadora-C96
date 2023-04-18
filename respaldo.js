import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import {Header} from 'react-native-elements';
import elementDB from './db';
import elementData from './elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from 'react-native-elements/dist/helpers';

const copyimg= require("./icons/content_copy_FILL0_wght400_GRAD0_opsz48.png");
var lista = elementData["elements"];
export default class App extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            list_MMA: [],
            list_Atom: [],
            list_Element: [],
            list_Avaible: [
                "H",
                "He",
                "Li",
                "Be",
                "B",
                "C",
                "N",
                "O",
                "F",
            ],
            open: false,
            element: '',
            input: '',
            result: ''
            
        }
    }

   /* mapElements()
    {//

        this.setState(
            {
                list_Avaible: lista,
            });

        console.log(this.state.list_Avaible);
        <View style={styles.mainElementSel}>

            <View style={styles.elementEditorCont}> 
                
            </View>

            <View style={styles.elementMapperCo}>
                <ScrollView>
                {
                    this.state.list_Avaible.map((item, index)=>
                            {
                                return(

                                        <TouchableOpacity
                                            style={styles.elementBtn}
                                            wordChunk = 
                                            {
                                            this.state.chunks[index]
                                            }

                                            soundChunk = 
                                            {
                                            this.state.phonicSounds[index]
                                            }

                                            
                                            
                                        ></TouchableOpacity>
                                );
                            })
                    }

                    
                    
                </ScrollView>
            </View>
        </View>
    }*/

    render()
    {
        return(
            <View style={styles.containerStyle}>

                    <Header
                        centerComponent={
                            {
                                text: 'Element Calculator',
                                style: 
                                {

                                    color: '#FFFFFF',
                                    fontSize: 20.2,

                                }
                            }
                        }
                        
                    />
                    <View style={styles.screenBox}>
                            <View style={styles.inputContainer}>
                                <TextInput                         
                                style=
                                {
                                    {
                                        fontSize: 16,
                                        color: '#FFF',
                                        textAlign: 'right',
                                        height: 40,
                                    }
                                }/>
                            <View/>
                            <View style={styles.answerContainer}  /* */>
                                <Text style=
                                {
                                    {   fontSize: 16,
                                        color: '#FFF',
                                        textAlign: 'right',
                                        height: 20,
                                    }
                                }>
                                d
                                </Text>
                            </View>
                        </View>
                </View>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={{
                        width:20,
                        height:20,
                        margin: 2
                        
                        }}>
                        
                        <Image source={require("./icons/content_copy_FILL0_wght400_GRAD0_opsz48.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={{
                            width:20,
                            height:20,
                            
                            marginBottom: 2,
                            marginLeft: 25,
                            marginTop: 2,
                            marginRight: 2,
                            
                            }}
                        onPress=
                        {() => 
                        { 
                          


                          
                            if(this.state.open === false)
                            {
                                this.setState(
                                    {open: true}
                                    );
                                //this.mapElements();
                                console.log('Abriste la lista')
                                
                            }
                            

                        

                        }}>
                    



                        <Image source={require("./icons/element.png")}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        containerStyle:
        {
            backgroundColor: '#909BA8',
            flex: 1,
        },
        screenBox:
        {
            backgroundColor: '#35393E',
            margin: 10,
            padding: 5,

            width: '80%',
            borderRadius: 25,
            alignSelf: 'center',
    
            
        },
        inputContainer:
        {
            

            fontSize: 16,
            textAlign: 'right',

        },
        answerContainer:
        {
            

            fontSize: 20,
            textAlign: 'right',

        },
        optionsContainer: 
        {
            padding: 10,
            margin: 2,
            alignContent: 'flex-start',
            height: 60,
            flexDirection: 'row',
            flex:1,
            width: '80%',

        },

        mainElementSel:
        {

            flexDirection: 'row',
            padding: 8,

        },

        elementBtn:
        {
            height: 50,
            width: 50,
            backgroundColor: '#4481e3',
            borderColor: '#FFF',
            padding: 2.2,
        },

        elementEditorCont:
        {
            flexDirection: 'column',
            padding: 3,
            backgroundColor: '#484D54',
            margin: 1.3,
            borderRadius:13,
        },

        elementMapperCo:
        {
            flexDirection: 'column',
            padding: 3,
            backgroundColor: '#484D54',
            borderRadius:13,
            margin: 1.3,
        },

    }
)