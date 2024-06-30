// frontend/src/components/VendorList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getVendors } from '../api'; // Assuming you have an API function for fetching vendors

function VendorList() {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        // Fetch vendors from API on component mount
        getVendors()
            .then((data) => setVendors(data))
            .catch((error) => console.error('Error fetching vendors:', error));
    }, []);

    return (
        <div>
            <h1>Vendors</h1>
            <ul>
                {vendors.map((vendor) => (
                    <li key={vendor._id}>
                        {vendor.vendorName} - {vendor.bankAccountNo} 
                        <Link to={`/vendors/${vendor._id}/edit`}>Edit</Link>
                    </li>
                ))}
            </ul>
            <Link to="/vendors/new">Add Vendor</Link>
        </div>
    );
}

export default VendorList;
