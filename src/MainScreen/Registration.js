function Registration() {

    return(
        <div>
            <h3 id="titleHeader" className="titleHeader">Registration</h3>

                <form id="centeredForm" className="centeredForm">
                    {/* <h3>Login</h3> */}
                    <label>Employee ID:</label>
                    <input type="text" name="employeeid" />
                    <br />
                    <label>Employee Name:</label>
                    <input type="text" name="employeename" />
                    <br />
                    <label>Employee Department:</label>
                    <input type="text" name="employeedepartment" />
                    <br />
                    <label>Employee Phone:</label>
                    <input type="tel" name="employeephone" />
                    <br />
                    <label>Employee Email:</label>
                    <input type="email" name="employeeemail" />
                    <br />
                    <legend title="Address">
                        <label>Address:</label>
                        <input type="text" name="employeeaddr1" />
                        <br />
                        <label>Street:</label>
                        <input type="text" name="employeestreet" />
                        <br />
                        <label>State:</label>
                        <input type="text" name="employeestate" />
                        <br />
                        <label>Country:</label>
                        <input type="text" name="employeecountry" />
                        <br />
                        <label>Pincode:</label>
                        <input type="text" name="employeepincode" />
                        <br />
                    </legend>
                    
                    <button type="submit">Register</button>
                </form>

        </div>
    )
}

export default Registration;