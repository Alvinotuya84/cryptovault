import React, { useState, useEffect, useMemo } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import "react-native-get-random-values";
import { FontAwesome5 } from "@expo/vector-icons";

import { Card } from "@rneui/themed";

import "@ethersproject/shims";
import { ethers, BigNumberish } from "ethers";
import { balanceScreenStyles, mainStyles } from "../Styles";
import * as SecureStore from "expo-secure-store";

interface BalanceScreenProps {
  route: any;
}

function BalanceScreen({ route }: BalanceScreenProps) {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("0");

  const [privateKey, setPrivateKey] = useState("");

  const getPrivateKey = async () => {
    let key = await SecureStore.getItemAsync("privateKey");
    setPrivateKey(key);
  };

  useMemo(() => getPrivateKey(), []);

  useEffect(() => {
    const provider = new ethers.providers.InfuraProvider(
      "goerli",
      "b9863d32df714dafafe341bab57de0a5"
    );
    if (privateKey) {
      const wallet = new ethers.Wallet(privateKey, provider);

      const getAddress = async () => {
        const walletAddress = await wallet.getAddress();
        setAddress(walletAddress);
      };
      getAddress();

      const getBalance = async () => {
        const walletBalance: BigNumberish | undefined =
          await wallet.provider?.getBalance(address);
        const formattedBalance = ethers.utils.formatEther(walletBalance);
        setBalance(formattedBalance);
      };
      getBalance();
    }
  }, [privateKey]);

  function WalletAddress(address: string) {
    const maxLength = 6;
    const ellipsis = "\u2026";

    const initialChars = address.slice(0, maxLength);
    const endChars = address.slice(-maxLength);

    return `${initialChars}${ellipsis}${endChars}`;
  }
  return (
    <View style={{ flex: 1 }}>
      <Card containerStyle={{ height: "30%", paddingVertical: 20 }}>
        <View style={balanceScreenStyles.topOfProfile}>
          <FontAwesome5 name="ethereum" size={24} color="black" />
          <Text style={balanceScreenStyles.h1}>
            {privateKey ? `${WalletAddress(address)}` : "loading..."}
          </Text>
        </View>
        <View style={balanceScreenStyles.profileBody}>
          <Text style={balanceScreenStyles.h1}>
            Balance {privateKey ? `${balance} ETH` : "loading..."}
          </Text>
        </View>
        <TouchableOpacity style={mainStyles.mainButton}>
          <Text style={mainStyles.mainButtonText}>Trade</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

export default BalanceScreen;
