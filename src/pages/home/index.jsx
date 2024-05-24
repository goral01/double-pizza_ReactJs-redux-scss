import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setDataItems } from "../../store/slices/itemsSlice";
import { setLoadingStatus } from "../../store/slices/loadingSlice";

import s from "./home.module.scss";

const Home = () => {
    const dispatch = useDispatch();
    const { loadingStatus } = useSelector((state) => state.LoadingSlice);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://661d84dc98427bbbef020929.mockapi.io/list");
                dispatch(setDataItems(response.data));
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                dispatch(setLoadingStatus(loadingStatus));
            }
        };
        fetchData();
    }, []);

    return (
        <div className={s.root}>
            <Header />
            <Content />
        </div>
    );
};

export default Home;
