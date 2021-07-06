import React, { useState } from "react";
import Radiobtn from "./Radiobtn";
import Body from "./Body";
import Cart from "./Cart";
import product from "../Product";
import "./App.css";

function App() {
    const [proList, setProList] = useState(product);
    const [cartList, setCartList] = useState([]);

    const clickHandler = (indexOfArray) => {
        const newArray = [...proList];
        newArray[indexOfArray].checked = !newArray[indexOfArray].checked;
        setProList(newArray);
    };

    const addToCartHandler = () => {
        const seletectedProducts = proList.filter(
            (value) => value.checked === true
        );
        const alreadyInCart = [...cartList];
        const newCart = [...alreadyInCart, ...seletectedProducts];
        setCartList(newCart);
    };

    const checkoutHandler = () => {
        setCartList([]);
    };

    var countItem=cartList.length;

    return (
        <div className="containerMain">
            <div className="container3">
                <div className="bar">
                ffhghgggguguyffyujujujujgujgh
                </div>
                <div className="bar">
                    <div className="count">cart</div>
                     <div className="count"> 
                        {countItem} item</div>
                </div>
            </div>
            <div className="container1">
                <div className="productList">
                    {proList.map(
                        (item, index) => {
                            return (
                                <div className="productItem">
                                    <input type="checkbox" checked={item.checked}
                                        onClick={() => {
                                            clickHandler(index)
                                        }}
                                        className="checkBox" />
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        }
                    )}

                </div>
                
                <div className="cart">
                    {cartList.map(
                        (item)=>{
                            return(
                                <div className="productItem">
                                {item.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="container2">
                <div className="btnbox">
                    <span onClick={()=>{
                        addToCartHandler()
                    }}
                    >add to cart-</span>
                </div>
                <div className="btnbox">
                    <span onClick={()=>{
                        checkoutHandler()
                    }}
                    >checkout--</span>
                </div>
            </div>


        </div>

    );
}

export default App;
