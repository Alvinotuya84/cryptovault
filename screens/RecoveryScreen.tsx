import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import bip39 from "bip39";
import "react-native-get-random-values";

import "@ethersproject/shims";

import { ethers, Wallet } from "ethers";

const RecoverySeedScreen = ({ navigation }: any) => {
  const [seedInput, setSeedInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleSeedInput = (text: string) => {
    setSeedInput(text);
  };

  const handleSubmit = () => {
    console.log(privateKey);

    // handleGeneratePrivateKey();

    navigation.navigate("BalanceScreen", {
      privateKey:
        "0x35f5510b7caa9456125f6d734d506957d077f0cd9f398095cad218054269810b",
    });

    // setErrorMessage(
    //   "Invalid seed. Please enter a valid twelve-word recovery seed."
    // );
  };

  const handleGeneratePrivateKey = () => {
    const wallet = Wallet.fromMnemonic(
      "logic custom shuffle horn ocean material enhance blush pride mango diet inmate"
    );
    setPrivateKey(wallet.privateKey);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your recovery seed:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleSeedInput}
        value={seedInput}
        multiline={true}
        placeholder="Twelve-word recovery seed"
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
});

export default RecoverySeedScreen;
