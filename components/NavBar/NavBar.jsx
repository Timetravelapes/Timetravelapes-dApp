import React, { useState, useEffect, useContext, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//IMPORT INTERNAL
import Style from './NavBar.module.css';
import images from '../../assets';
import {Model, TokenList} from '../index';



const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Tokens",
      link: "/"
    },
    {
      name: "Pools",
      link: "/"
    },
  ];
  //USESTATE
  const [openModel, setopenModel] = useState(false);
  const [openTokenBox, setopenTokenBox] = useState(false);
  const [account, setaccount] = useState(true);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* //LOGO IMAGE */}
          <div className={Style.Navbar_box_left_img}>
            <Image src={images.TTALogo} alt="logo" width={80} height={80} />
          </div>
          {/* MENU ITEMS */}

          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i)=>(
              <Link
              key={i + 1}
              href={{pathname: '${el.name}', query: '${el.link' }}
              >
                <p className={Style.NavBar_box_left_menu_item}>
                  {el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* //Middle SECTION */}                
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>
            {/* //INPUT SECTION */}
            <input type="text" placeholder="Search Tokens"/>            
          </div>
        </div>
        {/* //RIGHT SECTION */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.avalanche} alt="NetWork" height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>
          {account ? (
              <button onClick={() => setopenModel(true)} >Connect</button>
            ) : (
              <button onClick={() => setopenTokenBox(true)} >0xdrf5zfd4ztztuzfgrws...</button>
          )}
          
          {openModel && (
            <Model setopenModel={setopenModel} connectWallet="Connect" />
          )}
        </div>
      </div>

      {/* TOKENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setopenTokenBox={setopenTokenBox} />
      )}
    </div>
  );  
};

export default NavBar;