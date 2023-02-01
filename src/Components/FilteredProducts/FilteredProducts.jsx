import React from 'react';
import { useProductActions } from "../ProductProvider/ProductProvider";
import P_Filtered from "../FilteredProducts/P_Filtered.module.css";
import Select from 'react-select';
import Search from '../../common/Search/Search';

const FilteredProducts = () => {

    const dispatch = useProductActions();
    const [filter, setFilter] = React.useState({value: "", label: "All"});
    const [sort, setSort] = React.useState({value: "", label: "default"});

    const filterOptions = [
        { value: "", label: "All" },
        { value: "XS", label: "XS" },
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "XL", label: "XL" },
    ];

    const sortOptions = [
        { value: "", label: "default" },
        { value: "ascending", label: "ascending price" },
        { value: "descending", label: "descending price" },
    ]

    const filterHandler = (filteredOption) => {
        setFilter(filteredOption);
        dispatch({ type: "filter", filteredOption });
        dispatch({ type: "sort", sortedOption: sort });
    }

    const sortHandler = (sortedOption) => {
        setSort(sortedOption);
        console.log("sorted option: ", sortedOption.value)
        dispatch({ type: "sort", sortedOption });

    }

    return (
        <section className={P_Filtered.filter_container}>

            <Search filter={filter} sort={sort} />
            <div>
                <p>filtered products by size:</p>
                <Select
                    defaultValue={filter.value}
                    onChange={filterHandler}
                    options={filterOptions}
                />
            </div>

            <div>
                <p>sort by price: </p>
                <Select
                    defaultValue={sort.value}
                    onChange={sortHandler}
                    options={sortOptions}
                />
            </div>

            {/* <select name="filter-product" id="" onChange={filterHandler}>
                <option value="">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select> */}

        </section>


    );
}

export default FilteredProducts;