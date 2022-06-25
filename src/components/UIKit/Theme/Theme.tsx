import React, {useEffect, useState} from 'react';
import styles from "./Theme.module.scss"
import {faDroplet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ThemeType = "green" | "orange" | "red" | "violet" | "blue" | "pink"

type ColorType = {
    color: ThemeType,
    hex: string
}

type ColorsType = Array<ColorType>

export const Theme = () => {

    const colors: ColorsType = [
        {
            color: "green",
            hex: "#5ac24e"
        },
        {
            color: "orange",
            hex: "#f5a640"
        },
        {
            color: "red",
            hex: "#ee534f"
        },
        {
            color: "violet",
            hex: "#bb68c8"
        },
        {
            color: "blue",
            hex: "#65b4f3"
        },
        {
            color: "pink",
            hex: "#ee6192"
        },
    ]


    const [theme, setTheme] = useState<ThemeType>("green")
    const [show, setShow] = useState<boolean>(false)

    const showHideMenu = () => {
        setShow(!show)
    }
    const changeTheme = (theme: ThemeType) => {
        setTheme(theme)
        setShow(!show)
    }

    const onBlurHandler = () => {
        setTimeout(() => {setShow(!show)}, 100)
    }

    useEffect(() => {
            const fontColor = `var(--font-color-${theme})`
            document.body.style.setProperty("--font-color", fontColor)
        }
        , [theme])

    const classNameShow = show ? `${styles.menu} ${styles.menuShow}` : `${styles.menu} ${styles.menuHide}`

    return (
        <div className={styles.theme}>
            <span className={styles.themeButton} onMouseUp={showHideMenu} tabIndex={0} onBlur={onBlurHandler}><FontAwesomeIcon onBlur={showHideMenu}
                                                                                         icon={faDroplet} size={"2x"}/>
            </span>
            <span className={classNameShow}>
                {colors.map((el, index) => {
                    return  <span key={index} className={styles.item} onClick={() => changeTheme(el.color)}>
                    <FontAwesomeIcon
                        icon={faDroplet} size={"2x"} style={{color: el.hex}}/>
                </span>
                })}
            </span>
        </div>
    );
};
