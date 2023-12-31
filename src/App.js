import { Button } from "react-bootstrap";
import "./App.css";
import DataInCard from "./components/DataInCard";
import { useEffect, useState } from "react";
import DataInTable from "./components/DataInTable";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { listings } from "./MockData/MockData";

const mock = new MockAdapter(axios);

mock.onGet("/api/listings").reply(200, { listings });

function App() {
  const [handleDisplay, setHandleDisplay] = useState(undefined);
  const [data, setData] = useState([]);
  const handleShowDisplay = (data) => {
    setHandleDisplay(data);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get("/api/listings")
          .then((result) => {
            setData(result.data.listings);
          })
          .catch((error) => console.log(error));
      } catch {
        console.log("Error in Try");
      }
    };

    getData();
  }, []);

  return (
    <div className="container">
      {handleDisplay === undefined && (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleShowDisplay("card")}
            >
              Data In Card
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleShowDisplay("table")}
            >
              Data In Table
            </Button>
          </div>
        </div>
      )}

      {handleDisplay !== undefined &&
        (handleDisplay === "card" ? (
          <DataInCard setHandleDisplay={setHandleDisplay} data={data} />
        ) : (
          <DataInTable setHandleDisplay={setHandleDisplay} data={data} />
        ))}
    </div>
  );
}

export default App;
