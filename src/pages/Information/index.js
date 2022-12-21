import React from "react";
import { View, Text } from "react-native";

export default function Contacts({route}){
    return(
        <View >
            <Text>Nome:{route.params?.nome} </Text>
            <Text>Telefone:{route.params?.telefone}</Text>
            <Text>Endereço: {route.params?.endereço}</Text>
            <Text>N: {route.params?.numero}</Text>
            <Text>Profissão: {route.params?.profissão}</Text>
            <Text>Email: {route.params?.email}</Text>
        </View>
    )
}