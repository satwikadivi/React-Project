import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const productsSlice=createSlice({
    name:'products',
    initialState:{ vegItems:[{image:"potato.jpg",name:"Potato",quantity:"1kg",price:100},
        {image:"tomato.jpg",name:"Tomato",quantity:"1kg",price:200},
        {image:"onion.jpg",name:"Onion",quantity:"3kgs",price:150},
        {image:"ladiesfinger.jpg",name:"LadiesFingures",quantity:"1kg",price:70},
        {image:"beans.jpg",name:"Beans",quantity:"1kg",price:50},
        {image: "carrot.jpg", name: "Carrot",quantity:"1kg",price: 45 },
        {image: "capscium.jpg", name: "Capsicum",quantity:"1kg",price: 60 },
        {image: "cabbage.jpg", name: "Cabbage",quantity:"500grms",price: 25 },
        {image: "cauliflower.jpg", name: "Cauliflower",quantity:"1kg",price: 55 },
        {image: "brinjal.jpg", name: "Brinjal",quantity:"1kg",price: 50 },
        {image: "kakara.JPG", name: "Bitter Gourd",quantity:"500grams",price: 30},
        {image: "drumstick.png", name: "DrumStick",quantity:"3",price: 40 },
        {image: "donda.jpg", name: "Coccinia(Dondakaya)",quantity:"250grams",price: 40 },
        { image: "beetroot.jpg", name: "Beetroot",quantity:"1kg",price:50 },
        {image: "dosa.jpg", name: "Cucumber(Dosakaya)",quantity:"500grams",price: 40 },
        {image: "mirchi.webp", name: "Chilli",quantity:"1kg",price: 120 }
    ],
    nonvegItems:[{image:"chicken.avif",name:"Chicken",quantity:"1kg",price:300},
        {image: "crabs.jpg",name:"Crabs",quantity:"2kgs",price:700},
        {image: "mutton.jpg",name:"Mutton",quantity:"1kg",price:850},
        {image: "fish.png",name:"Fish",quantity:"1kg",price:400},
        {image: "prawns.jpg",name:"Prawns",quantity:"500grams",price:200},
        {image: "egg_basket.jpg",name:"Eggs",quantity:"12",price:150},
        { image: "chicken liver.avif", name: "Chicken Liver",quantity:"500grams",price: 400 },
        { image: "smallfish.jpg", name: "Small Fishes",quantity:"1kg",price: 300 },
    ],
    milkItems:[{image: "milk1.jpg",name:"Milk",quantity:"5kg",price:200},
        {image: "curd.jpg",name:"Curd",quantity:"500grms",price:70},
        {image: "paneer.jpg",name:"Paneer",quantity:"1kg",price:250},
        {image: "ghee.jpg",name:"Ghee",quantity:"300grams",price:200},
        {image: "cheese.png",name:"Cheese",quantity:"1kg",price:150},
        {image: "butter.webp",name:"Butter",quantity:"1kg",price:130},
        {image: "yogurt.webp", name: "Yogurt",quantity:"250grams",price: 70 },
        { image: "condensedmilk.webp", name: "Condensed Milk",quantity:"500grms",price: 200 },
    ],
    fruits:[{image:"apple.jpg",name:"Apple",quantity:"6pcs",price:100},
        { image: "banana.jpg", name: "Banana",quantity:"12pcs",price: 50 },
        { image: "orange.webp", name: "Orange",quantity:"15pcs",price: 80 },
        { image: "grapes.jpg", name: "Grapes",quantity:"1kg",price: 120 },
        { image: "mango.jpg", name: "Mango",quantity:"4pcs",price: 150 },
        { image: "watermelon.jpg", name: "Watermelon",quantity:"1pcs",price: 70 },
        { image: "strawberry.jpg", name: "Strawberry",quantity:"400grms",price: 200 },
        { image: "pineapple.jpg", name: "Pineapple",quantity:"2pcs",price: 130 },
        { image: "kiwi.jpg", name: "Kiwi",quantity:"500grms",price: 180 },
        { image: "papaya.webp", name: "Papaya",quantity:"2pcs", price: 110 },
        { image: "pomogrante.jpg", name: "Pomegranate",quantity:"4pcs",price: 160 },
        { image: "pear.jpg", name: "Pear",quantity:"8pcs",price: 140 },
        { image: "guava.jpg", name: "Guava",quantity:"6pcs",price: 70 },
        { image: "dragon.jpg", name: "Dragon Fruit",quantity:"5pcs",price: 300 },
        { image: "custradapple.jpeg", name: "Custard Apple",quantity:"500grms",price: 150 },
        { image: "avacodo.jpg", name: "Avacado",quantity:"1pcs",price: 60 }
    ]
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