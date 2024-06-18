import * as React from "react"
export default function Figma({action}) {
    return (
        <svg
        onClick={action}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer pt-0.5  hover:scale-105 ease-in-out w-10 h-10"
        >
        <path
          d="M4.95588 15.6029C5.30002 15.3633 5.58565 14.7667 5.98828 14.8839C8.40457 15.5877 11.7477 19.9503 12.6989 21.2996C13.9748 23.1095 18.8503 30.8276 12.1089 29.5772C3.56654 27.9927 -2.77378 16.4634 5.638 10.6622C8.68042 8.56395 11.7069 8.4551 14.948 10.2935C17.8394 11.9335 23.4504 16.0214 22.9122 20.0275C22.6533 21.9554 21.217 24.464 20.1284 26.0191C17.6129 29.6127 14.0606 28.1622 11.1503 25.6135C8.08907 22.9327 4.91695 18.3396 6.72571 13.9806C8.65126 9.34013 14.5675 8.90317 18.543 10.5516C22.9979 12.3987 26.3582 17.0885 24.977 22.0923C23.061 29.034 14.8175 28.9605 10.6341 24.3046C7.07943 20.3484 6.13592 14.3241 9.78603 10.1091C14.6443 4.49897 22.698 6.91383 25.6592 13.0404C27.69 17.2421 27.2693 23.2279 22.4698 25.5213C15.7613 28.727 7.8107 22.0035 7.46314 15.2711C7.21125 10.392 11.4115 6.02784 16.3491 6.60632C21.626 7.22453 25.0828 12.957 24.3502 17.9996C23.5507 23.503 17.9604 26.5442 12.8279 25.3185C6.91849 23.9073 1.26028 15.5045 5.50895 9.851C8.2589 6.19179 14.374 6.30815 17.9346 8.52363C23.7842 12.1634 25.0191 21.8604 18.1558 25.3001C5.37669 31.7046 -0.74966 4.14084 15.4458 4.08063C26.2649 4.04041 31.9851 23.4287 20.4234 26.5722C15.5535 27.8962 10.8799 23.9187 9.49106 19.4744C7.06752 11.7191 13.518 3.94592 21.7324 5.79515C28.0482 7.21699 31.8945 13.2309 30.8396 19.4744C29.881 25.1478 22.9998 30.9806 18.2664 25.0236C15.1001 21.0387 14.6722 14.0879 17.1972 9.66664C21.3425 2.40812 28.978 9.83223 29.586 15.2342C30.13 20.0686 27.0737 25.655 21.9905 26.4984C17.2821 27.2796 13.2869 23.0191 13.7313 18.3683C14.1582 13.8999 19.4132 9.94785 23.4469 13.4644C28.0408 17.4694 22.0331 26.918 16.6441 25.0789C12.6266 23.7078 17.9358 17.777 19.7782 17.3728C24.4029 16.3579 26.3592 25.812 22.4329 26.2219C19.3876 26.5398 19.8747 21.4097 21.4927 20.2856C24.7539 18.0199 26.8378 26.414 20.3681 24.9683C18.3832 24.5247 12.8778 19.3655 17.5659 17.889C18.5507 17.5788 19.6937 17.9249 20.6262 18.3683C21.8657 18.9577 24.0721 21.2905 22.8201 21.8526C20.2272 23.0168 18.5493 17.1626 18.7089 15.7135C18.7715 15.1457 19.1234 14.5527 19.6122 14.2571C19.8531 14.1115 20.2944 14.4734 20.2944 14.7549C20.2944 15.7932 19.1127 16.8042 18.0452 16.3772C15.9836 15.5526 17.9426 12.4071 18.6536 13.0588C19.5004 13.8351 17.4581 15.3216 16.3491 15.6214C14.4661 16.1303 12.0234 15.9532 10.6894 14.2571C9.08083 12.212 12.394 10.778 13.3257 13.0219C14.3422 15.4702 10.8829 17.3946 12.2195 13.9437C13.1898 11.4387 13.1726 13.2913 12.8095 13.4275C11.7517 13.8242 12.0553 11.761 11.7771 11.4365C11.6769 11.3195 11.6285 11.7063 11.5559 11.842C11.0489 12.7899 10.9213 13.3472 9.95195 13.9437C8.39649 14.9009 9.61665 13.6689 8.29274 14.3309C7.9279 14.5133 6.91252 15.6324 6.70727 15.7873C5.54477 16.6646 4.94201 16.4851 4.25533 15.308C3.43862 13.9079 3.94017 18.7466 3.99723 19.0688C4.63467 22.6685 11.0581 24.5411 14.0815 23.1062C15.1075 22.6194 14.978 21.5828 14.0631 22.3504C13.2629 23.0218 11.8733 25.0602 13.3441 25.9269C15.4846 27.1883 16.9982 23.9771 16.9022 22.4241C16.6983 19.126 11.9555 15.6687 9.78603 19.6219C8.0352 22.8123 13.8973 22.0889 14.7084 21.7973C19.6015 20.038 21.1227 15.7873 23.4284 11.6946C24.631 9.55997 28.4184 11.7847 29.844 12.6163"
          stroke="#2F2F2F"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path
          d="M6.38556 13.9436C6.11285 19.4432 6.13542 24.3939 10.8654 27.9547C15.0092 31.0742 23.5972 33.6587 26.6464 27.9363C29.5313 22.5221 30.439 13.5366 26.886 8.19168C23.9532 3.77969 17.374 2.76094 12.6168 4.50454C7.67893 6.31435 5.02307 11.1596 4.68947 16.2112C4.09735 25.1776 16.8515 27.0342 23.3464 25.5212C25.7359 24.9646 28.3969 23.8976 30.0201 21.9447C31.8253 19.7728 31.1488 18.0757 28.2871 18.0363C24.4208 17.9832 18.8649 18.5193 16.009 21.5022C14.4043 23.1783 13.4351 26.6872 15.1241 28.6553C16.6476 30.4305 19.6125 30.6265 21.7056 30.2776C27.3116 29.3433 29.4598 24.3446 30.4626 19.29C31.3088 15.0241 32.0076 8.39473 28.2503 5.14979C25.3722 2.66415 20.2042 1.87545 16.5436 1.70232C10.9999 1.44011 5.18809 4.79606 3.3621 10.1827C1.6217 15.3169 6.48249 19.1625 10.9576 20.4698C13.3882 21.1799 15.8408 21.1213 17.8157 19.3637C20.2905 17.1611 21.874 12.5646 20.5626 9.37156C18.6734 4.77166 13.1361 9.23923 11.7503 11.7129C9.45597 15.8084 9.49736 23.2713 13.723 26.2955C19.5647 30.4764 22.7818 16.0386 23.3464 12.9481C24.0437 9.13115 22.2342 9.89849 19.3274 10.6252"
          stroke="#2F2F2F"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path
          d="M12.925 9.30632C12.3281 9.30632 11.6469 9.18975 11.1253 9.53747C10.3296 10.068 9.72452 11.0583 10.1292 12.0251C10.87 13.7949 12.6065 13.3942 14.0147 12.9717M10.7092 9.34161C10.9385 9.32557 11.1678 9.31037 11.397 9.29597M11.397 9.29597C11.4341 9.29365 11.4712 9.29134 11.5082 9.28905M11.397 9.29597C11.4583 9.25497 11.4922 9.25824 11.5082 9.28905M11.397 9.29597C11.328 9.34223 11.2242 9.44483 11.0725 9.6278C10.9428 9.78408 10.85 10.2133 10.8269 10.6073M11.5082 9.28905C14.597 9.09854 17.6846 9.05209 20.7807 9.04442C21.9648 9.04149 23.5063 8.80413 24.6002 9.45719C24.747 9.54482 24.889 9.67662 25.0184 9.83829M11.5082 9.28905C11.5696 9.40719 11.3669 9.93015 11.4247 9.91399C11.4635 9.90311 11.5422 9.87929 11.6278 9.8529M25.0184 9.83829C25.6124 10.5805 25.9401 11.9519 25.2386 12.5667C24.1822 13.4925 22.4703 13.3042 21.1935 13.3042C18.7859 13.3042 16.3807 13.2051 13.9728 13.2051C12.9443 13.2051 11.6837 13.1321 11.0174 12.2035C10.8482 11.9677 10.7475 11.7131 10.7096 11.46M25.0184 9.83829C24.9675 9.86057 24.8219 9.92279 24.5329 10.0455M25.0184 9.83829C25.114 9.79647 24.8763 9.89522 24.6272 9.99825M10.7096 11.46C10.7042 11.4237 10.7 11.3875 10.6972 11.3513M10.7096 11.46C10.1997 11.4873 9.65011 11.5013 10.6972 11.3513M10.7096 11.46C10.9766 11.4456 11.2326 11.4276 11.2431 11.4275C11.3236 11.4264 11.4346 11.4252 11.5606 11.4241M10.6972 11.3513C10.6766 11.0914 10.7219 10.8361 10.8269 10.6073M10.6972 11.3513C10.7119 11.3492 10.7269 11.3471 10.7422 11.3449C10.8017 11.3365 10.8597 11.3283 10.9163 11.3203M10.8269 10.6073C10.9773 10.2799 11.2502 10.0069 11.6278 9.8529M10.8269 10.6073C10.8088 10.9157 10.8334 11.2026 10.9163 11.3203M11.6278 9.8529C11.6775 9.83262 11.7291 9.81441 11.7824 9.79841C12.1594 9.68532 11.8669 9.77913 11.6278 9.8529ZM10.9163 11.3203C10.9717 11.3991 11.0533 11.4022 11.1658 11.2852M10.9163 11.3203C11.0025 11.3082 11.0855 11.2965 11.1658 11.2852M11.1658 11.2852C11.18 11.2704 11.1948 11.2536 11.21 11.2348C11.383 11.0219 11.6871 10.6002 11.8319 10.3983C11.9725 10.2025 12.292 9.58069 12.2667 9.82042C12.2265 10.2028 11.9601 10.5256 11.8044 10.8771C11.7541 10.9908 11.7019 11.1037 11.651 11.2172M11.1658 11.2852C11.3393 11.2609 11.4998 11.2384 11.651 11.2172M11.651 11.2172C11.6202 11.2859 11.5898 11.3548 11.5606 11.4241M11.651 11.2172C11.7927 11.1973 11.9262 11.1785 12.0548 11.1602M11.5606 11.4241C11.5364 11.4817 11.5129 11.5397 11.4907 11.5981C11.3228 12.0395 11.4304 11.9224 11.6778 11.6311C11.7269 11.5733 11.7848 11.5024 11.8487 11.4224M11.5606 11.4241C11.6509 11.4234 11.7488 11.4228 11.8487 11.4224M11.8487 11.4224C11.9124 11.3427 11.982 11.2539 12.0548 11.1602M11.8487 11.4224C11.9427 11.422 12.0384 11.4219 12.1311 11.422M12.0548 11.1602C12.6066 10.4501 13.34 9.45429 13.0317 9.936C12.5122 10.7478 13.2298 9.5545 12.5034 10.7285C12.4942 10.7434 12.36 10.9472 12.255 11.1316M12.0548 11.1602C12.1228 11.1506 12.1894 11.1411 12.255 11.1316M12.255 11.1316C12.1793 11.2645 12.1188 11.3874 12.1311 11.422M12.255 11.1316C12.3483 11.1182 12.4398 11.1049 12.5308 11.0914M12.1311 11.422C12.1355 11.4344 12.149 11.4356 12.1744 11.4222M12.1311 11.422C12.1456 11.4221 12.16 11.4221 12.1744 11.4222M12.1744 11.4222C12.2196 11.3982 12.3024 11.3277 12.4373 11.1908C12.4579 11.1699 12.4903 11.1354 12.5308 11.0914M12.1744 11.4222C12.3328 11.4227 12.4801 11.4242 12.5914 11.4275C12.6018 11.4278 12.6133 11.4275 12.6255 11.4268M12.5308 11.0914C12.7435 10.8606 13.1806 10.3705 13.3124 10.2387C13.3604 10.1907 13.4534 10.0468 13.472 10.1121C13.5493 10.3826 13.1899 10.5989 13.0427 10.8386C13.0017 10.9054 12.9518 10.9707 12.8999 11.0358M12.5308 11.0914C12.6537 11.0733 12.7756 11.0549 12.8999 11.0358M12.8999 11.0358C12.7985 11.1631 12.6897 11.2898 12.6255 11.4268M12.8999 11.0358C13.0322 11.0154 13.1672 10.994 13.3088 10.9711M12.6255 11.4268C12.5916 11.4994 12.5701 11.5748 12.5689 11.6547M12.6255 11.4268C12.7108 11.4224 12.8318 11.4019 12.8525 11.4583M12.5689 11.6547C12.5687 11.6651 12.5689 11.6756 12.5694 11.6861C12.5725 11.7461 12.67 11.6448 12.7222 11.5934M12.5689 11.6547C12.6257 11.6343 12.6782 11.614 12.7222 11.5934M12.5689 11.6547C12.3086 11.7479 11.9553 11.8422 11.887 11.9613C11.4987 12.6382 15.7754 12.6716 15.822 12.6713C17.7863 12.6589 19.75 12.5271 21.7106 12.3795M12.7222 11.5934C12.7267 11.5891 12.7308 11.5851 12.7345 11.5816C12.7462 11.5706 12.7899 11.5247 12.8525 11.4583M12.7222 11.5934C12.803 11.5558 12.8556 11.5175 12.8556 11.477C12.8556 11.47 12.8545 11.4638 12.8525 11.4583M12.8525 11.4583C12.9677 11.3362 13.1469 11.1444 13.3088 10.9711M13.3088 10.9711C13.4968 10.7699 13.6615 10.5936 13.6756 10.5799L13.6794 10.5763C13.7353 10.5221 13.8779 10.3842 13.8573 10.4533C13.8078 10.6192 13.6787 10.7501 13.5821 10.8936C13.5738 10.906 13.5652 10.9183 13.5564 10.9305M13.3088 10.9711C13.389 10.9581 13.4712 10.9446 13.5564 10.9305M13.5564 10.9305C13.3107 11.271 12.886 11.557 12.8721 11.9723C12.8608 12.3131 13.4621 11.6265 13.7307 11.4165C13.9103 11.2759 14.2371 10.9986 14.5158 10.765M13.5564 10.9305C13.8367 10.8839 14.1479 10.8303 14.5158 10.765M14.5158 10.765C14.869 10.4689 15.145 10.2428 14.947 10.4533C14.8566 10.5495 14.7644 10.6439 14.6712 10.7373M14.5158 10.765C14.5665 10.756 14.6183 10.7468 14.6712 10.7373M14.6712 10.7373C14.4201 10.9893 14.1618 11.2344 13.9123 11.488C13.7694 11.6332 13.624 11.7762 13.4885 11.9283C13.2256 12.2234 13.4529 12.0614 13.6426 11.9228C14.0026 11.6597 14.5744 11.1426 15.1157 10.6583M14.6712 10.7373C14.7076 10.7308 14.7444 10.7242 14.7819 10.7175C14.8926 10.6976 15.0039 10.6779 15.1157 10.6583M15.1157 10.6583C15.3467 10.4517 15.5721 10.251 15.7732 10.0786M15.1157 10.6583C15.4003 10.6083 15.688 10.5587 15.9772 10.5078M15.7732 10.0786C16.3447 9.5885 16.7196 9.32649 16.4659 9.80391C16.4109 9.90759 16.3497 10.0079 16.2837 10.1056M15.7732 10.0786C15.9432 10.0895 16.1133 10.0984 16.2837 10.1056M15.7732 10.0786C15.2944 10.0479 14.8169 10.0017 14.3416 9.936C13.8595 9.86937 13.2149 9.80644 14.3856 9.71586C16.0341 9.58829 17.8316 9.33568 19.4819 9.54525C19.6635 9.56831 19.9135 9.5815 19.5645 9.69384C19.0401 9.86259 18.4976 10.0029 17.9476 10.1257M16.2837 10.1056C16.1899 10.2444 16.0865 10.3778 15.9772 10.5078M16.2837 10.1056C16.7183 10.1239 17.1539 10.1307 17.5898 10.129M15.9772 10.5078C15.5369 11.0318 15.001 11.5019 14.6167 12.0494C13.9795 12.9575 16.5468 10.9405 17.4236 10.2607C17.436 10.2511 17.4494 10.2406 17.4638 10.2293M15.9772 10.5078C16.4709 10.4211 16.9691 10.3309 17.4638 10.2293M17.4638 10.2293C17.5006 10.2003 17.5434 10.1663 17.5898 10.129M17.4638 10.2293C17.4752 10.2269 17.4865 10.2246 17.4979 10.2223M17.5898 10.129C17.7092 10.0333 17.8525 9.9167 17.9789 9.81332M17.5898 10.129C17.5952 10.129 17.6006 10.129 17.6059 10.1289M17.9789 9.81332C18.2156 9.61977 18.3931 9.47248 18.2436 9.59478C18.1552 9.6671 18.067 9.73994 17.9789 9.81332ZM17.9789 9.81332C17.854 9.91744 17.7296 10.0226 17.6059 10.1289M17.6059 10.1289C17.5698 10.16 17.5338 10.1911 17.4979 10.2223M17.6059 10.1289C17.7198 10.1284 17.8337 10.1274 17.9476 10.1257M17.4979 10.2223C17.1133 10.5561 16.737 10.9007 16.3779 11.2569C16.1595 11.4734 15.535 12.0548 15.8385 12.0053C16.5744 11.8854 17.5322 11.0264 18.1335 10.6405C18.2873 10.5417 18.5631 10.3086 18.8389 10.1034M17.4979 10.2223C17.6482 10.1912 17.7982 10.1591 17.9476 10.1257M18.8389 10.1034C19.0492 9.94681 19.2596 9.80646 19.4159 9.75438C19.4886 9.73015 19.3191 9.87414 19.2618 9.92499C19.1978 9.98173 19.1337 10.0383 19.0695 10.0948M18.8389 10.1034C18.9157 10.1007 18.9926 10.0978 19.0695 10.0948M18.8389 10.1034C18.5417 10.1138 18.2446 10.1215 17.9476 10.1257M19.0695 10.0948C18.4099 10.675 17.7395 11.2439 17.1044 11.8512C15.7744 13.1229 18.5607 11.3268 18.5903 11.3119C19.3357 10.9365 20.0765 10.6059 20.8468 10.2882C22.2578 9.70637 20.6755 10.5126 20.5991 10.5524C19.4281 11.163 18.2217 11.6821 17.0273 12.242C15.6032 12.9095 19.9391 11.0507 21.3751 10.4093C21.6193 10.3002 22.0523 10.0789 22.3812 9.91408M19.0695 10.0948C20.1772 10.0512 21.2839 9.9746 22.3812 9.91408M22.3812 9.91408C22.7989 9.70481 23.0489 9.58678 22.5315 9.90589M22.3812 9.91408C22.4313 9.91132 22.4814 9.90858 22.5315 9.90589M22.5315 9.90589C22.4159 9.9772 22.262 10.0703 22.0631 10.1892C21.1994 10.705 20.7282 10.9774 19.8231 11.4825C19.213 11.8231 17.3428 12.6989 18.029 12.5667C19.8523 12.2155 21.6918 11.2495 23.3894 10.5304C23.6729 10.4103 23.9122 10.3089 24.1128 10.2238M22.5315 9.90589C22.5845 9.90304 22.6375 9.90023 22.6905 9.89747C23.3568 9.86277 23.8075 9.93502 24.1128 10.2238M24.1128 10.2238C24.278 10.1538 24.4169 10.0948 24.5329 10.0455M24.1128 10.2238C24.1191 10.2299 24.1255 10.236 24.1317 10.2422M24.5329 10.0455C24.5683 10.0279 24.6 10.012 24.6272 9.99825M24.5329 10.0455C24.4257 10.0988 24.2843 10.168 24.1317 10.2422M24.6272 9.99825C24.2333 10.1612 23.8109 10.3347 24.6332 9.98003C24.7785 9.91735 24.7503 9.93576 24.6272 9.99825ZM24.1317 10.2422C23.8068 10.4002 23.4315 10.5809 23.2298 10.679C22.1995 11.1799 20.8489 11.584 19.9332 12.286C18.8816 13.0922 22.4518 11.4493 23.6646 10.9156C24.8294 10.4031 22.6627 11.6318 22.5089 11.7302C22.4068 11.7954 21.8542 12.1761 21.7106 12.3795M24.1317 10.2422C24.3456 10.4552 24.4859 10.7801 24.5782 11.2569C24.7459 12.1232 23.7027 12.6412 22.9546 12.8199C22.6215 12.8994 22.6287 12.8062 22.8501 12.5887C22.9727 12.4683 23.1115 12.3656 23.2491 12.2622M21.7106 12.3795C21.6214 12.5059 21.6902 12.5637 22.1236 12.4346C22.2089 12.4092 22.3111 12.3714 22.4242 12.3252M21.7106 12.3795C21.9485 12.3615 22.1864 12.3434 22.4242 12.3252M22.4242 12.3252C23.2873 11.9725 24.7857 11.1284 24.248 11.543C23.944 11.7774 23.6181 11.9823 23.3124 12.2145C23.2913 12.2304 23.2702 12.2463 23.2491 12.2622M22.4242 12.3252C22.6992 12.3042 22.9742 12.2831 23.2491 12.2622M23.2491 12.2622C23.461 12.2461 23.6729 12.2302 23.8847 12.2145M15.4643 14.6911C15.1098 14.717 14.7413 14.7467 14.3718 14.7941M14.3718 14.7941C13.9999 14.8419 13.6271 14.9078 13.267 15.0061M14.3718 14.7941C14.4515 14.8315 14.5221 14.8819 14.5782 14.9497C14.7791 15.1929 14.5369 15.3198 14.2513 15.3904M14.3718 14.7941C14.1021 14.6678 13.7283 14.6911 13.461 14.6911C12.4759 14.6911 12.0939 14.8914 11.4522 15.5331C11.0801 15.9052 10.7264 16.5588 10.5661 17.0356C10.4402 17.4102 10.5173 17.6173 10.693 17.7309M13.267 15.0061C12.7753 15.1403 12.3074 15.3349 11.898 15.6267C11.5862 15.8488 11.2726 16.1629 11.0421 16.5162M13.267 15.0061C13.2803 15.0073 13.2936 15.0088 13.3069 15.0103C13.4548 15.0273 13.6581 15.1205 13.8681 15.2395M13.267 15.0061C12.7884 14.9594 12.2749 15.0587 11.8539 15.291C11.369 15.5585 11.103 16.0234 11.0421 16.5162M11.0421 16.5162C10.7933 16.8975 10.6413 17.3245 10.693 17.7309M11.0421 16.5162C10.9835 16.9903 11.1146 17.4903 11.4232 17.8654M10.693 17.7309C10.7331 18.0466 10.8961 18.3498 11.232 18.6096C11.956 19.1695 12.9922 19.2417 13.9673 19.2483M10.693 17.7309C10.8714 17.8463 11.1513 17.8653 11.4232 17.8654M13.9673 19.2483C14.3803 19.2512 14.7824 19.2422 15.1451 19.2535C15.2223 19.2559 15.3021 19.2484 15.3762 19.27C15.5281 19.3143 15.061 19.3066 14.9029 19.3031C14.607 19.2965 14.2867 19.2857 13.9673 19.2483ZM13.9673 19.2483C13.4385 19.1865 12.9121 19.0516 12.5034 18.7417C12.3545 18.6288 12.2323 18.5007 12.1345 18.3618M12.1345 18.3618C11.2338 17.0817 12.4061 14.8842 13.8681 15.2395M12.1345 18.3618C11.8396 18.2576 11.6017 18.0824 11.4232 17.8654M12.1345 18.3618C12.203 18.386 12.2746 18.4063 12.3493 18.4225C12.702 18.4989 13.0036 18.4249 13.2598 18.261M13.8681 15.2395C13.994 15.2701 14.1222 15.3196 14.2513 15.3904M13.8681 15.2395C13.9632 15.2934 14.0596 15.3525 14.1529 15.4123M14.2513 15.3904C14.4199 15.4828 14.5903 15.6112 14.7598 15.7808C14.878 15.8989 14.8397 15.8793 14.7141 15.7932M14.2513 15.3904C14.2189 15.3984 14.1859 15.4057 14.1529 15.4123M14.7141 15.7932C14.6566 15.7538 14.581 15.7006 14.4936 15.6402M14.7141 15.7932C14.6945 15.752 14.6697 15.7129 14.6387 15.6762C14.5919 15.6206 14.543 15.614 14.4936 15.6402M14.7141 15.7932C14.8744 16.1302 14.687 16.6052 14.6663 16.9971C14.6531 17.2462 14.5929 17.7766 14.571 18.1005M14.4936 15.6402C14.3923 15.5703 14.2754 15.4908 14.1529 15.4123M14.4936 15.6402C14.3782 15.7015 14.2601 15.9423 14.1582 16.1585M14.1529 15.4123C13.9473 15.4538 13.7427 15.4704 13.6811 15.4836C13.1481 15.5974 12.861 15.8504 12.6355 16.3532C12.5993 16.4338 12.5577 16.5662 12.5171 16.7054M11.4232 17.8654C11.5544 17.8655 11.6837 17.8611 11.7989 17.8611M13.2598 18.261C13.4399 18.1458 13.5976 17.9861 13.7347 17.8032M13.2598 18.261C13.3093 18.4074 13.3666 18.5065 13.4335 18.5161C13.529 18.5297 13.6532 18.1046 13.7347 17.8032M13.2598 18.261C13.207 18.1046 13.1631 17.8942 13.1264 17.6812M13.7347 17.8032C13.7816 17.7405 13.8261 17.6752 13.8682 17.608C13.889 17.5749 13.9259 17.4796 13.9708 17.3504M13.7347 17.8032C13.7723 17.6637 13.8009 17.5507 13.8132 17.5199C13.8578 17.4083 13.9117 17.3574 13.9708 17.3504M13.9708 17.3504C14.1364 16.8737 14.41 15.9353 14.3746 15.9624C14.2992 16.02 14.2273 16.0861 14.1582 16.1585M13.9708 17.3504C14.1624 17.3278 14.4086 17.7676 14.571 18.1005M14.1582 16.1585C13.8245 16.5085 13.5591 17.0059 13.305 17.4089M14.1582 16.1585C14.1106 16.2596 14.0665 16.3553 14.0279 16.4247C14.0196 16.4395 13.4381 17.7953 13.3069 17.8281C13.2988 17.8301 13.3047 17.6371 13.305 17.4089M13.305 17.4089C13.2688 17.4664 13.2328 17.522 13.1968 17.5749C13.1733 17.6095 13.1497 17.6453 13.1264 17.6812M13.305 17.4089C13.3057 16.9162 13.28 16.2593 13.0295 17.0472M13.1264 17.6812C12.8866 18.0497 12.6716 18.4293 12.8666 17.641C12.9294 17.3872 12.9833 17.1926 13.0295 17.0472M13.1264 17.6812C13.0867 17.4513 13.0552 17.2184 13.0295 17.0472M13.0295 17.0472C13.0135 16.941 12.9998 16.8586 12.9877 16.8155C12.8812 16.436 12.6717 16.5068 12.5171 16.7054M14.571 18.1005C14.5549 18.3366 14.5592 18.463 14.6167 18.2904C14.6229 18.2719 14.629 18.2532 14.6349 18.2346M14.571 18.1005C14.5941 18.1479 14.6155 18.1931 14.6349 18.2346M14.6349 18.2346C14.8513 17.5494 14.8786 16.7932 15.1781 16.133C15.2404 15.9956 15.275 16.1046 15.2931 16.3015M14.6349 18.2346C14.6768 18.3245 14.7088 18.3964 14.7268 18.4335C14.8722 18.7329 15.0328 19.4687 15.1121 18.6647C15.1895 17.8785 15.2286 17.0888 15.2931 16.3015M15.2931 16.3015C15.3145 16.5344 15.3129 16.8903 15.307 17.1065M15.2931 16.3015C15.2986 16.2343 15.3043 16.1671 15.3102 16.1C15.4205 14.8459 15.3842 16.0577 15.3762 16.1991C15.3591 16.502 15.3341 16.8043 15.307 17.1065M15.307 17.1065C15.3063 17.1328 15.3055 17.157 15.3047 17.1787C15.3027 17.2317 15.1607 18.9773 15.1891 18.5161C15.2181 18.0454 15.2649 17.5761 15.307 17.1065ZM12.5171 16.7054C12.4087 16.8447 12.3273 17.0469 12.3273 17.2007C12.3273 17.413 12.4195 17.0397 12.5171 16.7054ZM15.1671 20.1396C15.2116 21.469 15.5301 23.1672 15.156 24.4764C15.0661 24.7913 14.7592 24.9775 14.4846 25.1148C13.3334 25.6904 11.4481 25.1032 10.8743 23.937M10.8743 23.937C10.8384 23.8641 10.8079 23.7922 10.7825 23.7214M10.8743 23.937C10.8322 23.8726 10.8025 23.7998 10.7825 23.7214M10.8743 23.937C11.1444 24.3513 11.8695 24.3427 12.2942 24.3993M10.7825 23.7214C10.6348 23.3088 10.6611 22.9331 10.8051 22.6011M10.7825 23.7214C10.7466 23.58 10.7423 23.4202 10.7549 23.257M10.8051 22.6011C10.8335 22.5358 10.8663 22.4723 10.9033 22.4104M10.8051 22.6011C10.8413 22.5019 10.8855 22.4036 10.9326 22.3117M10.8051 22.6011C10.7186 22.8384 10.6781 23.0813 10.7549 23.257M10.9033 22.4104C11.3859 21.6037 12.5703 21.093 13.5082 20.9931M10.9033 22.4104C10.9103 22.3766 10.9202 22.3437 10.9326 22.3117M10.9033 22.4104C10.9028 22.413 10.9023 22.4155 10.9018 22.4181C10.8575 22.6468 10.7779 22.9576 10.7549 23.257M13.5082 20.9931C13.5938 20.984 13.6774 20.9783 13.7581 20.9761C13.8265 20.9743 14.6522 21.0518 14.6002 21.0807C14.4125 21.185 14.1167 21.1294 13.9233 21.0752C13.7864 21.0369 13.6476 21.0095 13.5082 20.9931ZM13.5082 20.9931C13.0048 20.9337 12.4944 21.0164 12.0415 21.2348M12.0415 21.2348C11.735 21.3825 11.4549 21.5923 11.221 21.8622C11.1703 21.9207 11.1029 22.015 11.0339 22.1296M12.0415 21.2348C12.6225 20.8167 13.1768 20.7934 13.9618 20.6789C14.1035 20.6583 14.2049 20.6414 14.2747 20.6277M12.0415 21.2348C11.9434 21.3053 11.8446 21.3871 11.7438 21.4825C11.5359 21.6792 11.2171 21.877 11.0339 22.1296M11.0339 22.1296C10.9999 22.186 10.9656 22.2473 10.9326 22.3117M11.0339 22.1296C10.9921 22.1872 10.9573 22.2477 10.9326 22.3117M10.7549 23.257C10.8058 23.3736 10.9083 23.4607 11.0834 23.4968C11.6742 23.6186 12.3875 22.6883 12.8114 22.1443M12.8114 22.1443C12.8778 22.0592 12.937 21.9835 12.9876 21.9227C13.1407 21.739 13.0485 21.8113 12.8487 21.998M12.8114 22.1443C12.8251 22.0959 12.8377 22.0471 12.8487 21.998M12.8114 22.1443C12.694 22.5584 12.489 22.9483 12.3823 23.3647C12.3585 23.4574 12.266 23.6345 12.3602 23.6509C12.4879 23.673 12.5763 23.5052 12.6684 23.4142C12.8672 23.218 13.0452 23.0018 13.2298 22.7923C13.4368 22.5574 14.0583 21.8193 14.3195 21.5485C14.5672 21.2917 13.9792 22.177 13.7802 22.4731C13.5795 22.7717 12.3158 24.5113 13.505 23.4417C14.5341 22.5161 13.6634 23.2575 14.6167 22.374C14.6268 22.3646 14.6408 22.3511 14.6562 22.3363M12.8487 21.998C12.5107 22.3139 11.8648 22.9575 11.5787 23.2436C11.5155 23.3068 11.4659 23.3607 11.4333 23.3976M12.8487 21.998C12.86 21.9477 12.8697 21.8969 12.8776 21.8457C12.9528 21.3543 12.5451 21.8736 12.4868 21.9558C12.1774 22.3922 11.8722 22.8305 11.5457 23.2546C11.4958 23.3194 11.4588 23.3661 11.4333 23.3976M11.4333 23.3976C11.3777 23.4604 11.3718 23.4734 11.4333 23.3976ZM14.6562 22.3363C14.7124 22.2823 14.788 22.2111 14.7708 22.2585C14.7312 22.3672 14.677 22.4683 14.6141 22.5649M14.6562 22.3363C14.6451 22.3885 14.6353 22.438 14.6277 22.4841C14.6233 22.511 14.6187 22.538 14.6141 22.5649M14.6562 22.3363C14.7534 21.882 14.9604 21.2205 14.8589 20.789C14.8092 20.5778 14.4943 20.6149 14.2747 20.6277M14.6141 22.5649C14.4478 22.8201 14.221 23.0437 14.0443 23.2931C13.8928 23.507 13.7413 23.7209 13.593 23.937C13.4748 24.1093 13.1663 24.2973 13.2738 24.4764C13.4246 24.7277 13.7883 24.1877 14.0113 23.9976C14.1425 23.8857 14.3229 23.6362 14.4347 23.5364M14.6141 22.5649C14.5591 22.8849 14.4923 23.2103 14.4347 23.5364M14.4347 23.5364C14.5262 23.4546 14.5717 23.4732 14.5066 23.7499C14.4513 23.9852 14.2974 24.69 14.314 24.4489C14.3349 24.1465 14.3808 23.8411 14.4347 23.5364ZM14.2747 20.6277C14.2245 20.6306 14.1793 20.6323 14.1434 20.6294C13.7096 20.5947 14.7624 20.5322 14.2747 20.6277ZM18.5352 15.1864C19.3275 14.3942 21.1642 13.9116 21.8924 15.0103C22.8917 16.5179 22.1659 19.1898 20.1038 19.1325C18.432 19.086 16.8462 16.9824 18.4307 15.7148C19.113 15.1689 20.3668 14.5674 21.0559 15.4506C21.7705 16.3665 21.1864 18.0258 20.0102 18.2354C18.8787 18.437 18.5311 16.6817 18.8765 15.9349C19.3323 14.9492 20.8927 15.268 20.6046 16.4302C20.5589 16.6143 20.4439 16.838 20.2864 17.0266M20.2864 17.0266C20.1963 17.1346 20.0923 17.231 19.9794 17.3019M20.2864 17.0266C20.2197 16.834 20.0984 16.5256 20.0927 16.5128C19.83 15.9156 19.5584 16.0338 19.4351 16.3541M20.2864 17.0266C20.3116 17.0994 20.329 17.1556 20.3294 17.1732C20.3371 17.4898 20.1036 17.6001 20.1203 17.8832C20.143 18.2688 19.9339 18.227 19.6249 18.1583M19.9794 17.3019C19.8836 17.362 19.7815 17.4038 19.676 17.4186M19.9794 17.3019C20.1188 17.0648 20.1451 16.6048 19.9882 16.4192C19.8111 16.2097 19.5993 16.2352 19.4351 16.3541M19.9794 17.3019C19.9062 17.4265 19.8016 17.4895 19.676 17.4186M19.676 17.4186C19.67 17.4194 19.664 17.4202 19.658 17.4209C19.2077 17.4706 19.0843 16.9824 19.1957 16.6724C19.2387 16.5526 19.3265 16.4329 19.4351 16.3541M19.676 17.4186C19.6288 17.3919 19.5786 17.3463 19.5259 17.2778C19.3328 17.0267 19.3326 16.6205 19.4351 16.3541"
          stroke="#E5E5E5"
          strokeLinecap="round"
        />
      </svg>
    )
}  
