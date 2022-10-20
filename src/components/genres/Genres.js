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
    debugger
    const options = genres.map(({name, id}) => ({value: id, label: name}));
    const navigate = useNavigate();
    const query = useQuery();

    const genreId = query.get('genre');
    const selectedOption = options.find(({value}) => value == genreId);


    useEffect(() => {
        dispatch(genresActions.getGenres());
    }, []);


    function handleChange(genreItem) {
        navigate({
            pathname: '/movies',
            search: `?${createSearchParams({genre: genreItem.value})}`,
        });
    }


    return (

        <div className="genres">
            <Select
                onChange={handleChange}
                value={selectedOption}
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