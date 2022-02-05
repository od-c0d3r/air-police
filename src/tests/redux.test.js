import reducer, {
    filterByName,
    filterShowAll,
    fetchCountryData,
} from '../state/air/airSlice'

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject(
        {
            air: [],
            filter: [],
        }
    )
});

test('should handle a country being fetched and added to store', () => {
    const previousState = {
        air: [],
        filter: [],
    }

    expect(reducer(previousState, fetchCountryData({ id: 0, name: 'countryName', data: 'countryData' })))
        .toMatchObject(
            {
                air: [{ id: 0, name: 'countryName', data: 'countryData' }],
                filter: [{ id: 0, name: 'countryName', data: 'countryData' }],
            }
        )
});

test('should handle a show all data filter', () => {
    const previousState = {
        air: [{ id: 0, name: 'countryName', data: 'countryData' }, { id: 1, name: 'countryName2', data: 'countryData2' }],
        filter: [{ id: 0, name: 'countryName', data: 'countryData' }],
    };

    const expectedState = {
        air: [{ id: 0, name: 'countryName', data: 'countryData' }, { id: 1, name: 'countryName2', data: 'countryData2' }],
        filter: [{ id: 0, name: 'countryName', data: 'countryData' }, { id: 1, name: 'countryName2', data: 'countryData2' }],
    };

    expect(reducer(previousState, filterShowAll())).toMatchObject(expectedState);
});

test('should handle a filter data by name', () => {
    const previousState = {
        air: [{ id: 0, name: 'Name', data: 'countryData' }, { id: 1, name: 'Country', data: 'countryData2' }],
        filter: [{ id: 0, name: 'Name', data: 'countryData' }, { id: 1, name: 'Country', data: 'countryData2' }],
    };

    const expectedState = {
        air: [{ id: 0, name: 'Name', data: 'countryData' }, { id: 1, name: 'Country', data: 'countryData2' }],
        filter: [{ id: 0, name: 'Name', data: 'countryData' }],
    };

    expect(reducer(previousState, filterByName('Name'))).toMatchObject(expectedState);
});
