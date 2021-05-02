import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createServer } from "miragejs";

import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

let server = createServer()
server.get("/api/books", {"books":[{"title":"The Geek Atlas","subtitle":"128 Places Where Science and Technology Come Alive","isbn13":"9780596523206","price":"$3.74","image":"https://itbook.store/img/books/9780596523206.png","url":"https://itbook.store/books/9780596523206"},{"title":"Optimizing and Accessing Information Technology","subtitle":"Improving Business Project Execution","isbn13":"9781118000014","price":"$49.36","image":"https://itbook.store/img/books/9781118000014.png","url":"https://itbook.store/books/9781118000014"},{"title":"Healthcare Information Technology Exam Guide, 2nd Edition","subtitle":"For CHTS and CAHIMS Certifications","isbn13":"9781259836978","price":"$30.97","image":"https://itbook.store/img/books/9781259836978.png","url":"https://itbook.store/books/9781259836978"},{"title":"Blockchain","subtitle":"A Practical Guide to Developing Business, Law, and Technology Solutions","isbn13":"9781260115871","price":"$14.99","image":"https://itbook.store/img/books/9781260115871.png","url":"https://itbook.store/books/9781260115871"},{"title":"Intel Trusted Execution Technology for Server Platforms","subtitle":"A Guide to More Secure Datacenters","isbn13":"9781430261483","price":"$37.49","image":"https://itbook.store/img/books/9781430261483.png","url":"https://itbook.store/books/9781430261483"},{"title":"Platform Embedded Security Technology Revealed","subtitle":"Safeguarding the Future of Computing with Intel Embedded Security and Management Engine","isbn13":"9781430265719","price":"$39.99","image":"https://itbook.store/img/books/9781430265719.png","url":"https://itbook.store/books/9781430265719"},{"title":"Agile Performance Improvement","subtitle":"The New Synergy of Agile and Human Performance Technology","isbn13":"9781484208939","price":"$39.99","image":"https://itbook.store/img/books/9781484208939.png","url":"https://itbook.store/books/9781484208939"},{"title":"Rolling Out 5G","subtitle":"Use Cases, Applications, and Technology Solutions","isbn13":"9781484215074","price":"$46.59","image":"https://itbook.store/img/books/9781484215074.png","url":"https://itbook.store/books/9781484215074"},{"title":"Practical Data Science","subtitle":"A Guide to Building the Technology Stack for Turning Data Lakes into Business Assets","isbn13":"9781484230534","price":"$28.98","image":"https://itbook.store/img/books/9781484230534.png","url":"https://itbook.store/books/9781484230534"},{"title":"Smarter Homes","subtitle":"How Technology Will Change Your Home Life","isbn13":"9781484233627","price":"$32.99","image":"https://itbook.store/img/books/9781484233627.png","url":"https://itbook.store/books/9781484233627"}]});


const Error = lazy(() => import('./components/Error.js'));
const Home = lazy(() =>  import('./pages/Home'));
const Cart = lazy(() =>  import('./pages/Cart'));
const PDP = lazy(() =>  import('./pages/PDP'));
const PLP = lazy(() =>  import('./pages/PLP'));


const App = () => (
    <Router>
      <div className="container">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/books/:category">
                <PLP />
              </Route>

              <Route path="/book/:id">
                <PDP />
              </Route>

              <Route>
                <Error />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>     
      </div> 
      <Footer />
    </Router>
  );

export default App;
