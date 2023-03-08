export interface Screen{
    name:string;
    component:({ navigation ,route}: { navigation?: any,route?:any; }) => JSX.Element
}