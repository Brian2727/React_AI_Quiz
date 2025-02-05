import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { FiMenu, FiX, FiLogOut, FiUser, FiBook, FiAward } from 'react-icons/fi';

export const Menu = ({ dispatch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            dispatch({ type: 'logout' });
            setIsOpen(false);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const menuItems = [
        {
            icon: <FiUser className="menu-icon" />,
            label: 'Profile',
            action: () => console.log('Profile clicked')
        },
        {
            icon: <FiBook className="menu-icon" />,
            label: 'My Quizzes',
            action: () => console.log('Quizzes clicked')
        },
        {
            icon: <FiAward className="menu-icon" />,
            label: 'Skills Tested',
            action: () => console.log('Skills clicked')
        },
        {
            icon: <FiLogOut className="menu-icon" />,
            label: 'Logout',
            action: handleLogout,
            className: 'menu-item-logout'
        }
    ];

    return (
        <div className="menu-wrapper">
            <button 
                className={`menu-button ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {isOpen && (
                <div className="menu-backdrop" onClick={() => setIsOpen(false)} />
            )}

            <div className={`menu-panel ${isOpen ? 'open' : ''}`}>
                {menuItems.map((item, index) => (
                    <button
                        key={item.label}
                        className={`menu-item ${item.className || ''}`}
                        onClick={item.action}
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
