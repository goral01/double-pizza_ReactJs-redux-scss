import React from "react";
import Skeleton from "../../components/skeleton";

import { useSelector, useDispatch } from "react-redux";
import { addCartItems } from "../../store/slices/itemsSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import s from "./content.module.scss";

const Content = () => {
    const dispatch = useDispatch();
    const { dataItems } = useSelector((state) => state.ItemsSlice);
    const { loadingStatus } = useSelector((state) => state.LoadingSlice);

    const [leftCount, setLeftCount] = React.useState(0);
    const [rightCount, setRightCount] = React.useState(0);

    const handleSliderChange = (direction, count, setCount) => {
        setCount((prev) =>
            direction === "up"
                ? (prev + 1) % dataItems.length
                : (prev - 1 + dataItems.length) % dataItems.length,
        );
    };

    const addToCart = () => {
        const id = `${dataItems[leftCount].id}000${dataItems[rightCount].id}`;
        const firstName = dataItems[leftCount].title;
        const secondName = dataItems[rightCount].title;
        const sumPrice = +dataItems[leftCount].price + +dataItems[rightCount].price;
        dispatch(addCartItems({ id, firstName, secondName, sumPrice }));
    };

    return (
        <div className={s.root}>
            {loadingStatus ? (
                <Skeleton />
            ) : (
                <div className={s.container}>
                    <div className={s.pizzaBlock}>
                        <div className={s.leftHalf}>
                            <div className={s.nameBlock}>
                                <h1>{dataItems[leftCount].title}</h1>
                                <p>{dataItems[leftCount].desc}</p>
                            </div>
                            <div className={s.imgBlockLeft}>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={s.arrowLeftUp}
                                    onClick={() => handleSliderChange("up", leftCount, setLeftCount)}
                                />
                                <img src={dataItems[leftCount].photo} alt="" />
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className={s.arrowLeftDown}
                                    onClick={() => handleSliderChange("down", leftCount, setLeftCount)}
                                />
                            </div>
                            <span>Цена: {dataItems[leftCount].price}</span>
                        </div>
                        <div className={s.rightHalf}>
                            <div className={s.nameBlock}>
                                <h1>{dataItems[rightCount].title}</h1>
                                <p>{dataItems[rightCount].desc}</p>
                            </div>
                            <div className={s.imgBlockRight}>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={s.arrowRightUp}
                                    onClick={() => handleSliderChange("up", rightCount, setRightCount)}
                                />
                                <img src={dataItems[rightCount].photo} alt="" />
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className={s.arrowRightDown}
                                    onClick={() => handleSliderChange("down", rightCount, setRightCount)}
                                />
                            </div>
                            <span>Цена: {dataItems[rightCount].price}</span>
                        </div>
                    </div>
                    <span>
                        Цена за целую пиццу: {+dataItems[rightCount].price + +dataItems[leftCount].price}
                    </span>
                    <button className={s.addBtn} onClick={addToCart}>
                        Add
                    </button>
                </div>
            )}
        </div>
    );
};

export default Content;
