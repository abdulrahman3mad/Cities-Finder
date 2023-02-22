function CitiesForm({ handleSearch, searchValue }) {
    return (
        <input onChange={(e) => handleSearch(e.target.value)}
            value={searchValue} type="text" autoFocus></input>
    )
}

export default CitiesForm;   