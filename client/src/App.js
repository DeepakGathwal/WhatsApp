import Messangers from "./components/Messangers";
import {GoogleOAuthProvider} from '@react-oauth/google'
import  AccountProvide  from "./context/AccountProvide";

function App() {
const clientId = "1021765109404-jk482fa4sld64n34uktdai3rgra9g0el.apps.googleusercontent.com";
  return (
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvide>
     <Messangers/>
        </AccountProvide>
      </GoogleOAuthProvider>
  );
}

export default App;
