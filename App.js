import React from "react";
import FileUpload from "./components/FileUpload";
import RibCheck from "./components/RibCheck";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Identity Verification</h1>
      </header>
      <main>
        <section>
          <h2>Vérification de document</h2>
          <FileUpload />
        </section>
        <section>
          <h2>Vérification de RIB</h2>
          <RibCheck />
        </section>
      </main>
    </div>
  );
}

export default App;
