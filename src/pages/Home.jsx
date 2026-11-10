import { Hero, Invitation, FullImageSection1, Gallery, Details, MessageToGuest,  DressCode, Entourage, FullImageSection2, FullImageSection3,Guest, GoogleMaps, Footer} from '../sections'


const Home = () => {

    return (
        <>
        <Hero />  
        <Invitation />
        <FullImageSection1 />
        <Gallery />
        <FullImageSection2 />
        <Details />
        
        <DressCode />
        <FullImageSection3 />
        <Guest />
        {/* <FullImageSection2 /> */}
        <Entourage/>
         <MessageToGuest />
        <GoogleMaps />
        <Footer />
      </>
    );
}

export default Home;