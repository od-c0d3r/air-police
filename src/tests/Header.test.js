import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../state/store';
import Header from '../common/Header';

describe('<Header />', () => {
    test('renders logo and search bar', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>
        );
        
        const searchBar = screen.getByPlaceholderText(/Filter by/i);
        const logo = screen.getByText(/AirPolice/i);

        expect(searchBar).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
    });

});
