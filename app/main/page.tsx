import Header from "../header/page";
import About from "../about/page";
import Experience from "../experiences/page";
// import Projects from "../projects/page";

export default function Main() {
    return (
        <main style={{ overflowX: 'hidden', overflowY: 'scroll', height: '100vh' }}>
            <Header />
            <About />
            <Experience />
            {/* <Projects /> */}
        </main>
    );
}