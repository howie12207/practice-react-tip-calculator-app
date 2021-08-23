import React from "react";
import Form from "./components/Form";
import { ReactComponent as Logo } from "./components/img/logo.svg";

function App() {
  return (
    <div className="min-h-screen md:max-w-3xl m-auto flex flex-col justify-center">
      <header className="p-12">
        <Logo className="mx-auto" />
      </header>
      <section>
        <Form />
      </section>
    </div>
  );
}

export default App;
