import React, {useEffect} from 'react';
import {createSearchParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";

import {genresActions} from "../../redux/slices";
import './Genres.css';
import {useQuery} from "../../hooks";

const Genres = () => {
    const {genres} = useSelector((state) => state.genresReducer);
    const dispatch = useDispatch();
    const options = genres.map(({name, id}) => ({value: id, label: name}));
    const navigate = useNavigate();
    const query = useQuery();

    let genreIds = query.get('genres');

    let selectedOptions = [];
    if (genreIds) {
        genreIds = genreIds.split(',').map(id => +id);
        selectedOptions = options.filter(({value}) => genreIds.includes(value));
    }


    useEffect(() => {
        dispatch(genresActions.getGenres());
    }, []);


    function handleChange(genreItems) {
        const selectedGenresIds = genreItems.map(({value}) => value);
        navigate({
            pathname: '/movies',
            search: `?${createSearchParams({genres: selectedGenresIds.toString()})}`,
        });
    }


    return (

        <div className="genres">
            <Select
                isMulti
                onChange={handleChange}
                value={selectedOptions}
                options={options}
                placeholder={'Choose genre'}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                        ...theme.colors,
                        primary25: '#A084CA',
                        primary: 'black',
                    },
                })}
            />
        </div>
    );
};

export {Genres};