import { useState } from "react";
import Menus from "./menus";

const dashboard = () => {


    const [showSubmenu, setShowSubmenu] = useState('');
    const [clickedItem, setClickedItem] = useState('');


    const [visible, setVisible] = useState(true);

    const handleCloseItems = () => {
        setVisible(false);
    };

    const handleDisplayItems = () => {
        setVisible(true);
    };


    const sidebarItemsData = [
        {
            id: 1,
            menu: 'Dashboard',
            icon: '',
            slug: '/dashboard',
            content: 'This is a Dashboard page'
        },
        {
            id: 2,
            menu: 'Services',
            icon: '',
            submenu: [
                {
                    id: 1,
                    name: 'All Service',
                    slug: '/all-service',
                    content: 'this is a All service page'
                },
                {
                    id: 2,
                    name: 'My Service',
                    slug: '/my-service',
                    content: 'this is a My service page'
                },
            ],
        },
        {
            id: 3,
            menu: 'My Services',
            icon: '',
            submenu: [
                {
                    id: 1,
                    name: 'All Service',
                    slug: '/all-service1',
                    content: 'this is a All service page'
                },
                {
                    id: 2,
                    name: 'My Service',
                    slug: '/my-service1',
                    content: 'this is a My service page'
                },
            ],
        },
    ]



    return (
        <>

            <div className=''>
                <div className='w-full border py-4 text-center font-semibold bg-gray-700 shadow-lg text-2xl'>Header</div>
                <>
                    <div
                        className={
                            visible
                                ? 'w-[20%] border h-screen absolute transform translate-x-0 transition duration-500 ease-in-out bg-white shadow-lg'
                                : 'w-[20%] border h-screen absolute transform -translate-x-full transition duration-500 ease-in-out'
                        }
                    >
                        <button
                            onClick={handleCloseItems}
                            className=" text-white bg-red p-2 absolute top-2 right-2 my_btn"
                        >
                            <span className='text-3xl bg-gray-400 text-red-500 rounded-full p-1'>
                                close
                            </span>
                        </button>
                        <div className="">
                            <div className="flex flex-col bg-gray-900 min-h-screen">
                                <div className="flex flex-col flex-grow">
                                    <ul className="flex flex-col  ">
                                        {sidebarItemsData.map((item, index) => (
                                            <div className="px-4 rounded-md pt-2">
                                                <button className="w-full font-semibold bg-gray-600 py-2 text-left hover:bg-gray-700 cursor-pointer  pl-4"
                                                    onClick={() => setShowSubmenu(showSubmenu === item.menu ? '' : item.menu)}>

                                                    {item.menu}
                                                </button>

                                                {showSubmenu === item.menu && (
                                                    <ul className="sub_items flex flex-col w-full">
                                                        {item.submenu?.map((subItem, subIndex) => (
                                                            <li
                                                                className="font-semibold bg-gray-600 p-2  hover:bg-gray-700  ml-2 cursor-pointer"
                                                                id={`subitem-${item.id}`}
                                                                onClick={() => setClickedItem(subItem.name)}
                                                            >
                                                                {subItem.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleDisplayItems}
                        className={
                            visible
                                ? '-left-60 z-50 absolute '
                                : 'z-50 absolute transition duration-1000 ease-in-out animate-moveLeft '
                        }
                    >
                        <span className='my_btn mt-4 ml-4 text-3xl bg-blue-100 text-blue-500 rounded-full p-1'>open</span>
                    </button>
                </>
                <div
                    className={
                        !visible
                            ? 'p-[5%] py-4 w-[100%] border right-0 absolute transition-all duration-500 ease-in-out'
                            : 'py-4 p-[5%] w-[80%] border right-0 absolute transition-all duration-500 ease-in-out bg-gray-100 text-gray-800 min-h-screen'
                    }
                >
                   
                </div>
            </div>



        </>
    );
};

export default dashboard;
