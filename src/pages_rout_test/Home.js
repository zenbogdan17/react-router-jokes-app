import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <Route path="/home/new-user/">
        <h2>Hello!!!</h2>
      </Route>
    </section>
  );
};

export default Home;
