import Header from "@/components/header";
import Footer from "@/components/footer";

const MainLayout = (props) => {
    return(
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
    );
}
export default MainLayout;