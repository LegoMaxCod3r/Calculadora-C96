import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import {Header} from 'react-native-elements';
//import elementDB from './db';
import elementData from './elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from 'react-native-elements/dist/helpers';

const copyimg= require("./icons/content_copy_FILL0_wght400_GRAD0_opsz48.png")

const elementDB=
[
  
    {
        value: "1.00794",
        title: "H",
        type: "G",
        //gasColor: "#f01a45",
        number: 1
    },
    
    {
        value: "4.0026",
        title: "He",
        type: "M",
        //metalColor: "#4481e3",
        number: 2
    },
    
    {
        value: "6.941",
        title: "Li",
        type: "M",
        //metalColor: "#4481e3",
        number: 3
    },
    
    {
        value: "9.0122",
        title: "Be",
        type: "M",
        //metalColor: "#4481e3",
        number: 4
    },
  
    {
        value: "10.811",
        title: "B",
        type: "ML",
        //metaLLColor: "#14db60",
        number: 5
    },
    
    {
        value: "12.011",
        title: "C",
        type: "G",
        //gasColor: "#f01a45",
        number: 6
    },
    
    {
        value: "14.007",
        title: "N",
        type: "G",
        //gasColor: "#f01a45",
        number: 7
    },
    
    {
        value: "15.999",
        title: "O",
        type: "G",
        //gasColor: "#f01a45",
        number: 8
    },
    
    {
        value: "18.998",
        title: "F",
        type: "G",
        //gasColor: "#f01a45",
        number: 9
    },
    
    {
        value: "20.180",
        title: "Ne",
        type: "G",
        //gasColor: "#f01a45",
        number: 10
    }
    ,
  
    {
        value: "22.990",
        title: "Na",
        type: "M",
        //metalColor: "#4481e3",
        number: 11
    },
    
    {
        value: "24.305",
        title: "Mg",
        type: "M",
        //metalColor: "#4481e3",
        number: 12
    },
    
    {
        value: "26.982",
        title: "Al",
        type: "M",
        //metalColor: "#4481e3",
        number: 13
    },
    
    {
        value: "26.982",
        title: "Si",
        type: "ML",
        //metaLLColor: "#14db60",
        number: 14
    },
  
    {
        value: "28.086",
        title: "P",
        type: "G",
        //gasColor: "#f01a45",
        number: 15
    },
    {
        value: "32.065",
        title: "S",
        type: "G",
        //gasColor: "#f01a45",
        number: 16
    },
]



var lista;
export default class App extends React.Component
{
    

    constructor(props)
    {
        super(props);
        this.state=
        {
            list_MMA: [],
            list_Atom: [],
            list_Element: [],
            list_Avaible: ["H","He","Li","Be","B","C","N","O","F"],
            open: false,
            element: '',
            input: '',
            result: '',
        }
    }


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

                            <View style={styles.answerContainer}>
                                <Text style=
                                {
                                    {                                        fontSize: 16,
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
                <View >
                        <Text
                        
                        >Lista de elementos</Text>

                      { 
                        console.log(elementDB)
                      }
                        
                        <View >
                        <ScrollView>
                          {
                          elementDB.map((elem) =>
                            <TouchableOpacity key={elem.number} style={
                                {
                                    backgroundColor: elem.type === "M"
                                    ? "#4481e3"
                                    : elem.type === "G"
                                    ?"#f01a45"
                                    : elem.type === "ML"
                                    ? "#14db60":"#FFF"


                                }
                                }>
                              <Text style=
                            {
                                {
                                    padding: 2,
                                    textAlign: 'right',
                                }
                            }>{elem.title}</Text>
                              <Text>Peso Atomico: {elem.value}</Text>
                            </TouchableOpacity>)
                          }
                        </ScrollView>  
                        </View>
                        
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
        
        },

        container: 
        {
          backgroundColor: '#fff9c4',
          padding: '10px 50px 60px 50px'
        },

        listItem: 
        {
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            padding: 6,
            paddingBottom: 10,
            color: '#FFF',
            borderTop: '1px dashed #ccc',
            textAlign: 'center',
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

/**
 * Este Si funciona
 */