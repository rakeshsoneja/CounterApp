import '../customStyles/searchCriteriaStyles.css';

function Registration() {

    return(
        <div className="searchContainer">
        
            <h3 id="titleHeader" className="titleHeader">Sign Up for Cab Booking Service</h3>
            <div id="registrationFormContainer" className='registrationFormContainer'>
                <div>
                    <div id="employeePhoto" className="profileImageContainer">
                       <img 
                           src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg?background=%23b6e3f4" 
                           alt="Avatar" 
                           style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                       />
                   </div>
                    <div id="employeeDetailsLayout" className="employeeDetailsLayout">
                        
                            <div id="employeeForm" className="contactSection">
                                <label htmlFor="employeeid">Employee ID:</label>
                                <input type="text" name="employeeid" id="employeeid" className='search-input'/>
                                <label>Employee Name:</label>
                                <input type="text" name="employeename" className='search-input'/>
                        
                                <label>Employee Department:</label>
                                <input type="text" name="employeedepartment" className='search-input'/>
                                <label>Employee Phone:</label>
                                <input type="tel" name="employeephone" className='search-input'/>
                                <label>Employee Email:</label>
                                <input type="email" name="employeeemail" className='search-input'/>
                                <label>Password:</label>
                                <input type="password" name="employeeemail" className='search-input'/>
                            </div>

                            <div id="employeeAddress" className="contactSection">
                                    <label>Address:</label>
                                    <input type="text" name="employeeaddr1" className='search-input'/>
                                    <label>Street:</label>
                                    <input type="text" name="employeestreet" className='search-input'/>
                                    <label>State:</label>
                                    <input type="text" name="employeestate" className='search-input'/>
                                    <label>Country:</label>
                                    <input type="text" name="employeecountry" className='search-input'/>
                                    <label>Pincode:</label>
                                    <input type="text" name="employeepincode" className='search-input'/>
                                    <label>Confirm Password:</label>
                                    <input type="password" name="employeeemail" className='search-input'/>
                            </div>
                        </div>
                        <div id="submitOption" className="formButtonOptionsContainer">
                            <button type="submit" className='icon-btn'>Register</button>
                            <button type="submit" className='icon-btn'>Cancel</button>
                            <button type="submit" className='icon-btn'>Clear</button>
                        </div>
                    
                    </div>
            </div>
        </div>
    )
}

export default Registration;