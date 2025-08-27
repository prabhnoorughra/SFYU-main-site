import { useNavigate, NavLink } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    return (
       <div className="navbar bg-[#1F80FF] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost mr-10 sm:hidden sm:mr-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#1F80FF] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className=''>
                            <NavLink
                                to="/"
                                className={({ isActive}) =>
                                    isActive ? "active underline text-[#132F57]" : 
                                    "underline text-white hover:cursor-pointer hover:text-neutral-400"
                                }
                                >
                                Home
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                to="/team"
                                className={({ isActive}) =>
                                    isActive ? "active underline text-[#132F57]" : 
                                    "underline text-white hover:cursor-pointer hover:text-neutral-400"
                                }
                                >
                                Our Team
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                to="/events"
                                className={({ isActive}) =>
                                    isActive ? "active underline text-[#132F57]" : 
                                    "underline text-white hover:cursor-pointer hover:text-neutral-400"
                                }
                                >
                                Events
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                to="/apply"
                                className={({ isActive}) =>
                                    isActive ? "active underline text-[#132F57]" : 
                                    "underline text-white hover:cursor-pointer hover:text-neutral-400"
                                }
                                >
                                Apply
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                to="/contacts"
                                className={({ isActive}) =>
                                    isActive ? "active underline text-[#132F57]" : 
                                    "underline text-white hover:cursor-pointer hover:text-neutral-400"
                                }
                                >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <img src="/transparentlogo.png" alt="Club Logo" 
                    className="h-25 w-auto object-cover overflow-visible
                        hover:cursor-pointer hidden sm:inline"
                    onClick={() => navigate("/")}/>
            </div>
            <div className="navbar-center hidden sm:flex">
                <ul className="menu menu-horizontal px-1  sm:text-lg lg:text-2xl">
                    <li className=''>
                        <NavLink
                            to="/"
                            className={({ isActive}) =>
                                isActive ? "active underline text-[#132F57]" : 
                                "underline text-white hover:cursor-pointer hover:text-neutral-400"
                            }
                            >
                            Home
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            to="/team"
                            className={({ isActive}) =>
                                isActive ? "active underline text-[#132F57]" : 
                                "underline text-white hover:cursor-pointer hover:text-neutral-400"
                            }
                            >
                            Our Team
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            to="/events"
                            className={({ isActive}) =>
                                isActive ? "active underline text-[#132F57]" : 
                                "underline text-white hover:cursor-pointer hover:text-neutral-400"
                            }
                            >
                            Events
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            to="/apply"
                            className={({ isActive}) =>
                                isActive ? "active underline text-[#132F57]" : 
                                "underline text-white hover:cursor-pointer hover:text-neutral-400"
                            }
                            >
                            Apply
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            to="/contacts"
                            className={({ isActive}) =>
                                isActive ? "active underline text-[#132F57]" : 
                                "underline text-white hover:cursor-pointer hover:text-neutral-400"
                            }
                            >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='navbar-center flex sm:hidden'>
                <img src="/transparentlogo.png" alt="Club Logo" 
                    className="h-25 w-auto object-cover overflow-visible
                        hover:cursor-pointer"
                    onClick={() => navigate("/")}/>
            </div>
            <div className="navbar-end inline sm:hidden lg:inline">
            </div>
        </div>
    );
}


export default NavBar