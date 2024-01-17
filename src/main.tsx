import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/config.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
