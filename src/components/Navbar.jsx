import { useState } from "react";
import menuIcon from '../assets/icons/buttons/menu.svg'
import Switch from "./Switch"

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    function openMenu() {
        
        const menuMobile = document.getElementById('menuMobile');
        if(showMenu) {
            menuMobile.style.display = 'none';
        } else {
            menuMobile.style.display = 'block';
        }
        setShowMenu(!showMenu);

    }

    return (
        <header className="w-full justify-center flex relative left-0 top-0 py-4 ">
            <div className=" max-w-[1240px] w-[100%] px-6 sm:px-32 flex justify-between">
                <div className="w-auto hover-effect overflow-hidden group">
                    <h1 className="lg:text-[3rem] text-[2.5rem] text-jet group-hover:text-[#fff]">Artttur</h1>
                </div>
                <div className=" overflow-hidden flex align-middle max-md:hidden ">
                    <ul className="flex text-center items-center gap-1 ">
                        <li className="hover-effect px-3 text-[1.2rem] group"><a className=" text-jet group-hover:text-[#fff]" href="">Sobre</a></li>
                        <li className="hover-effect px-3 text-[1.2rem] group"><a className=" text-jet group-hover:text-[#fff]" href="">Skills</a></li>
                        <li className="hover-effect px-3 text-[1.2rem] group"><a className=" text-jet group-hover:text-[#fff]" href="">Projetos</a></li>
                        <li className="hover-effect px-3 text-[1.2rem] group"><a className=" text-jet group-hover:text-[#fff]" href="">Blog</a></li>
                        <Switch/>
                    </ul>
                </div>
                <div className="md:hidden flex items-center gap-6" onClick={()=> {openMenu()}}>
                    <img className="w-6" src={menuIcon} alt="" />
                    <Switch/>
                </div>
                
            </div>
            <div id='menuMobile' className="overflow-hidden w-[100vw] hidden  absolute left-0 top-16 align-middle">
                    <ul className=" text-right items-center border-y-[1px] border-jet">
                        <li className="hover-effect px-3 pr-24 text-[1.2rem] group"><a className=" text-jet group-hover:text-[#fff]" href="">Sobre</a></li>
                        <li className="hover-effect px-3 pr-24 text-[1.2rem] group"><a className=" text-jet group-hover:text-[#fff]" href="">Skills</a></li>
                        <li className="hover-effect px-3 pr-24 text-[1.2rem] group"><a className=" text-jet group-hover:text-[#fff]" href="">Projetos</a></li>
                        <li className="hover-effect px-3 pr-24 text-[1.2rem] group"><a className=" text-jet group-hover:text-[#fff]" href="">Blog</a></li>
                    </ul>
                </div>
        </header>
    )
}
{/* <div id="navbar-desktop">
<div className="nome">
    <h1>Artttur</h1>
</div>
<div className="menu-desktop">
    <ul>
        <li><a href="#introducao" className="onClickMouse hover-effect">Inicio</a></li>
        <li><a href="#sobre" className="onClickMouse hover-effect">Sobre</a></li>
        <li><a href="#skills" className="onClickMouse hover-effect">Skills</a></li>
        <li><a href="#projetos" className="onClickMouse hover-effect">Projetos</a></li>
           
        <div>
            <svg id="switch-desktop" onclick="switchColorMode()" className="onClickMouse scale" width="55" height="17"
                viewBox="0 0 69 31" fill="none" xmlns="http   www.w3.org/2000/svg">
                <g>
                    <g id="escuro">
                        <path id="bola-desktop"
                            d="M16.713 16.705C16.1192 16.6175 15.9948 15.0902 16.713 15.2022C17.5071 15.3261 16.6595 17.6066 15.8062 17.6066C15.2746 17.6066 14.7029 16.4979 15.1765 15.8701C15.4663 15.4858 17.6219 14.8481 17.8465 15.3692C17.9215 15.5433 19.1706 17.2983 18.4006 17.5899C17.9957 17.7433 17.0172 17.7433 16.6122 17.5899C15.1752 17.0456 16.2783 14.3925 17.1664 14"
                            className="secundaryColor" stroke-width="14" stroke-linecap="round" />
                        <path id="borda-desktop"
                            d="M5.46331 2.346C8.60914 2.346 11.8215 1.82709 14.9585 1.4718C18.7322 1.0444 22.5339 1.45052 26.3147 1.20954C32.8018 0.796052 39.2662 1.12211 45.752 1.12211C48.3939 1.12211 51.0096 1.26989 53.6427 1.51065C55.9288 1.71967 58.3747 2.0174 60.581 2.87052C62.3937 3.57148 64.2302 4.3777 65.4678 6.47419C68.2491 11.1859 68.4717 17.3822 67.4166 22.9772C67.0366 24.9929 65.6923 26.8915 64.2516 27.6979C61.4733 29.2531 58.4282 29.2715 55.4451 29.2715C53.0567 29.2715 50.6805 29.5948 48.2943 29.6212C45.6743 29.6501 43.0531 29.6212 40.433 29.6212C35.9519 29.6212 31.49 30.1442 27.0034 29.9611C22.879 29.7929 18.7487 29.6794 14.6288 29.4366C12.679 29.3217 10.7406 28.5839 8.92145 27.6979C8.07021 27.2834 7.25317 26.7918 6.38646 26.4352C5.72128 26.1615 4.89499 25.9484 4.28374 25.5027C3.63019 25.0262 2.72267 24.3738 2.35685 23.492C1.84399 22.2558 1.31758 20.8879 1.14065 19.4804C0.766681 16.5056 1.116 12.0212 2.45943 9.51448C3.04999 8.41254 3.42456 7.09558 4.27641 6.27992C4.83616 5.74396 5.50944 4.63576 6.15201 4.3081C6.70154 4.02789 7.15595 3.53823 7.71257 3.30763C8.32864 3.05238 8.98961 2.89333 9.55153 2.52084"
                            className="secundaryColor" stroke-width="2" stroke-linecap="round" />
                    </g>
                    <g id="claro">
                        <path
                            d="M15.1227 15.2561C14.8175 15.2222 14.937 14.7717 15.0282 14.5946C15.2021 14.2571 15.7016 14.0275 16.0678 14.0275C16.8942 14.0275 17.434 14.162 18 14.8309C18.5977 15.5372 18.6809 16.7879 17.8424 17.2618C17.1417 17.6579 14.3718 18.1737 14.2774 16.8995C14.1675 15.4164 15.5824 13.682 17.1809 14.164C17.9415 14.3934 18.2612 15.2744 18.315 15.9912C18.3939 17.0429 17.1025 17.471 16.2673 17.4246C14.2923 17.3149 15.8673 13.1713 17.7479 14.2586C18.4999 14.6933 18.5998 16.3401 18.0315 16.9363C17.0992 17.9144 15.8386 17.2033 15.4325 16.1067C15.0716 15.1324 15.5939 13.5536 16.9079 14.101C18.0861 14.592 17.383 16.4837 16.6821 17.0308C15.8308 17.6952 14.8039 17.107 14.6239 16.1067C14.3572 14.625 16.652 14.5701 17.2544 15.5817C17.8902 16.6493 16.9443 17.3774 15.9208 17.3353C14.6476 17.283 14.8816 15.2103 16.031 15.0461C16.9238 14.9186 18.5506 16.4136 17.5589 17.1883C16.6241 17.9187 14.8476 17.2533 15.1122 15.9177C15.3825 14.5531 17.7238 14.4373 18.1995 15.6972C18.5754 16.693 17.8159 18.0716 16.6348 17.6451C15.5594 17.2568 15.6325 15.3559 16.7871 15.1406C17.9641 14.9212 19.4725 16.5793 17.958 17.1988C16.9591 17.6074 15.7985 16.8748 15.8263 15.7497C15.8533 14.653 18.4053 15.8367 17.2859 17.0361C16.7262 17.6358 15.8053 17.4795 15.8053 16.5688C15.8053 15.4503 16.9487 15.4783 17.0444 16.5583C17.1506 17.7572 15.1929 17.3484 14.7867 16.6738C14.0241 15.4076 15.378 14.1524 16.6348 14.8676C17.5518 15.3895 18.3121 17.5109 16.8974 17.9339C15.5851 18.3262 14.1542 16.9707 14.9652 15.6867C15.7226 14.4874 18.1776 14.3814 18.8348 15.7444C19.6889 17.5159 17.8266 18.3832 16.3513 18.2594C14.8718 18.1353 13.9963 16.6506 14.4296 15.2351C14.9204 13.6321 18.1588 14.1126 19.1026 14.9359C21.4043 16.9437 14.1478 21.3779 13.8206 17.3143C13.6722 15.4724 14.5619 14.0689 16.4248 13.597C16.8342 13.4933 17.6759 13.2855 17.9895 13.7125C18.426 14.3069 18.3471 15.4257 18.3307 16.112C18.3028 17.2854 17.9491 18.9373 16.3933 18.6322C14.9059 18.3406 14.0869 15.9523 14.3141 14.6366C14.5892 13.0442 16.8417 13.2005 17.979 13.597C19.4377 14.1056 20.3543 15.7255 19.6801 17.2356C19.0487 18.6499 17.3277 18.7836 16.0258 18.3119C15.1299 17.9873 13.6211 17.28 13.6211 16.1487C13.6211 14.8619 14.7134 13.9157 15.8368 13.5182C17.0952 13.0729 18.8213 12.9922 19.3336 14.4266C19.749 15.5899 19.7727 16.6509 18.903 17.5979C18.0428 18.5346 16.4515 19.2812 15.3275 18.3224C14.6729 17.7641 14.4122 16.7921 14.3719 15.965C14.312 14.7371 15.6345 14.0618 16.7188 14.122C17.8994 14.1876 18.8745 15.1601 18.9766 16.2957C19.0499 17.1121 18.4451 17.4298 17.7269 17.4298C16.3556 17.4298 17.1518 16.3684 16.8029 15.5397C16.7119 15.3237 16.9184 15.4771 16.9184 15.1406C16.9184 14.7518 16.6969 14.4547 16.6401 14.0853C16.5342 13.3968 16.4458 12.7677 16.4458 12.0639C16.4458 11.5843 16.4458 11.1048 16.4458 10.6252C16.4458 10.4362 16.4458 10.2472 16.4458 10.0582C16.4458 9.71964 16.4458 10.9614 16.4458 11.145C16.4458 12.232 16.2098 13.6235 16.5193 14.6681C16.673 15.1866 16.1786 15.4285 15.779 15.1039C14.8285 14.3316 13.7247 13.8012 12.739 13.0824C12.3588 12.8052 11.8798 12.6543 11.5314 12.3264C11.2131 12.0269 12.1808 12.9128 12.529 13.177C13.1802 13.671 13.817 14.2447 14.5031 14.6838C14.7991 14.8733 15.3348 15.0616 15.5742 15.2771C15.9175 15.5861 16.2958 15.5035 16.6873 15.6814C17.0236 15.8343 17.2595 15.6344 17.4329 15.3507C17.745 14.8399 18.1932 14.3995 18.5775 13.9383C19.2299 13.1554 20.4448 12.6372 20.9612 11.7593C21.0094 11.6774 21.076 11.6192 20.9402 11.7278C20.5861 12.0112 20.2797 12.3489 19.9216 12.6309C19.2113 13.1903 18.6654 13.7985 18.0472 14.4476C17.5367 14.9836 16.8644 15.4923 16.4668 16.1067C16.2859 16.3863 14.9104 16.2012 14.5504 16.2012C13.6967 16.2012 12.7659 16.0825 11.9199 15.965C11.6421 15.9264 10.7994 15.9177 11.0798 15.9177C12.8704 15.9177 14.6563 16.0122 16.4406 16.0122C17.4583 16.0122 18.5834 16.0277 19.5961 16.1277C20.4093 16.208 21.2051 16.2957 22.0218 16.2957C22.1244 16.2957 22.6316 16.2681 22.4734 16.3167C21.6138 16.5812 20.4193 16.4262 19.5331 16.385C18.4585 16.335 17.4565 15.9594 16.3723 15.9177C16.3513 15.9169 16.6442 16.1098 16.8029 16.2747C17.046 16.5277 17.3348 16.7122 17.5799 16.9573C18.2177 17.5951 19.0986 18.0267 19.6381 18.753C19.9172 19.1287 20.2586 19.4345 20.5832 19.7716C20.7105 19.9038 20.9853 20.183 20.6462 20.0288C19.5141 19.5142 18.7184 18.2498 17.979 17.2828C17.5318 16.6981 17.2568 16.8277 16.5876 16.679C16.3988 16.6371 16.2091 16.7103 16.0258 16.6318C15.9521 16.6002 15.9733 17.255 15.9733 17.3406C15.9733 18.4099 15.9733 19.4793 15.9733 20.5486C15.9733 20.7692 15.9733 20.9897 15.9733 21.2102C15.9733 21.87 15.9733 19.8906 15.9733 19.2308C15.9733 18.4471 16.0194 17.6463 15.9733 16.8628C15.9401 16.299 14.4874 17.5233 14.3614 17.6241C13.5786 18.2503 12.6626 18.5799 11.8359 19.131C11.5659 19.311 11.3096 19.5746 11.7834 19.1835C12.5367 18.5617 13.4748 18.1352 14.1986 17.4876C14.5213 17.1988 14.8336 16.9601 15.2172 16.7683"
                            className="primaryColor" stroke-linecap="round" />
                        <path 
                            d="M52.1565 11C51.1705 11.0567 50.3295 12.1763 49.7957 12.9337C49.1158 13.8981 48.757 15.5381 49.186 16.6802C49.9977 18.8408 52.8798 19.7015 54.8999 19.7015C55.9011 19.7015 56.598 19.8744 57.3191 19.0704C57.5781 18.7817 57.7586 18.2709 57.8509 17.8887C57.9591 17.4407 58.1874 17.0451 57.7017 17.1569C56.8912 17.3433 56.1886 17.4053 55.3345 17.4053C54.5706 17.4053 53.5367 17.5421 52.8569 17.0897C51.4401 16.1468 51.8062 13.7867 52.1565 12.3361C52.2087 12.1198 52.4937 11.7031 52.4937 11.5506C52.4937 11.2255 51.3781 12.2354 51.3133 12.3025C50.6659 12.9728 50.2886 13.7801 50.2886 14.7465C50.2886 15.6718 50.4704 14.4663 50.6388 14.0885C50.7117 13.925 50.983 13.333 50.9825 13.3365C50.9115 13.851 50.7267 14.3901 50.4313 14.8136C50.1991 15.1464 50.8494 13.968 50.9631 13.7797C51.3058 13.212 50.1848 16.2888 50.1848 15.6193C50.1848 15.1557 50.6283 14.5138 50.8009 14.1019C50.9222 13.8127 51.2095 12.9407 51.2095 13.256C51.2095 13.5053 50.8791 13.7927 50.7491 13.9744C50.4028 14.4583 50.1772 14.9416 50.081 15.5388C50.0245 15.89 49.9049 16.5411 50.3794 16.5593C50.8558 16.5776 51.3358 16.5593 51.8127 16.5593C51.8849 16.5593 52.2176 16.5983 51.9749 16.5526C51.6094 16.4838 51.3802 16.0645 51.2225 15.7603C50.9945 15.3203 50.3497 13.8944 50.8723 13.4171C51.0514 13.2535 51.2144 15.4057 51.2485 15.6596C51.2956 16.011 51.389 16.3343 51.6635 16.5593C51.8977 16.7512 51.4204 16.123 51.3457 15.9685C50.9871 15.2259 50.8723 14.6736 50.8723 13.8468C50.8723 13.6458 50.3516 14.8405 50.3145 15.1091C50.2567 15.5282 50.2528 16.0319 50.4572 16.4116C50.5897 16.6577 51.2071 17.2279 51.0279 17.0159C50.5688 16.4726 49.8024 15.9772 49.5427 15.2903C49.356 14.7963 49.4587 14.356 49.8281 14.0214C50.6348 13.2906 50.1062 14.3704 49.9643 14.8405C49.587 16.0904 50.1066 16.9812 51.0798 17.741C51.1196 17.772 52.0788 18.3579 51.9165 18.0499C51.4651 17.1932 50.1941 16.5641 49.9643 15.6126C49.8847 15.2829 50.4651 16.1315 50.4767 16.1497C51.0341 17.0261 51.6865 17.8384 52.6234 18.2916C52.8381 18.3954 54.9465 18.973 54.0243 18.7078C52.9474 18.3981 51.8863 16.9564 51.242 16.0893C51.0063 15.7722 50.6877 14.8394 51.2355 15.6126C51.96 16.6354 52.7426 17.3432 53.7649 18.0096C54.0405 18.1892 53.1554 17.0362 53.0385 16.895C52.5797 16.3408 51.456 15.4853 51.456 14.6928C51.456 14.2919 51.2785 13.9967 51.3522 14.6458C51.4736 15.7142 52.4592 17.4828 53.4147 17.9559C53.8198 18.1564 54.3328 18.2748 54.0633 17.6201C53.6243 16.554 52.8356 15.5582 52.1111 14.6928C51.9356 14.4832 51.7421 13.7397 51.8127 14.3974C51.9092 15.2966 52.6247 16.2791 53.2331 16.895C53.4738 17.1386 53.8001 17.3712 54.1151 17.4993C54.2251 17.544 54.4394 17.7693 54.4394 17.647C54.4394 17.3138 53.4387 16.5982 53.2071 16.3243C52.48 15.464 52.1565 14.3054 52.1565 13.1754C52.1565 13.0367 52.1565 12.4671 52.1565 12.5711C52.1565 13.2518 52.1161 13.9467 52.1629 14.6256C52.2568 15.9862 52.828 16.8956 53.966 17.459C54.8577 17.9005 55.6278 17.8887 56.5927 17.8887C57.1562 17.8887 56.6032 17.9696 56.3333 18.0364C55.5518 18.2299 55.0749 18.4611 54.2643 18.2513C53.2841 17.9976 58.3035 18.3721 57.2931 18.3721C56.5547 18.3721 55.8636 18.6138 55.1204 18.6138C54.6257 18.6138 54.3359 18.6138 55.0296 18.6138C55.8594 18.6138 56.8889 18.8454 57.4099 18.0364C57.7446 17.5166 56.8712 18.0703 56.7094 18.1573C56.2407 18.4093 55.9238 18.7526 55.4188 18.916C55.0071 19.0491 54.5087 18.9764 54.0827 18.9764C53.9287 18.9764 53.5625 19.0486 53.4471 18.9093C53.3355 18.7745 53.2749 18.6205 53.4925 18.6138C54.6728 18.5779 55.681 18.9533 56.8781 18.728C57.0419 18.6971 57.493 18.2513 57.118 18.2513C56.5572 18.2513 56.0471 18.7854 55.542 18.9764C54.9255 19.2096 54.3319 19.339 53.6741 19.339C52.8837 19.339 52.515 19.2402 51.9813 18.6877C51.7769 18.476 51.7771 18.1886 51.5727 17.9559C51.2783 17.6206 51.6929 18.3915 51.8322 18.493C52.7266 19.1446 57.0597 19.8426 57.0597 18.0096C57.0597 17.3687 57.366 17.0508 57.5202 16.4922C57.7722 15.579 58.1061 16.3472 57.7601 16.895C56.918 18.2283 57.856 15.8607 57.2218 15.9618C56.6829 16.0476 55.7387 16.4768 55.3215 16.8547C55.1263 17.0315 54.6287 16.9219 54.3746 16.9219C54.2372 16.9219 53.6929 16.9219 53.7909 16.9219C54.7247 16.9219 55.6486 16.8546 56.5797 16.7943C56.7102 16.7859 57.7552 16.4977 57.2931 16.566C56.6795 16.6568 56.151 17.0301 55.4901 17.0427C54.4222 17.0632 53.1871 17.2765 52.2667 16.7406C51.9242 16.5411 51.6736 16.1729 51.2809 16.0826C50.8284 15.9785 51.705 15.9579 51.8581 16.0088C53.075 16.4128 53.9835 16.801 55.302 16.801C55.7635 16.801 54.4266 16.7685 54.2643 16.7339C53.6178 16.5961 53.0675 16.3194 52.6234 15.8342C52.183 15.3529 53.0039 15.6928 53.2331 15.7805C53.8397 16.0125 54.3452 16.3523 54.8869 16.7406C55.0429 16.8524 55.4712 16.9219 55.2501 16.9219C54.2123 16.9219 53.2164 16.8347 52.2083 16.5593C51.6734 16.4132 51.0447 16.231 50.6388 15.8342C50.2819 15.4852 50.1718 16.0144 50.1718 16.3109C50.1718 17.1038 49.9956 17.8943 50.5739 18.493C51.5248 19.4773 52.8977 19.907 54.193 19.9432C54.9292 19.9638 56.0025 20.2302 56.3592 19.3994C56.5813 18.8821 57.0597 18.3542 57.0597 17.7679"
                            className="primaryColor" stroke-linecap="round" />
                    </g>
                </g>
            </svg>
        </div>
    </ul>
</div>
</div>

<div id="navbar-mobile">
<div className="nome">
    <h1>Artttur</h1>
</div>

<div className="menu-icons">
       
    <svg className=" onClickMouse scale" onclick="switchMenu()" width="60" height="20" viewBox="0 0 46 30" fill="none" xmlns="httpwww.w3.org/2000/svg">
        <path d="M3 27H42.9399"  className="secundaryColor" stroke-width="6" stroke-linecap="round"/>
        <path d="M3.06006 14.9441H42.9999"  className="secundaryColor" stroke-width="6" stroke-linecap="round"/>
        <path d="M3.06006 3H42.9999" className="secundaryColor" stroke-width="6" stroke-linecap="round"/>
    </svg>

    <svg id="switch-mobile" onclick="switchColorMode()" className="onClickMouse scale" width="60" height="20"
        viewBox="0 0 69 31" fill="none" xmlns="http   www.w3.org/2000/svg">
        <g>
            <g id="escuro">
                <path id="bola-mobile"
                    d="M16.713 16.705C16.1192 16.6175 15.9948 15.0902 16.713 15.2022C17.5071 15.3261 16.6595 17.6066 15.8062 17.6066C15.2746 17.6066 14.7029 16.4979 15.1765 15.8701C15.4663 15.4858 17.6219 14.8481 17.8465 15.3692C17.9215 15.5433 19.1706 17.2983 18.4006 17.5899C17.9957 17.7433 17.0172 17.7433 16.6122 17.5899C15.1752 17.0456 16.2783 14.3925 17.1664 14"
                    className="secundaryColor" stroke-width="14" stroke-linecap="round" />
                <path id="borda-mobile"
                    d="M5.46331 2.346C8.60914 2.346 11.8215 1.82709 14.9585 1.4718C18.7322 1.0444 22.5339 1.45052 26.3147 1.20954C32.8018 0.796052 39.2662 1.12211 45.752 1.12211C48.3939 1.12211 51.0096 1.26989 53.6427 1.51065C55.9288 1.71967 58.3747 2.0174 60.581 2.87052C62.3937 3.57148 64.2302 4.3777 65.4678 6.47419C68.2491 11.1859 68.4717 17.3822 67.4166 22.9772C67.0366 24.9929 65.6923 26.8915 64.2516 27.6979C61.4733 29.2531 58.4282 29.2715 55.4451 29.2715C53.0567 29.2715 50.6805 29.5948 48.2943 29.6212C45.6743 29.6501 43.0531 29.6212 40.433 29.6212C35.9519 29.6212 31.49 30.1442 27.0034 29.9611C22.879 29.7929 18.7487 29.6794 14.6288 29.4366C12.679 29.3217 10.7406 28.5839 8.92145 27.6979C8.07021 27.2834 7.25317 26.7918 6.38646 26.4352C5.72128 26.1615 4.89499 25.9484 4.28374 25.5027C3.63019 25.0262 2.72267 24.3738 2.35685 23.492C1.84399 22.2558 1.31758 20.8879 1.14065 19.4804C0.766681 16.5056 1.116 12.0212 2.45943 9.51448C3.04999 8.41254 3.42456 7.09558 4.27641 6.27992C4.83616 5.74396 5.50944 4.63576 6.15201 4.3081C6.70154 4.02789 7.15595 3.53823 7.71257 3.30763C8.32864 3.05238 8.98961 2.89333 9.55153 2.52084"
                    className="secundaryColor" stroke-width="2" stroke-linecap="round" />
            </g>
            <g id="claro">
                <path 
                    d="M15.1227 15.2561C14.8175 15.2222 14.937 14.7717 15.0282 14.5946C15.2021 14.2571 15.7016 14.0275 16.0678 14.0275C16.8942 14.0275 17.434 14.162 18 14.8309C18.5977 15.5372 18.6809 16.7879 17.8424 17.2618C17.1417 17.6579 14.3718 18.1737 14.2774 16.8995C14.1675 15.4164 15.5824 13.682 17.1809 14.164C17.9415 14.3934 18.2612 15.2744 18.315 15.9912C18.3939 17.0429 17.1025 17.471 16.2673 17.4246C14.2923 17.3149 15.8673 13.1713 17.7479 14.2586C18.4999 14.6933 18.5998 16.3401 18.0315 16.9363C17.0992 17.9144 15.8386 17.2033 15.4325 16.1067C15.0716 15.1324 15.5939 13.5536 16.9079 14.101C18.0861 14.592 17.383 16.4837 16.6821 17.0308C15.8308 17.6952 14.8039 17.107 14.6239 16.1067C14.3572 14.625 16.652 14.5701 17.2544 15.5817C17.8902 16.6493 16.9443 17.3774 15.9208 17.3353C14.6476 17.283 14.8816 15.2103 16.031 15.0461C16.9238 14.9186 18.5506 16.4136 17.5589 17.1883C16.6241 17.9187 14.8476 17.2533 15.1122 15.9177C15.3825 14.5531 17.7238 14.4373 18.1995 15.6972C18.5754 16.693 17.8159 18.0716 16.6348 17.6451C15.5594 17.2568 15.6325 15.3559 16.7871 15.1406C17.9641 14.9212 19.4725 16.5793 17.958 17.1988C16.9591 17.6074 15.7985 16.8748 15.8263 15.7497C15.8533 14.653 18.4053 15.8367 17.2859 17.0361C16.7262 17.6358 15.8053 17.4795 15.8053 16.5688C15.8053 15.4503 16.9487 15.4783 17.0444 16.5583C17.1506 17.7572 15.1929 17.3484 14.7867 16.6738C14.0241 15.4076 15.378 14.1524 16.6348 14.8676C17.5518 15.3895 18.3121 17.5109 16.8974 17.9339C15.5851 18.3262 14.1542 16.9707 14.9652 15.6867C15.7226 14.4874 18.1776 14.3814 18.8348 15.7444C19.6889 17.5159 17.8266 18.3832 16.3513 18.2594C14.8718 18.1353 13.9963 16.6506 14.4296 15.2351C14.9204 13.6321 18.1588 14.1126 19.1026 14.9359C21.4043 16.9437 14.1478 21.3779 13.8206 17.3143C13.6722 15.4724 14.5619 14.0689 16.4248 13.597C16.8342 13.4933 17.6759 13.2855 17.9895 13.7125C18.426 14.3069 18.3471 15.4257 18.3307 16.112C18.3028 17.2854 17.9491 18.9373 16.3933 18.6322C14.9059 18.3406 14.0869 15.9523 14.3141 14.6366C14.5892 13.0442 16.8417 13.2005 17.979 13.597C19.4377 14.1056 20.3543 15.7255 19.6801 17.2356C19.0487 18.6499 17.3277 18.7836 16.0258 18.3119C15.1299 17.9873 13.6211 17.28 13.6211 16.1487C13.6211 14.8619 14.7134 13.9157 15.8368 13.5182C17.0952 13.0729 18.8213 12.9922 19.3336 14.4266C19.749 15.5899 19.7727 16.6509 18.903 17.5979C18.0428 18.5346 16.4515 19.2812 15.3275 18.3224C14.6729 17.7641 14.4122 16.7921 14.3719 15.965C14.312 14.7371 15.6345 14.0618 16.7188 14.122C17.8994 14.1876 18.8745 15.1601 18.9766 16.2957C19.0499 17.1121 18.4451 17.4298 17.7269 17.4298C16.3556 17.4298 17.1518 16.3684 16.8029 15.5397C16.7119 15.3237 16.9184 15.4771 16.9184 15.1406C16.9184 14.7518 16.6969 14.4547 16.6401 14.0853C16.5342 13.3968 16.4458 12.7677 16.4458 12.0639C16.4458 11.5843 16.4458 11.1048 16.4458 10.6252C16.4458 10.4362 16.4458 10.2472 16.4458 10.0582C16.4458 9.71964 16.4458 10.9614 16.4458 11.145C16.4458 12.232 16.2098 13.6235 16.5193 14.6681C16.673 15.1866 16.1786 15.4285 15.779 15.1039C14.8285 14.3316 13.7247 13.8012 12.739 13.0824C12.3588 12.8052 11.8798 12.6543 11.5314 12.3264C11.2131 12.0269 12.1808 12.9128 12.529 13.177C13.1802 13.671 13.817 14.2447 14.5031 14.6838C14.7991 14.8733 15.3348 15.0616 15.5742 15.2771C15.9175 15.5861 16.2958 15.5035 16.6873 15.6814C17.0236 15.8343 17.2595 15.6344 17.4329 15.3507C17.745 14.8399 18.1932 14.3995 18.5775 13.9383C19.2299 13.1554 20.4448 12.6372 20.9612 11.7593C21.0094 11.6774 21.076 11.6192 20.9402 11.7278C20.5861 12.0112 20.2797 12.3489 19.9216 12.6309C19.2113 13.1903 18.6654 13.7985 18.0472 14.4476C17.5367 14.9836 16.8644 15.4923 16.4668 16.1067C16.2859 16.3863 14.9104 16.2012 14.5504 16.2012C13.6967 16.2012 12.7659 16.0825 11.9199 15.965C11.6421 15.9264 10.7994 15.9177 11.0798 15.9177C12.8704 15.9177 14.6563 16.0122 16.4406 16.0122C17.4583 16.0122 18.5834 16.0277 19.5961 16.1277C20.4093 16.208 21.2051 16.2957 22.0218 16.2957C22.1244 16.2957 22.6316 16.2681 22.4734 16.3167C21.6138 16.5812 20.4193 16.4262 19.5331 16.385C18.4585 16.335 17.4565 15.9594 16.3723 15.9177C16.3513 15.9169 16.6442 16.1098 16.8029 16.2747C17.046 16.5277 17.3348 16.7122 17.5799 16.9573C18.2177 17.5951 19.0986 18.0267 19.6381 18.753C19.9172 19.1287 20.2586 19.4345 20.5832 19.7716C20.7105 19.9038 20.9853 20.183 20.6462 20.0288C19.5141 19.5142 18.7184 18.2498 17.979 17.2828C17.5318 16.6981 17.2568 16.8277 16.5876 16.679C16.3988 16.6371 16.2091 16.7103 16.0258 16.6318C15.9521 16.6002 15.9733 17.255 15.9733 17.3406C15.9733 18.4099 15.9733 19.4793 15.9733 20.5486C15.9733 20.7692 15.9733 20.9897 15.9733 21.2102C15.9733 21.87 15.9733 19.8906 15.9733 19.2308C15.9733 18.4471 16.0194 17.6463 15.9733 16.8628C15.9401 16.299 14.4874 17.5233 14.3614 17.6241C13.5786 18.2503 12.6626 18.5799 11.8359 19.131C11.5659 19.311 11.3096 19.5746 11.7834 19.1835C12.5367 18.5617 13.4748 18.1352 14.1986 17.4876C14.5213 17.1988 14.8336 16.9601 15.2172 16.7683"
                    className="primaryColor" stroke-linecap="round" />
                <path
                    d="M52.1565 11C51.1705 11.0567 50.3295 12.1763 49.7957 12.9337C49.1158 13.8981 48.757 15.5381 49.186 16.6802C49.9977 18.8408 52.8798 19.7015 54.8999 19.7015C55.9011 19.7015 56.598 19.8744 57.3191 19.0704C57.5781 18.7817 57.7586 18.2709 57.8509 17.8887C57.9591 17.4407 58.1874 17.0451 57.7017 17.1569C56.8912 17.3433 56.1886 17.4053 55.3345 17.4053C54.5706 17.4053 53.5367 17.5421 52.8569 17.0897C51.4401 16.1468 51.8062 13.7867 52.1565 12.3361C52.2087 12.1198 52.4937 11.7031 52.4937 11.5506C52.4937 11.2255 51.3781 12.2354 51.3133 12.3025C50.6659 12.9728 50.2886 13.7801 50.2886 14.7465C50.2886 15.6718 50.4704 14.4663 50.6388 14.0885C50.7117 13.925 50.983 13.333 50.9825 13.3365C50.9115 13.851 50.7267 14.3901 50.4313 14.8136C50.1991 15.1464 50.8494 13.968 50.9631 13.7797C51.3058 13.212 50.1848 16.2888 50.1848 15.6193C50.1848 15.1557 50.6283 14.5138 50.8009 14.1019C50.9222 13.8127 51.2095 12.9407 51.2095 13.256C51.2095 13.5053 50.8791 13.7927 50.7491 13.9744C50.4028 14.4583 50.1772 14.9416 50.081 15.5388C50.0245 15.89 49.9049 16.5411 50.3794 16.5593C50.8558 16.5776 51.3358 16.5593 51.8127 16.5593C51.8849 16.5593 52.2176 16.5983 51.9749 16.5526C51.6094 16.4838 51.3802 16.0645 51.2225 15.7603C50.9945 15.3203 50.3497 13.8944 50.8723 13.4171C51.0514 13.2535 51.2144 15.4057 51.2485 15.6596C51.2956 16.011 51.389 16.3343 51.6635 16.5593C51.8977 16.7512 51.4204 16.123 51.3457 15.9685C50.9871 15.2259 50.8723 14.6736 50.8723 13.8468C50.8723 13.6458 50.3516 14.8405 50.3145 15.1091C50.2567 15.5282 50.2528 16.0319 50.4572 16.4116C50.5897 16.6577 51.2071 17.2279 51.0279 17.0159C50.5688 16.4726 49.8024 15.9772 49.5427 15.2903C49.356 14.7963 49.4587 14.356 49.8281 14.0214C50.6348 13.2906 50.1062 14.3704 49.9643 14.8405C49.587 16.0904 50.1066 16.9812 51.0798 17.741C51.1196 17.772 52.0788 18.3579 51.9165 18.0499C51.4651 17.1932 50.1941 16.5641 49.9643 15.6126C49.8847 15.2829 50.4651 16.1315 50.4767 16.1497C51.0341 17.0261 51.6865 17.8384 52.6234 18.2916C52.8381 18.3954 54.9465 18.973 54.0243 18.7078C52.9474 18.3981 51.8863 16.9564 51.242 16.0893C51.0063 15.7722 50.6877 14.8394 51.2355 15.6126C51.96 16.6354 52.7426 17.3432 53.7649 18.0096C54.0405 18.1892 53.1554 17.0362 53.0385 16.895C52.5797 16.3408 51.456 15.4853 51.456 14.6928C51.456 14.2919 51.2785 13.9967 51.3522 14.6458C51.4736 15.7142 52.4592 17.4828 53.4147 17.9559C53.8198 18.1564 54.3328 18.2748 54.0633 17.6201C53.6243 16.554 52.8356 15.5582 52.1111 14.6928C51.9356 14.4832 51.7421 13.7397 51.8127 14.3974C51.9092 15.2966 52.6247 16.2791 53.2331 16.895C53.4738 17.1386 53.8001 17.3712 54.1151 17.4993C54.2251 17.544 54.4394 17.7693 54.4394 17.647C54.4394 17.3138 53.4387 16.5982 53.2071 16.3243C52.48 15.464 52.1565 14.3054 52.1565 13.1754C52.1565 13.0367 52.1565 12.4671 52.1565 12.5711C52.1565 13.2518 52.1161 13.9467 52.1629 14.6256C52.2568 15.9862 52.828 16.8956 53.966 17.459C54.8577 17.9005 55.6278 17.8887 56.5927 17.8887C57.1562 17.8887 56.6032 17.9696 56.3333 18.0364C55.5518 18.2299 55.0749 18.4611 54.2643 18.2513C53.2841 17.9976 58.3035 18.3721 57.2931 18.3721C56.5547 18.3721 55.8636 18.6138 55.1204 18.6138C54.6257 18.6138 54.3359 18.6138 55.0296 18.6138C55.8594 18.6138 56.8889 18.8454 57.4099 18.0364C57.7446 17.5166 56.8712 18.0703 56.7094 18.1573C56.2407 18.4093 55.9238 18.7526 55.4188 18.916C55.0071 19.0491 54.5087 18.9764 54.0827 18.9764C53.9287 18.9764 53.5625 19.0486 53.4471 18.9093C53.3355 18.7745 53.2749 18.6205 53.4925 18.6138C54.6728 18.5779 55.681 18.9533 56.8781 18.728C57.0419 18.6971 57.493 18.2513 57.118 18.2513C56.5572 18.2513 56.0471 18.7854 55.542 18.9764C54.9255 19.2096 54.3319 19.339 53.6741 19.339C52.8837 19.339 52.515 19.2402 51.9813 18.6877C51.7769 18.476 51.7771 18.1886 51.5727 17.9559C51.2783 17.6206 51.6929 18.3915 51.8322 18.493C52.7266 19.1446 57.0597 19.8426 57.0597 18.0096C57.0597 17.3687 57.366 17.0508 57.5202 16.4922C57.7722 15.579 58.1061 16.3472 57.7601 16.895C56.918 18.2283 57.856 15.8607 57.2218 15.9618C56.6829 16.0476 55.7387 16.4768 55.3215 16.8547C55.1263 17.0315 54.6287 16.9219 54.3746 16.9219C54.2372 16.9219 53.6929 16.9219 53.7909 16.9219C54.7247 16.9219 55.6486 16.8546 56.5797 16.7943C56.7102 16.7859 57.7552 16.4977 57.2931 16.566C56.6795 16.6568 56.151 17.0301 55.4901 17.0427C54.4222 17.0632 53.1871 17.2765 52.2667 16.7406C51.9242 16.5411 51.6736 16.1729 51.2809 16.0826C50.8284 15.9785 51.705 15.9579 51.8581 16.0088C53.075 16.4128 53.9835 16.801 55.302 16.801C55.7635 16.801 54.4266 16.7685 54.2643 16.7339C53.6178 16.5961 53.0675 16.3194 52.6234 15.8342C52.183 15.3529 53.0039 15.6928 53.2331 15.7805C53.8397 16.0125 54.3452 16.3523 54.8869 16.7406C55.0429 16.8524 55.4712 16.9219 55.2501 16.9219C54.2123 16.9219 53.2164 16.8347 52.2083 16.5593C51.6734 16.4132 51.0447 16.231 50.6388 15.8342C50.2819 15.4852 50.1718 16.0144 50.1718 16.3109C50.1718 17.1038 49.9956 17.8943 50.5739 18.493C51.5248 19.4773 52.8977 19.907 54.193 19.9432C54.9292 19.9638 56.0025 20.2302 56.3592 19.3994C56.5813 18.8821 57.0597 18.3542 57.0597 17.7679"
                    className="primaryColor" stroke-linecap="round" />
            </g>
        </g>
    </svg>
</div>
</div>
<div className="menu-mobile">
    <ul>
        <li><a className="hover-effect" href="#introducao">Inicio</a></li>
        <li><a className="hover-effect" href="#sobre">Sobre</a></li>
        <li><a className="hover-effect" href="#skills">Skills</a></li>
        <li><a className="hover-effect" href="#projetos">Projetos</a></li>
    </ul>
</div> */}