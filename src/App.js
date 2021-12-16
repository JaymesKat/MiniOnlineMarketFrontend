import './App.css';
import {Provider} from 'react-redux'
import {AuthProvider} from "./context/AuthContext";
import OnlineMarket from "./OnlineMarket";
import {ProductProvider} from "./context/ProductContext";
import {store} from './redux/store'

function App() {

    return (
        <div className="App">
            <AuthProvider>
                <ProductProvider>
                    <Provider store={store}>
                        <OnlineMarket/>
                    </Provider>
                </ProductProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
