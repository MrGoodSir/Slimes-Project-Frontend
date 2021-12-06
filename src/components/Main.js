import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SlimesIndex from "../pages/SlimesIndex";
import FoodsIndex from "../pages/FoodsIndex";
import ToysIndex from "../pages/ToysIndex";
import SlimesShow from "../pages/SlimesShow";
import FoodsShow from "../pages/FoodsShow";
import ToysShow from "../pages/ToysShow";
import SlimesCreate from "../pages/SlimesCreate";
import FoodsCreate from "../pages/FoodsCreate";
import ToysCreate from "../pages/ToysCreate";
import { Link } from "react-router-dom";

function Main(props) {
  const [slimes, setSlimes] = useState(null);
  const [foods, setFoods] = useState(null);
  const [toys, setToys] = useState(null);

  const URL = "http://localhost:3001/slimes";
  const URL2 = "http://localhost:3001/foods";
  const URL3 = "http://localhost:3001/toys";

  //////////////////////////////////////////////////////////////////////////////////////////////////////////// Get \/

  const getSlimes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setSlimes(data);
  };

  const getFoods = async () => {
    const response = await fetch(URL2);
    const data = await response.json();
    setFoods(data);
  };

  const getToys = async () => {
    const response = await fetch(URL3);
    const data = await response.json();
    setSlimes(data);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////// Create \/

  const createSlimes = async (slime) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(slime),
    });
    getSlimes();
  };

  const createFoods = async (food) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(food),
    });
    getFoods();
  };

  const createToys = async (toy) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(toy),
    });
    getToys();
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////// Update \/

  const updateSlimes = async (slime, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(slime),
    });
    getSlimes();
  };

  const updateFoods = async (food, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(food),
    });
    getFoods();
  };

  const updateToys = async (toy, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(toy),
    });
    getToys();
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////// Delete \/

  const deleteSlimes = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getSlimes();
  };

  const deleteFoods = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getFoods();
  };

  const deleteToys = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getToys();
  };

  useEffect(() => getSlimes(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/slimes">
          <Link to={`/slimes/create`}>Create A Slime</Link>
          <SlimesIndex />
        </Route>
        <Route exact path="/slimes/create">
          <SlimesCreate slimes={slimes} createSlimes={createSlimes} />
        </Route>
        <Route exact path="/foods">
          <Link to={`/foods/create`}>Create A Food</Link>
          <FoodsIndex />
        </Route>
        <Route exact path="/foods/create">
          <FoodsCreate foods={foods} createFoods={createFoods} />
        </Route>
        <Route exact path="/toys">
          <Link to={`/toys/create`}>Create A Toy</Link>
          <ToysIndex />
        </Route>
        <Route exact path="/toys/create">
          <ToysCreate toys={toys} createToys={createToys} />
        </Route>
        <Route exact path="/">
          <h1>
            <Link to={`/slimes`}>Slime</Link>
          </h1>
          <h1>
            <Link to={`/foods`}>Foods</Link>
          </h1>
          <h1>
            <Link to={`/toys`}>Toys</Link>
          </h1>
        </Route>
        <Route
          path="/slimes/:id"
          render={(rp) => (
            <SlimesShow
              slimes={slimes}
              updateSlimes={updateSlimes}
              deleteSlimes={deleteSlimes}
              {...rp}
            />
          )}
        />
        <Route
          path="/foods/:id"
          render={(rp) => (
            <FoodsShow
              foods={foods}
              updateFoods={updateFoods}
              deleteFoods={deleteFoods}
              {...rp}
            />
          )}
        />
        <Route
          path="/toys/:id"
          render={(rp) => (
            <ToysShow
              toys={toys}
              updateToys={updateToys}
              deleteToys={deleteToys}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;
