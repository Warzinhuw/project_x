// import { StatusServicos } from "../../components/StatusServicos"
import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header";
import { QuadrosUser } from "../../components/QuadrosUser";

export default function Usuario() {
    return (
        <>
            <Header />
            <QuadrosUser />
            <div id="transitador"></div>
            <Footer />
        </>
    )
}