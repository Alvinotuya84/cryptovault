import BalanceScreen from "./screens/BalanceScreen";
import RecoverySeedScreen from "./screens/RecoveryScreen";
import { Screen } from "./types";

export const screens:Screen[]=[
    {
        name:"RecoverySeedScreen",
        component:RecoverySeedScreen
    },
    {
        name:"BalanceScreen",
        component:BalanceScreen
    },


];