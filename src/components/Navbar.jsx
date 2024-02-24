import React from 'react';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import './Navbar.css';

export default function Navbar() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '#intro'
        },
        {
            label: 'About Me',
            icon: 'pi pi-star',
            url: '#about'
        },
        {
            label: 'Skills',
            icon: 'pi pi-bolt',
            url: '#skills'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            url: '#projects'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            url: 'sanjaiiti2709@gmail.com'
        }
    ];

    const logo = <h3 height="40" className="mr-2">PortFolio</h3>;

  return (
    <div className="card">
        <Menubar className='nav-bg' model={items} end={logo} />
    </div>
  )
}
