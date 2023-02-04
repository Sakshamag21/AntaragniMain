import { Outlet, Link } from "react-router-dom";

import {useRef, useState, useEffect, createRef, useLayoutEffect} from "react";
import gsap from "gsap";
const items = [
    {
      name: "Blog",
      color: "#f44336",
      href: "blog"
    },
    {
      name: "Contact",
      color: "#e91e63",
      href: "contact"
    },
    {
      name: "Home",
      color: "#9c27b0",
      href: ""
    },
    {
      name: "Gallery",
      color: "#673ab7",
      href: "gallery"
    },
    {
      name: "Competitions",
      color: "#3f51b5",
      href: "competitions"
    },
    {
      name: "Sponsors",
      color: "#3f51b5",
      href: "sponsors"
    }
  ];

const Menu = ({items}) => {
    const $root = useRef()
    const $indicator1 = useRef()
    const $indicator2 = useRef()
    const $items = useRef(items.map(createRef))
    const [ active, setActive ] = useState(0)
    
    const animate = () => {
      const menuOffset = $root.current.getBoundingClientRect()
      const activeItem = $items.current[active].current
      const { width, height, top, left } = activeItem.getBoundingClientRect()
      
      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: items[active].color,
        ease: 'elastic.out(.7, .7)',
        duration: .8
      }
      
      gsap.to($indicator1.current, {
        ...settings,
      })
      
      gsap.to($indicator2.current, {
        ...settings,
        duration: 1
      })
    }
    
    useEffect(() => {
      animate()
      window.addEventListener('resize', animate)
      
      return (() => {
        window.removeEventListener('resize', animate)
      })    
    }, [active])
    
    return (
      <div
        ref={$root}
        className="navbar_menu"
      >
        {items.map((item, index) => (
          <a
            key={item.name}
            ref={$items.current[index]}
            className={`navbar_item ${active === index ? 'active' : ''}`}
            onMouseEnter={() => {
              setActive(index)
            }}
            href={item.href}
           >
            {item.name}
          </a>
        ))}
        <div
          ref={$indicator1}
          className="navbar_indicator"
         />
        <div
          ref={$indicator2}
          className="navbar_indicator"
         />
      </div>
    )
  }
  
  
  /*--------------------
  App
  --------------------*/
  const Layout = () => {
    return (
      <div><section className="banner">
      <h2>Antaragni</h2>
  
      <video src="./smoke.mp4" autoPlay loop muted></video>
  </section>
        <Menu items={items} />
         <Outlet />
      </div>
    )
  }
  
  
  /*--------------------
  Render
  --------------------*/
  export default Layout;