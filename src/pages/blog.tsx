import {Container, Grid} from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Blog from "../components/Blog"
import OurBlog2 from "../components/OurBlog2"
import FooterBlog from "../components/FooterBlog"

export default function AboutUs() {
    return (
      <>
      <Navbar/>
      <Blog/>
      <Container maxW="container.xl">
      <Grid gap={3} gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr)">
      <OurBlog2/>
      <OurBlog2/>
      <OurBlog2/>
      <OurBlog2/>
      <OurBlog2/>
      </Grid>
      </Container>
      <FooterBlog/>
      
      </>
    )
  }