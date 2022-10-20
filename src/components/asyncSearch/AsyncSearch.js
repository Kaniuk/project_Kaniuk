import React, {useState} from 'react';
import AsyncSelect from "react-select/async";

import {movieService} from "../../services";
import './AsyncSearch.css';
import {NavLink} from "react-router-dom";

const AsyncSearch = () => {
    const [results, setResults] = useState([]);

    const onChange = (results) => {
        setResults(results);
    };
    const loadOptions = async (query, callback) => {
        const {data: {results}} = await movieService.searchMovies({query});
        callback(results.map(movie => ({name: movie.name, id: movie.id})));
    };
    const Option = (props) => {
        const {
            data,
            className,
            cx,
            isDisabled,
            isFocused,
            isSelected,
            innerRef,
            innerProps,
        } = props;
        return (
            <div className='select'>
                <NavLink className="search-option" to={`/movies/${data.id}`}>
                <div
                    ref={innerRef}
                    className={cx(
                        {
                            option: true,
                            'option--is-disabled': isDisabled,
                            'option--is-focused': isFocused,
                            'option--is-selected': isSelected,
                        },
                        className,
                    )}
                    {...innerProps}
                >
                    {data.name}
                </div>
            </NavLink>
            </div>
        );
    };

    return (
        <div className="select">
            <AsyncSelect
                value={results}
                placeholder={'Search movie'}
                onChange={onChange}
                loadOptions={loadOptions}
                className="async-select"
                components={{Option}}

            />
        </div>
    );
};

export {AsyncSearch};