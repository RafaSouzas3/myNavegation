import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}){
    return(
        <View>
            <View>
                <Text>Nome: Rafael Souza</Text>
                <Text>Telefone: (11)4146-3431</Text>
                <Text 
                onPress={()=> navigation.navigate('Information',
                {
                    nome: 'Rafael Souza',
                    telefone:'',
                    endereço:'',
                    numero:'',
                    profissão:'',
                    email:'',
                }
                )}
                >Information...</Text>
            </View>
            <View style={{marginTop:60}}>
                <Text>Nome: Fran Souza</Text>
                <Text>Telefone: (11)4123-3561</Text>
                <Text 
                onPress={()=> navigation.navigate('Information')}
                >Information...</Text>
            </View>

        </View>
    )
}