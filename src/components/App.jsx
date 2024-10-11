import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

function App() {
    return (
        <div className="body">
            <Heading />
            <Note />
            <Footer />
        </div>
    );
}

export default App;