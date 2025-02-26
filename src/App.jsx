import "./App.css";
import MainPage from "./Components/Page/MainPage";
import { CreateDramaProvider } from "./Components/Utils/Reducers/CreateDrama_Reducer";
import { CreateNewsProvider } from "./Components/Utils/Reducers/CreateNews_Reducer";
import { CreateShowProvider } from "./Components/Utils/Reducers/CreateShow_Reducer";
import { ShowProvider } from "./Components/Utils/Reducers/Ticket_Reducer";

function App() {
  return (
    <>
      <ShowProvider>
        <CreateShowProvider>
          <CreateDramaProvider>
            <CreateNewsProvider>
              <MainPage />
            </CreateNewsProvider>
          </CreateDramaProvider>
        </CreateShowProvider>
      </ShowProvider>
    </>
  );
}

export default App;
