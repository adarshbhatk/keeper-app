import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea.jsx";

function App() {
    return (
        <div className="body">
            <Heading />
            <CreateArea />
            <Note 
            key="1"
            title="Note Title"
            content="Note Content"
            />
            <Footer />
        </div>
    );
}

export default App;