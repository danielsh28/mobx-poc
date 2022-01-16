import {makeAutoObservable} from "mobx";
import * as React from "react";
import  {getRandomUser} from "./user.service";
import nisim1 from './images/WhatsApp Image 2022-01-08 at 02.40.01.jpeg';
import nisim2 from './images/WhatsApp Image 2022-01-08 at 02.40.01.jpeg';
import nisim4 from './images/863f2a16-6855-4c5f-94f0-e3c00d31f942.jpeg';
import nisim5 from './images/WhatsApp Image 2022-01-08 at 02.40.02 (2).jpeg';
import nisim6 from './images/WhatsApp Image 2022-01-08 at 02.40.02 (1).jpeg';
import nisim7 from './images/WhatsApp Image 2022-01-08 at 02.40.02 (1).jpeg';
import nisim8 from './images/WhatsApp Image 2022-01-08 at 02.40.01 (1).jpeg';


const nisimImgs : Array<string> = [nisim1,nisim2,nisim4,nisim5,nisim6,nisim7,nisim8]

interface Iuser{
    name? : string;
    img?: string;
    gender?: string;
    from?:string;

}

class RootStore {
    nisimAvatar :string | null = null;
    user :Iuser | null = null;
    savedUsers:  Array<Iuser> = [];
    isImgLoaded: boolean = false;



    constructor() {
        makeAutoObservable(this);
    }

    setIsLoaded(loaded : boolean) {
        this.isImgLoaded = loaded;
    }

    getUser() {
        this.setIsLoaded(false)
        getRandomUser().then(user => {
            this.setIsLoaded(true);
            this.user = user
        })
    }

    generateNisimPhoto(){
        this.nisimAvatar =  nisimImgs[Math.floor(Math.random())* 6];
    }

    attachNisimToUser(){
        this.user.img = this.nisimAvatar;
        this.nisimAvatar = null;
    }


}

const store = new RootStore();
export const StoreContext = React.createContext(store);
export const useStore = (): RootStore => {
    const store = React.useContext(StoreContext);
    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('You have forgot to use StoreProvider, shame on you.');
    }
    return store;
};
