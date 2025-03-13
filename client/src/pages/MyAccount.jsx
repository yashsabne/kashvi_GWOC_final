import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MyAccount.css";
import { useSelector } from "react-redux";


const MyAccount = () => {


    const user = useSelector((state) => state.user?.user);
    const [savedAddress, setSavedAddress] = useState([]);

    useEffect(() => {
        if (user?.addresses) {
            setSavedAddress(user.addresses);
        }
    }, [user]);

    console.log(savedAddress)

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    const editAddress = (index) => {
        console.log("Edit address:", index);
    };

    const deleteAddress = (index) => {
        console.log("Delete address:", index);

    };


    return (
        <div className="my_acc-container">
            {/* Sidebar */}
            <nav className="my_acc-sidebar">
                <h4>My Account</h4>
                <a href="#profile">Profile</a>
                <a href="/orders">Orders</a>
                <a href="#addresses">Addresses</a>
                <a href="#setting">Setting</a>
            </nav>

            {/* Main Content */}
            <div className="my_acc-content">
                {/* Profile Section */}
                <div className="my_acc-profile">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGHehFJ4NMKhA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723016881020?e=1747267200&v=beta&t=lqnuTk3RIJF91P3E3jzc8MS_ZH27peZS2bLTU0dmRS4" alt="User Profile" />
                    <div className="name-email" >
                        <h5>Welcome, Yash!</h5>
                        <p>Email: yash@example.com</p>
                    </div>
                </div>

                {/* Addresses Section */}
                <div className="manage-addresses">
                    <h4 className="title">Manage Addresses</h4>

                    <button className="add-address-btn">
                        ➕ ADD A NEW ADDRESS
                    </button>

                    {savedAddress.map((add, i) => (
                        <div key={i} className="address-card">
                            <span className="address-type">home</span>

                            <div className="address-content">
                                <h6>{add.name} <span className="phone mx-3">{user.phone}</span></h6>
                                <p>{add.street}, {add.city}, {add.state} - <b>{add.pincode}</b>.</p>
                            </div>

                            <div className="menu-container">
                                <button className="menu-btn" onClick={() => toggleMenu(i)}>⋮</button>
                                {openMenu === i && (
                                    <div className="menu-dropdown">
                                        <button className="menu-item" onClick={() => editAddress(i)}>✏️ Edit</button>
                                        <button className="menu-item delete" onClick={() => deleteAddress(i)}>🗑️ Delete</button>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>




                {/* Settings Section */}
                <div className="my_acc-section" id="settings">
                    <h5 className="my_acc-section-title">Settings</h5>
                    <p>Manage your account settings here.</p>

                    {/* Delete Account */}
                    <button className="my_acc-delete-btn">Delete Account Permanently</button>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;

