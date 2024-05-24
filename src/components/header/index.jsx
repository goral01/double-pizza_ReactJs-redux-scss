import React from "react";
import ModalWindow from "../modalWindow";

import { useDispatch, useSelector } from "react-redux";
import { setModalWindowStatus } from "../../store/slices/modalWindowSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import s from "./header.module.scss";

const Header = () => {
    const dispatch = useDispatch();
    const { ModalWindowStatus } = useSelector((state) => state.ModalWindowSlice);

    return (
        <>
            <ModalWindow />
            <div className={s.root}>
                <div className={s.container}>
                    <h2>Double Pizza</h2>
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className={s.cartIcon}
                        onClick={() => dispatch(setModalWindowStatus(ModalWindowStatus))}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
