import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeCartItems, increaseCartItem, decreaseCartItem } from "../../store/slices/itemsSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import s from "./cartItem.module.scss";

const CartItem = ({ id }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) =>
        state.ItemsSlice.cartItems.find((obj) => obj.id === id && obj.id === id),
    );

    const handleIncrease = () => {
        dispatch(increaseCartItem(cartItem));
    };

    const handleDecrease = () => {
        dispatch(decreaseCartItem(cartItem));
    };

    return (
        <div className={s.item}>
            <div className={s.titles}>
                <p>{cartItem.firstName}</p>
                <p>{cartItem.secondName}</p>
            </div>
            <div className={s.price}>
                <div className={s.count}>
                    <FontAwesomeIcon icon={faMinus} className={s.icon} onClick={handleDecrease} />
                    <span>{cartItem.count}</span>
                    <FontAwesomeIcon icon={faPlus} className={s.icon} onClick={handleIncrease} />
                </div>
                <span>Цена: {+(cartItem.sumPrice * cartItem.count).toFixed(2)} y.e.</span>
                <FontAwesomeIcon
                    onClick={() => dispatch(removeCartItems(cartItem))}
                    icon={faTrash}
                    className={s.icon}
                />
            </div>
        </div>
    );
};

export default CartItem;
