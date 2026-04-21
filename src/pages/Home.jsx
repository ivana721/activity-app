import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { getToken, getData } from "../services/api";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const data = await getData(token);

        console.log("API DATA:", data); // keep for debugging

        dispatch({
          type: "SET_DATA",
          payload: data.data   // IMPORTANT FIX
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>

      {state.activities?.map((item) => (
        <div data-testid="activity-item" key={item.id}>
          {item.title || item.name || item.activity}
        </div>
      ))}
    </div>
  );
};

export default Home;