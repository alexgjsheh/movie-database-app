function FilterBtn({ name, type, handleClick, currentFilter }) {
    return (
        <button
            className={`filter-btn ${
                currentFilter === type ? "active-filter" : ""
            }`}
            onClick={() => handleClick(type)}
        >
            {name}
        </button>
    );
}

export default FilterBtn;
