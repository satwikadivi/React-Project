import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const productsSlice=createSlice({
    name:'products',
    initialState:{ vegItems:[{image:"potato.jpg",name:"Potato",price:100},
        {image:"tomato.jpg",name:"Tomato",price:200},
        {image:"onion.jpg",name:"Onion",price:150},
        {image:"ladiesfinger.jpg",name:"LadiesFingures",price:70},
        {image:"beans.jpg",name:"Beans",price:50},
        {image: "carrot.jpg", name: "Carrot", price: 45 },
        {image: "capscium.jpg", name: "Capsicum", price: 60 },
        {image: "cabbage.jpg", name: "Cabbage", price: 25 },
        {image: "cauliflower.jpg", name: "Cauliflower", price: 55 },
        {image: "brinjal.jpg", name: "Brinjal", price: 50 },
        {image: "kakara.JPG", name: "Kakarakaya", price: 30},
        {image: "drumstick.png", name: "DrumStick", price: 40 },
        {image: "donda.jpg", name: "Dondakaya", price: 40 },
        { image: "beetroot.jpg", name: "Beetroot", price: 50 },
        {image: "dosa.jpg", name: "Dosakaya", price: 40 }

    ],
    nonvegItems:[{image:"chicken.avif",name:"Chicken",price:300},
        {image: "crabs.jpg",name:"Crabs",price:50},
        {image: "mutton.avif",name:"Mutton",price:850},
        {image: "fish.png",name:"Fish",price:400},
        {image: "prawns.jpg",name:"Prawns",price:350},
        {image: "egg_basket.jpg",name:"Eggs-12",price:150}
    ],
    milkItems:[{image: "milk1.jpg",name:"Milk",price:30},
        {image: "curd.jpg",name:"Curd",price:10},
        {image: "paneer.jpg",name:"Paneer",price:250},
        {image: "ghee.jpg",name:"Ghee",price:200},
        {image: "cheese.png",name:"Cheese",price:150},
        {image: "butter.webp",name:"Butter",price:230}
    ],
},
reducers:{}
})

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addTocart:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
        if(item)
        {
           item.quantity+=1;
        }
        else
        {
            state.push({...action.payload,quantity:1});
        }
    },
    increment:(state,action)=>{
        const item=state.find(item=>item.name===action.payload.name);
        if(item)
        {
            item.quantity+=1;
        }
    },
    decrement:(state,action)=>{
        const item=state.find(item=>item.name===action.payload.name);
        if(item && item.quantity>0)
        {
            item.quantity-=1;
        }
        else{
            return state.filter(item=>item.name!==action.payload.name);
        }
    },
    remove:(state,action)=>{
        return state.filter(item=>item.name!==action.payload.name);
    },
    clearcart:()=>[],
}
})
const purchaseDetailsSlice=createSlice({
    name:'purchasedetails',
    initialState:[],
    reducers:{
        completepurchase:(state,action)=>{
            state.push(action.payload);
        }
    }
})

const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:localStorage.getItem("usename")?true:false,
        user:localStorage.getItem("username")||""
    },
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username",action.payload);
        },
        logout:(state)=>{
            state.isAuthenticated=false;
            state.user="";
            localStorage.removeItem("username");
        },
    }
})

//configure the store
const store=configureStore({
    reducer:{products:productsSlice.reducer,
        cart:cartSlice.reducer,
        purchasedetails:purchaseDetailsSlice.reducer,
        auth:authSlice.reducer},
})

export const {addTocart,increment,decrement,remove,clearcart}=cartSlice.actions;
export const {completepurchase}=purchaseDetailsSlice.actions;
export const {login,logout}=authSlice.actions;

//export the store
export default store;