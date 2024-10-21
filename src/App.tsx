import { useState } from "react";
import MasterForm from "./components/MasterForm";
import Toolbar from "./components/tools/Toolbar";
import { createPortal } from "react-dom";
import FormDataJson from "./components/FormDataJson";

const App = () => {
    const [visibleFormDataJSON, setVisibleFormDataJSON] = useState(false);
    return (
        <main className="relative w-full h-screen flex gap-5 p-5 bg-slate-600">
            <Toolbar onVisibleDataJSON={setVisibleFormDataJSON} />
            <MasterForm />
            {visibleFormDataJSON &&
                createPortal(<FormDataJson onVisibleDataJSON={setVisibleFormDataJSON} />, document.body)}
        </main>
    );
};

export default App;
