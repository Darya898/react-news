import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {ThemeProvider} from "./providers/ThemeProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./appStore.ts";
import BaseLayouts from './layouts/BaseLayouts.tsx';
import '../shared/index.css';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <BaseLayouts/>
            </Provider>
        </ThemeProvider>
    </StrictMode>
);
