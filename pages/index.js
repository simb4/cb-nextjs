import React from "react";
import Layout from "components/organisms/Layout";
import Banner from "components/molecules/Banner";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps(ctx) {
  }

  render() {
    return (
      <Layout>
        <Banner/>
      </Layout>
    )
  }
}

export default Index;
