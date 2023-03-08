import BalanceScreen from "./screens/BalanceScreen";
import RecoverySeedScreen from "./screens/RecoveryScreen";
import { Screen } from "./types";

export const screens:Screen[]=[

    {
        name:"RecoverySeedScreen",
        component:RecoverySeedScreen,
        title:"Recovery",
        id:2,
        iconName:"home"
    },
    {
        name:"BalanceScreen",
        component:BalanceScreen,
        title:"Balance",
        id:3,
        iconName:"ethereum"
    },



];