import { getprodKey } from './prod';
import {getdevKey } from './dev';
var key = '';
export const getKey = () =>{
    if(process.env.NODE_ENV === 'production'){
        //prod
        key = getprodKey();
        console.log("production");
    } else {
        // dev
        key = getdevKey();
        console.log("dev");
    }
    return key;
}




