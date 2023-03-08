import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import bip39 from "bip39";
import "react-native-get-random-values";

import "@ethersproject/shims";

import { ethers, Wallet } from "ethers";
import { mainStyles, recoveryScreenStyles } from "../Styles";
import * as SecureStore from "expo-secure-store";

const RecoverySeedScreen = ({ navigation }: any) => {
  const [seedInput, setSeedInput] = useState(
    "logic custom shuffle horn ocean material enhance blush pride mango diet inmate"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSeedInput = (text: string) => {
    setSeedInput(text);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    try {
      handleGeneratePrivateKey();
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage(
        "Invalid seed. Please enter a valid twelve-word recovery seed."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneratePrivateKey = async () => {
    const wallet = Wallet.fromMnemonic(seedInput);
    await SecureStore.setItemAsync("privateKey", wallet.privateKey);

    navigation.navigate("BalanceScreen");
  };

  return (
    <View style={recoveryScreenStyles.container}>
      <Text style={recoveryScreenStyles.header}>Enter your recovery seed:</Text>
      <TextInput
        style={recoveryScreenStyles.input}
        onChangeText={handleSeedInput}
        value={seedInput}
        multiline={true}
        placeholder="Twelve-word recovery seed"
      />
      {errorMessage ? (
        <Text style={recoveryScreenStyles.errorMessage}>{errorMessage}</Text>
      ) : null}
      {isLoading ? <Text>Loading...</Text> : null}

      {isLoading ? (
        <ActivityIndicator size={"small"} />
      ) : (
        <TouchableOpacity onPress={handleSubmit} style={mainStyles.mainButton}>
          <Text style={mainStyles.mainButtonText}>Recover</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RecoverySeedScreen;
