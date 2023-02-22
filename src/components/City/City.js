import reactStringReplace from "react-string-replace";

function City({ city, state, searchValue, population, isDefault }) {

    if (!isDefault) {
        population = (+population).toLocaleString("en-US");
        city = reactStringReplace(city, searchValue, (match) => <span className="city-text">{match}</span>);
        state = reactStringReplace(state, searchValue, (match) => <span className="city-text">{match}</span>);
    }

    return (
        <div className="city-container">
            <div>
                {city}
                {!isDefault && ", "}
                {!isDefault && state}
            </div>
            <span class="pop">{population}</span>
        </div>
    )
}

export default City;