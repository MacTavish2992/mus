import {useState} from "react";
import {useLocation} from "react-router-dom";
import {LinkButton} from "../linkButton/linkButton";

export const Menu = () => {

    return (
        <div className="w-full justify-around flex gap-5 p-5 flex-wrap">
            <LinkButton to="/">
                Главная
            </LinkButton>
            <LinkButton to="/about">
                О нас
            </LinkButton>
            <LinkButton to="/visitors">
                Посетителям
            </LinkButton>
            <LinkButton to="/afisha">
                Афиша
            </LinkButton>
            <LinkButton to="/collection">
                Коллекция
            </LinkButton>
            <LinkButton to="/contact">
                Контакты
            </LinkButton>
        </div>
    )
}