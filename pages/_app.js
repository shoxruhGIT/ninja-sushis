import { SessionProvider } from "next-auth/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MealRuducer from "../store/reducer/redux";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const initialState = {
    isLoading: "chat",
    data: [],
    users: [],
  };

  const store = createStore(MealRuducer, initialState);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}
