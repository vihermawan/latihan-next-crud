import { useDispatch } from "react-redux";
import {PersonAddSVG} from "../icons/index";

export function Header(){
    // const dispatch = useDispatch();

    return(
        <header className="header"> 
            <h1 className="header__h1">
                Manage <span> Employees</span>
            </h1>
            <button
                className="btn btn__primary btn__icon"
                // onClick={}
            >
                <PersonAddSVG /> <span>Add New</span>
            </button>
        </header>
    );
}