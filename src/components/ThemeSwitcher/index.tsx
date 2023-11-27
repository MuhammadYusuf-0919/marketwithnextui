import React, { useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useSelector } from "react-redux";
import { changeTheme } from "@/Redux/slices/themeSlice";
import { useDispatch } from "react-redux";

export default function App() {
    const theme = useSelector((state: any) => state.theme.mode)
    const dispatch = useDispatch()


    const handleChangeTheme = () => {
        dispatch(changeTheme());
        localStorage.setItem('theme', JSON.stringify(!theme));
    }

    return (
        <Switch
            isSelected={theme}
            onChange={handleChangeTheme}
            size="lg"
            color="primary"
            startContent={< SunIcon />}
            endContent={< MoonIcon />}
        />
    );
}
