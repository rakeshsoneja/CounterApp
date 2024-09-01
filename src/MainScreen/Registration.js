import { useState } from 'react';
import '../customStyles/searchCriteriaStyles.css';
import EmployeeRegistration from './EmployeeRegistration';
import CabRegistration from './CabRegistration';

function Registration() {
    const [registrationOption, setRegistrationOption] = useState("registrationChoice", {})

    function displayRegistrationForm(registrationFor) {
        // switch(registrationFor) {
        //     case "employee":
        //         return <EmployeeRegistration />;
        //     case "cab":
        //         return;
        //     default:
        //         return;
        // }

        setRegistrationOption(registrationFor)
    }

    function renderRegistrationForm() {
        console.log("registrationOption = " + registrationOption);
        switch(registrationOption) {
            case "employee":
                return <EmployeeRegistration />;
            case "cab":
                return <CabRegistration />;
            case "registrationChoice":
                return (
                   <>
                        <h3 id="titleHeader" className="titleHeader">Sign Up for Cab Booking Service</h3>
                         <div id="registrationFormContainer" className='registrationFormContainer'>
                            <div id="submitOption" className="formButtonOptionsContainer">
                                <button className='icon-btn' onClick={() => displayRegistrationForm('employee')}>Employee</button>
                                <button className='icon-btn' onClick={() => displayRegistrationForm('cab')}>Cab</button>
                            </div>
                        </div>
                   </>
                );
            default:
                return null;
        }
    }


    return(
        <div className="searchContainer">
            {renderRegistrationForm()}
        </div>
    )
}

export default Registration;