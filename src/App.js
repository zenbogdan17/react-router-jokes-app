import { Redirect, Route, Switch } from 'react-router-dom';
import Jokes from './pages_jokes/Jokes';
import JokesDetails from './pages_jokes/JokesDetails';
import AddJoke from './pages_jokes/AddJoke';
import Layout from './components/layout/Layout';
import NotFound from './pages_jokes/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/jokes" />
        </Route>
        <Route path="/jokes" exact>
          <Jokes />
        </Route>
        <Route path="/jokes/:jokeId">
          <JokesDetails />
        </Route>
        <Route path="/add-joke">
          <AddJoke />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

// pages holder

// import { Redirect, Route, Switch } from 'react-router-dom';
// import ContactUs from './components/ContactUs';
// import Header from './components/Header';
// import About from './pages/About';
// import Home from './pages/Home';
// import Articles from './pages/Articles';
// import ArticlesDetails from './pages/ArticlesDetails';

// function App() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Switch>
//           <Route path="/" exact>
//             <Redirect to="/home" />
//           </Route>
//           <Route path="/home">
//             <Home />
//           </Route>
//           <Route path="/articles" exact>
//             <Articles />
//           </Route>
//           <Route path="/articles/:articleId" exact>
//             <ArticlesDetails />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact-us">
//             <ContactUs />
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// }

// export default App;
