import { useState } from "react";
import * as React from "react"

export default function Switch({ setTheme, theme }) {
    const [isSwitchOn, setSwitchOn] = useState(theme == 'light');

    function toggleTheme() {
        if (isSwitchOn) {
            setTheme('dark');
            setSwitchOn(false)
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light');
            setSwitchOn(true)
            localStorage.setItem('theme', 'light')
        }
    }

    let corPrimaria = '#2F2F2F'

    if (theme == 'dark') {
        corPrimaria = '#E5E5E5'
    }

    if (isSwitchOn) {
        return (
            <svg
                onClick={() => toggleTheme()}
                viewBox="0 0 69 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
            >

                <g id="Switch/Variant3">
                    <path
                        id="Vector 479"
                        d="M5.46331 2.346C8.60914 2.346 11.8215 1.82709 14.9585 1.4718C18.7322 1.0444 22.5339 1.45052 26.3147 1.20954C32.8018 0.796052 39.2662 1.12211 45.752 1.12211C48.3939 1.12211 51.0096 1.26989 53.6427 1.51065C55.9288 1.71967 58.3747 2.0174 60.581 2.87052C62.3937 3.57148 64.2302 4.3777 65.4678 6.47419C68.2491 11.1859 68.4717 17.3822 67.4167 22.9772C67.0366 24.9929 65.6923 26.8915 64.2516 27.6979C61.4734 29.2531 58.4282 29.2715 55.4451 29.2715C53.0567 29.2715 50.6805 29.5948 48.2943 29.6212C45.6743 29.6501 43.0531 29.6212 40.433 29.6212C35.9519 29.6212 31.49 30.1442 27.0034 29.9611C22.879 29.7929 18.7487 29.6794 14.6288 29.4366C12.679 29.3217 10.7406 28.5839 8.92145 27.6979C8.07021 27.2834 7.25317 26.7918 6.38646 26.4352C5.72128 26.1615 4.89499 25.9484 4.28374 25.5027C3.63019 25.0262 2.72267 24.3738 2.35685 23.492C1.84399 22.2558 1.31758 20.8878 1.14065 19.4804C0.766681 16.5056 1.116 12.0212 2.45943 9.51448C3.04999 8.41254 3.42456 7.09558 4.27641 6.27992C4.83616 5.74396 5.50944 4.63576 6.15201 4.3081C6.70154 4.02789 7.15595 3.53823 7.71257 3.30763C8.32864 3.05238 8.98961 2.89333 9.55153 2.52084"
                        stroke={corPrimaria}
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                    <path
                        id="ball"
                        d="M50.713 16.705C50.2453 16.6361 50.0688 15.674 50.3658 15.3232M50.3658 15.3232C50.4459 15.2286 50.5605 15.1784 50.713 15.2022C50.7435 15.207 50.7715 15.2149 50.7973 15.2257M50.3658 15.3232C50.2855 15.3449 50.2058 15.3683 50.128 15.393M50.3658 15.3232C50.5097 15.2843 50.6557 15.2511 50.7973 15.2257M50.7973 15.2257C51.315 15.4441 50.8914 16.8466 50.2797 17.391M50.7973 15.2257C51.3021 15.1354 51.7505 15.1465 51.8465 15.3692C51.9215 15.5433 53.1706 17.2983 52.4006 17.5899C51.9957 17.7433 51.0172 17.7433 50.6122 17.5899C50.4808 17.5401 50.3707 17.4727 50.2797 17.391M50.2797 17.391C50.1295 17.5247 49.9679 17.6066 49.8062 17.6066C49.2746 17.6066 48.7029 16.4979 49.1765 15.8701C49.2884 15.7217 49.6784 15.5356 50.128 15.393M50.2797 17.391C49.7989 16.9596 49.8518 16.1296 50.128 15.393M50.128 15.393C50.3714 14.7437 50.7884 14.1671 51.1664 14"
                        stroke={corPrimaria}
                        strokeWidth={14}
                        strokeLinecap="round"
                    />
                </g>
            </svg>
        )
    } else {
        return (

            <svg
                onClick={() => toggleTheme()}
                viewBox="0 0 69 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
            >

                <g id="Switch/Variant3">
                    <path
                        id="Vector 479"
                        d="M5.46331 2.346C8.60914 2.346 11.8215 1.82709 14.9585 1.4718C18.7322 1.0444 22.5339 1.45052 26.3147 1.20954C32.8018 0.796052 39.2662 1.12211 45.752 1.12211C48.3939 1.12211 51.0096 1.26989 53.6427 1.51065C55.9288 1.71967 58.3747 2.0174 60.581 2.87052C62.3937 3.57148 64.2302 4.3777 65.4678 6.47419C68.2491 11.1859 68.4717 17.3822 67.4167 22.9772C67.0366 24.9929 65.6923 26.8915 64.2516 27.6979C61.4734 29.2531 58.4282 29.2715 55.4451 29.2715C53.0567 29.2715 50.6805 29.5948 48.2943 29.6212C45.6743 29.6501 43.0531 29.6212 40.433 29.6212C35.9519 29.6212 31.49 30.1442 27.0034 29.9611C22.879 29.7929 18.7487 29.6794 14.6288 29.4366C12.679 29.3217 10.7406 28.5839 8.92145 27.6979C8.07021 27.2834 7.25317 26.7918 6.38646 26.4352C5.72128 26.1615 4.89499 25.9484 4.28374 25.5027C3.63019 25.0262 2.72267 24.3738 2.35685 23.492C1.84399 22.2558 1.31758 20.8878 1.14065 19.4804C0.766681 16.5056 1.116 12.0212 2.45943 9.51448C3.04999 8.41254 3.42456 7.09558 4.27641 6.27992C4.83616 5.74396 5.50944 4.63576 6.15201 4.3081C6.70154 4.02789 7.15595 3.53823 7.71257 3.30763C8.32864 3.05238 8.98961 2.89333 9.55153 2.52084"
                        stroke={corPrimaria}
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                    <path
                        id="ball"
                        d="M17.713 16.705C17.2453 16.6361 17.0688 15.674 17.3658 15.3232M17.3658 15.3232C17.4459 15.2286 17.5605 15.1784 17.713 15.2022C17.7435 15.207 17.7715 15.2149 17.7973 15.2257M17.3658 15.3232C17.2855 15.3449 17.2058 15.3683 17.128 15.393M17.3658 15.3232C17.5097 15.2843 17.6557 15.2511 17.7973 15.2257M17.7973 15.2257C18.315 15.4441 17.8914 16.8466 17.2797 17.391M17.7973 15.2257C18.3021 15.1354 18.7505 15.1465 18.8465 15.3692C18.9215 15.5433 20.1706 17.2983 19.4006 17.5899C18.9957 17.7433 18.0172 17.7433 17.6122 17.5899C17.4808 17.5401 17.3707 17.4727 17.2797 17.391M17.2797 17.391C17.1295 17.5247 16.9679 17.6066 16.8062 17.6066C16.2746 17.6066 15.7029 16.4979 16.1765 15.8701C16.2884 15.7217 16.6784 15.5356 17.128 15.393M17.2797 17.391C16.7989 16.9596 16.8518 16.1296 17.128 15.393M17.128 15.393C17.3714 14.7437 17.7884 14.1671 18.1664 14"
                        stroke={corPrimaria}
                        strokeWidth={14}
                        strokeLinecap="round"
                    />
                </g>
            </svg>



        )
    }
}