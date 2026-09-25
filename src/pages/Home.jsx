import { Hero, Invitation, FullImageSection1, Gallery, Details, MessageToGuest,  DressCode, Entourage, FullImageSection3, MalePrincipal, FemalePrincipal, FullImageSection4, EntourageList, EntourageList1, GoogleMaps, Footer} from '../sections'
import { Cutoffs } from '../components'

const Home = () => {

    return (
        <>
        <Hero />  
        <Invitation />
        <FullImageSection1 />
        <Gallery />
        <Details />
        <DressCode />
        {/* <FullImageSection2 /> */}
        <Entourage/>
       
        {/* <FullImageSection3 />
        <MalePrincipal />
        <Cutoffs />
        <FemalePrincipal />
        <FullImageSection4 />
        <EntourageList />
        <FullImageSection2 />
        <EntourageList1 /> */}
        {/* <RSVP /> */}
         <MessageToGuest />
        <GoogleMaps />
        <Footer />
      </>
    );
}

export default Home;