import React from 'react';
//import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Products = () => {

    const shoes = {
        "air-jorden-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&"
        },
        "dolton-shell-boots": {
            name: "Dolton Shell",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&"
        },
        "dolton-shel-boots": {
            name: "Dolton Shell",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&"
        },
    };



    return (
        <div>
            This is Products Page
            <ul>
                {Object.entries(shoes).map(([productID, { name, img }]) =>
                    (
                        <li key={productID}>
                            <Link to={productID}>
                                <h2>{name}</h2>
                                <img src={img} alt={name} />
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}
