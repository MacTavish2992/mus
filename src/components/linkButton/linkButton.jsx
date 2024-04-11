import {useLocation} from "react-router-dom";

export const LinkButton = ({to, children}) => {

    const location = useLocation();

    const isActive = location.pathname === to;

    const style = isActive ? "text-[22px] font-bold text-[#c02f1a]" : "text-[22px] text-black"

    return (
        <a href={to} className={style}>
            {children}
        </a>
    )
}