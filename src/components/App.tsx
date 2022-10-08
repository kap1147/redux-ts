import { Provider } from 'react-redux';
import { store } from '../redux';

import { RepositoriesList } from './RepositoriesList';

export const App = () => {
    return (<Provider store={store}>
        <div>
            <h1>Hi!</h1>
            <RepositoriesList />
        </div>
    </Provider>)
};