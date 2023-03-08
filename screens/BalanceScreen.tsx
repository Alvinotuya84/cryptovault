import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import "react-native-get-random-values";

import "@ethersproject/shims";
import { ethers, BigNumberish } from "ethers";

interface BalanceScreenProps {
  route: any;
}

function BalanceScreen({ route }: BalanceScreenProps) {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("0");
  const { privateKey } = route.params;

  useEffect(() => {
    const provider = new ethers.providers.InfuraProvider(
      "goerli",
      "b9863d32df714dafafe341bab57de0a5"
    );

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
  }, [privateKey]);

  return (
    <View>
      <Text>Address: {address}</Text>
      <Text>Balance: {balance} ETH</Text>
    </View>
  );
}

export default BalanceScreen;
