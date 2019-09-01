import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import {configureStore} from "../store";
import {Provider} from "react-redux";

export default withRedux(configureStore, {debug: true})(
  class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const {Component, pageProps, store} = this.props;
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
