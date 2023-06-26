import Navbar from "../components/Navbar";
import OurBlog1 from "../components/OurBlog1";
import OurVision from "../components/OurVision";
import MeetOur from "../components/MeetOur";
import SeeOurTech from "../components/SeeOurTech";
import NeedUs from "../components/NeedUs";
import WeAreHiring1 from "../components/WeAreHiring1";
import Footer from "../components/Footer";

import { ApolloProvider } from "@apollo/client";
import client from "../../lib/Apollo-client";

export default function AboutUs() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <OurBlog1 />
        <OurVision />
        <MeetOur />
        <SeeOurTech />
        <NeedUs />
        <WeAreHiring1 />
        <Footer />
      </ApolloProvider>
    </>
  );
}
