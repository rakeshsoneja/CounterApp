import { useState } from 'react';
import '../customStyles/searchCriteriaStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchDisplayContainer() {
    const [inputField1, setInputField1] = useState('');
    const [inputField2, setInputField2] = useState('');
    const [inputField3, setInputField3] = useState('');
    const [inputField4, setInputField4] = useState('');
    const [inputField5, setInputField5] = useState('');
    const [inputField6, setInputField6] = useState('');
    const [data, setData] = useState([
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        // Add more items as needed
    ]);

    const [criteriaValues, displayCriteriaValues] = useState("");


    function handleSearch(e) {
        console.log("handle Search");
        console.log(e.target.id);

        switch(e.target.id) {
            case "InputField1":
                setInputField1(e.target.value);
            break;
            case "InputField2":
                setInputField2(e.target.value);
            break;
            case "InputField3":
                setInputField3(e.target.value);
            break;
            case "InputField4":
                setInputField4(e.target.value);
            break;
            case "InputField5":
                setInputField5(e.target.value);
            break;
            case "InputField6":
                setInputField6(e.target.value);
            break;
            default:
                setInputField1(e.target.value);
            }
        }
        // setSearchTerm(e.target.value);

    // function setInputField1(e) {
    //     console.log("Input Field 1");
    //     console.log(e);
    // }

    // function setInputField2(e) {
    //     console.log("Input Field 2");
    // }

    // function setInputField3(e) {
    //     console.log("Input Field 3");
    // }

    // function setInputField4(e) {
    //     console.log("Input Field 4");
    // }

    // function setInputField5(e) {
    //     console.log("Input Field 4");
    // }

    // function setInputField6(e) {
    //     console.log("Input Field 6");
    // }

    function displaySearchFieldValues() {
        console.log("Field Value 1 " + inputField1);
        console.log("Field Value 2 " + inputField2);
    }

    return (
        <div className="searchContainer">
            <div className="search-form">
                <fieldset title='Test'>
                    <legend>Search Criteria</legend>
                <div>
                    <input
                        type="text"
                        value={inputField1}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="search-input"
                        id="InputField1"
                    />
                    <input
                        type="text"
                        value={inputField2}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="search-input"
                        id="InputField2"
                    />
                    <input
                        type="text"
                        value={inputField3}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="search-input"
                        id="InputField3"
                    />
                    <input
                        type="text"
                        value={inputField4}
                        onChange={handleSearch}
                        placeholder="Search..."
                        id="InputField4"
                        className="search-input"
                    />
                    <input
                        type="text"
                        value={inputField5}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="search-input"
                        id="InputField5"
                    />
                    <input
                        type="text"
                        value={inputField6}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="search-input"
                        id="InputField6"
                    />
                    <button className="icon-btn" onClick={displaySearchFieldValues}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search</button>
                </div>
                </fieldset>
                
                {/* Add more form elements as needed */}
            </div>
            {/* <div className="display-grid">
                {data
                    .filter(item => item.name.toLowerCase().includes(inputField1.toLowerCase()))
                    .map(item => (
                        <div key={item.id} className="grid-item">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
            </div> */}
        </div>
    );
}

export default SearchDisplayContainer;