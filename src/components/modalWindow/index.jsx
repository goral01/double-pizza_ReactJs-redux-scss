import React from "react";
import CartItem from "../cartItem";

import { useSelector, useDispatch } from "react-redux";
import { setModalWindowStatus } from "../../store/slices/modalWindowSlice";
import { clearCartItems } from "../../store/slices/itemsSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import s from "./modalWindow.module.scss";

const modalWindow = () => {
    const dispatch = useDispatch();
    const { modalWindowStatus } = useSelector((state) => state.ModalWindowSlice);
    const { cartItems } = useSelector((state) => state.ItemsSlice);

    const cost = cartItems.reduce((acc, cur) => {
        return acc + cur.sumPrice * cur.count;
    }, 0);

    const counter = cartItems.reduce((acc, cur) => {
        return acc + cur.count;
    }, 0);

    function acceptedStatus() {
        if (cartItems.length) return alert("Заказ принят!");
        else return alert("Корзина пуста!");
    }

    return (
        modalWindowStatus && (
            <div className={s.root}>
                <div className={s.container}>
                    <div className={s.header}>
                        <h2>Ваш заказ</h2>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className={s.close}
                            onClick={() => dispatch(setModalWindowStatus(modalWindowStatus))}
                        />
                    </div>
                    <div className={s.itemsList}>
                        {cartItems.map((obj) => (
                            <CartItem key={obj.id} id={obj.id} />
                        ))}
                    </div>
                    <div className={s.total}>
                        <span>Итого: {counter} штук</span>
                        <span>К оплате: {+cost.toFixed(2)} y.e.</span>
                    </div>
                    <div className={s.btns}>
                        <button className={s.applyBtn} onClick={acceptedStatus}>
                            Заказать
                        </button>
                        <button className={s.cancelBtn} onClick={() => dispatch(clearCartItems(false))}>
                            Удалить все
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default modalWindow;
