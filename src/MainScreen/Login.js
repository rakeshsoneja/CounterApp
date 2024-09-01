import '../customStyles/searchCriteriaStyles.css';

function Login() {
    return (
        
            <div className="searchContainer">
    
                <h3 id="titleHeader" className="titleHeader">Sign In</h3>
                <div id="registrationFormContainer" className='registrationFormContainer'>
                    <div>
                        <div id="employeeDetailsLayout" className="employeeDetailsLayout">
                            
                                <div id="employeeForm" className="contactSection">
                                    <label htmlFor="employeeid">User ID:</label>
                                    <input type="text" name="employeeid" id="employeeid" className='search-input'/>
                                    <label>Password:</label>
                                    <input type="password" name="employeepassword" className='search-input'/>
                                </div>
                        </div>
                        <div id="submitOption" className="formButtonOptionsContainer">
                            <button type="submit" className='icon-btn'>Sign In</button>
                            <button type="submit" className='icon-btn'>Cancel</button>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Login;