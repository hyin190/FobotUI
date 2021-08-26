import React, { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import Header from "../sections/header"
import Footer from "../sections/footer"

export default function HomePage() {
    return (
    <React.Fragment>
        <Container maxWidth="lg">
        <Header/>
        <div>
        content
        </div>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
    );
}