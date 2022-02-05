import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../state/store';
import App from '../common/App'
import Header from '../common/Header';
import CountryContainer from '../common/Country/CountryContainer';
import CountryComponent from '../common/Country/components/CountryComponent';
import InfoComponent from '../common/InfoComponent';
import CountryPageContainer from '../pages/CountryPage/CountryPageContainer';

jest.mock('../utils/filter');

describe('Snapshots', () => {
    xit('<App />', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('<Header />', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <BrowserRouter>
                        <Header />
                    </BrowserRouter>
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('<InfoComponent />', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <BrowserRouter>
                        <InfoComponent />
                    </BrowserRouter>
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('<CountryContainer />', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <BrowserRouter>
                        <CountryContainer />
                    </BrowserRouter>
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    xit('<CountryComponent />', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <BrowserRouter>
                        <CountryComponent />
                    </BrowserRouter>
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('<CountryPageContainer />', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <BrowserRouter>
                        <CountryPageContainer />
                    </BrowserRouter>
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
})
