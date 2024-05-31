import React, { useState, useEffect } from 'react';

const RoleSelector = () =>
{
    const [selectedRole, setSelectedRole] = useState('');
    useEffect(() =>
    {
        const savedRole = localStorage.getItem('role');
        if (savedRole) {
            setSelectedRole(savedRole);
        }
    }, []);

    const handleRoleChange = (event) =>
    {
        const role = event.target.value;
        setSelectedRole(role);
        localStorage.setItem('role', role);
        if (role === 'student') {
            window.location.href = "/studentsHome";
        } else if (role === 'instructor') {
            window.location.href = "/instructorsHome";
        }
        else if (role === 'admin') {
            window.location.href = "/";

        } else {
            console.log("Choose Role ...");
        }
    };

    return (
        <div className=''>
         
            <select value={selectedRole} defaultValue={"none"} onChange={handleRoleChange} className='bg-transparent outline outline-firstButton px-1'>
                <option value="none" selected >Select Your Role</option>
                <option value="student">
                    Student </option>

                <option value="admin">Admin</option>
                <option value="instructor">Instructor</option>
            </select>
        
        </div>
    );
};

export default RoleSelector;