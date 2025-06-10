import Home from "./components/Home";
const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#e3f2fd] py-8 px-4 ">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-light text-gray-800 mb-2 font-['beauti'] ">
                    TrueTone Enhancer{" "}
                </h1>
                <p className="text-lg text-gray-500 font-['renda'] mt-5">
                    Upload your Image and let AI enhance to in seconds!
                </p>
            </div>

            <Home />

            <div className="heading text-gray-500 mt-6">
                Powered By @SheryiansAI
            </div>
        </div>
    );
};

export default App;

