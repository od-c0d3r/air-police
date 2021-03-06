import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../state/store';
import App from '../common/App';

describe('<App />', () => {
  it('renders <App />', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    const searchBar = screen.getByPlaceholderText(/Filter by/i);
    const logo = screen.getByText(/AirPolice/i);

    expect(searchBar).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
