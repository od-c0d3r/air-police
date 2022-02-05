import reducer, {
  filterByName,
  filterShowAll,
  fetchCountryData,
} from '../state/air/airSlice';

describe('Redux Unit tests', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject(
      {
        air: [],
        filter: [],
      },
    );
  });
  it('should handle a country being fetched and added to store', () => {
    const previousState = {
      air: [],
      filter: [],
    };
    expect(reducer(previousState, fetchCountryData({ id: 0, name: 'countryName', data: 'countryData' })))
      .toMatchObject(
        {
          air: [{ id: 0, name: 'countryName', data: 'countryData' }],
          filter: [{ id: 0, name: 'countryName', data: 'countryData' }],
        },
      );
  });
  it('should handle a show all data filter', () => {
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
  it('should handle a filter data by name', () => {
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
});
