import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../state/store';
import InfoComponent from '../common/InfoComponent';

describe('<InfoComponent />', () => {
  it('renders info table and title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <InfoComponent />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId('info'));

    const table = screen.getByText(/Qualitative name/i);
    const title = screen.getByText(/Indexs Table/i);

    expect(table).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
