import '../customStyles/searchCriteriaStyles.css';

function CabRegistration() {
    return(
        // <div className="searchContainer">
        <>
            
        
            <h3 id="titleHeader" className="titleHeader">Sign Up Cab Booking Service</h3>
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
                                <label htmlFor="cabtype">Cab Type:</label>
                                <input type="text" name="cabtype" id="cabtype" className='search-input'/>
                                <label>Cab Number:</label>
                                <input type="text" name="cabnumber" className='search-input'/>
                                <label>Cab Route</label>
                                <input type="text" name="cabroute" className='search-input'/>
                                <label>Driver Name:</label>
                                <input type="text" name="drivername" className='search-input'/>
                                <label>Driver Phone:</label>
                                <input type="tel" name="drivermobile" className='search-input'/>
                                <label>Password:</label>
                                <input type="password" name="driverpassword" className='search-input'/>
                            </div>

                            <div id="driverAddress" className="contactSection">
                                    <label>Address:</label>
                                    <input type="text" name="driveraddr1" className='search-input'/>
                                    <label>Street:</label>
                                    <input type="text" name="street" className='search-input'/>
                                    <label>State:</label>
                                    <input type="text" name="state" className='search-input'/>
                                    <label>Country:</label>
                                    <input type="text" name="country" className='search-input'/>
                                    <label>Pincode:</label>
                                    <input type="text" name="pincode" className='search-input'/>
                                    <label>Confirm Password:</label>
                                    <input type="password" name="eemail" className='search-input'/>
                            </div>
                        </div>
                        <div id="submitOption" className="formButtonOptionsContainer">
                            <button type="submit" className='icon-btn'>Register</button>
                            <button type="submit" className='icon-btn'>Cancel</button>
                            <button type="submit" className='icon-btn'>Clear</button>
                        </div>
                    
                    </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default CabRegistration;