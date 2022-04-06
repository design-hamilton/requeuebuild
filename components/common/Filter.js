import { FilterContainer, FilterSubContainer } from "../styled/common.styled";
import { useState, useEffect } from 'react';

import { GrClose } from 'react-icons/gr';
import InlineList from "./InlineList";

const Filter = ({ handleCloseFilter ,filterHead}) => {
    
    const [customer, setCustomer] = useState({ name: "All" });
    const customers = [{ name: "All" }, { name: "Online" }, { name: "Premium" }, { name: "Walk-in"}];
    const handleSelectCustomer = (e) => {
        setCustomer(e);
    }

    const [customerlocation, setCustomerlocation] = useState({ name: "All" });
    const customerslocations = [{ name: "All" }, { name: "Neartest" }, { name: "Check-in" }];
    const handleSelectCustomerlocations = (e) => {
        setCustomerlocation(e);
    }


    const [customertime, setCustomertime] = useState({ name: "All" });
    const customerstimes = [{ name: "All" }, { name: "New booking " }, { name: "Longest time" }];
    const handleSelectCustomertimes = (e) => {
        setCustomertime(e);
    }

    const [customerpreorder, setCustomerpreorder] = useState({ name: "All" });
    const customerspreorders = [{ name: "All" }, { name: "Pre-order" }, { name: "No Pre-order" }];
    const handleSelectCustomerpreorders = (e) => {
        setCustomerpreorder(e);
    }

    const [customerparty, setCustomerparty] = useState({ name: "All" });
    const customerspartys = [{ name: "All" }, { name: "Family" }, { name: "Single" }];
    const handleSelectCustomerpartys = (e) => {
        setCustomerparty(e);
    }

    const [customerspecarea, setCustomerspecarea] = useState({ name: "All" });
    const customersspecareas = [{ name: "All" }, { name: "Balcony" }, { name: "Up stairs" }, { name: "Non smoking"}, { name: "Ground floor" }];
    const handleSelectCustomerspecareas = (e) => {
        setCustomerspecarea(e);
    }




    return (
        <>
            <FilterContainer>
                <div className="close" onClick={() => handleCloseFilter()}><GrClose /></div>
                {filterHead? 
                <h2>{filterHead}</h2>
                : ''}
                <FilterSubContainer>
                    <h2>Select Customer</h2>
                    <InlineList listItem={customers} value={customer.name} handleSelect={handleSelectCustomer} />
                </FilterSubContainer>

                <FilterSubContainer>
                    <h2>Select customer locations</h2>
                    <InlineList listItem={customerslocations} value={customerlocation.name} handleSelect={handleSelectCustomerlocations} />
                </FilterSubContainer>

                <FilterSubContainer>
                    <h2>Select customer time</h2>
                    <InlineList listItem={customerstimes} value={customertime.name} handleSelect={handleSelectCustomertimes} />
                </FilterSubContainer>
              
                <FilterSubContainer>
                    <h2>Select customer pre-order</h2>
                    <InlineList listItem={customerspreorders} value={customerpreorder.name} handleSelect={handleSelectCustomerpreorders} />
                </FilterSubContainer>
                
              
                <FilterSubContainer>
                    <h2>Select Party</h2>
                    <InlineList listItem={customerspartys} value={customerparty.name} handleSelect={handleSelectCustomerpartys} />
                </FilterSubContainer>
                

                <FilterSubContainer>
                    <h2>Select special Area</h2>
                    <InlineList listItem={customersspecareas} value={customerspecarea.name} handleSelect={handleSelectCustomerspecareas} />
                </FilterSubContainer>
            </FilterContainer>
        </>
    )
}

export default Filter
