import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./sections/Home/Home";
import Players from "./sections/Players/Players";
import { useDispatch, useSelector } from "react-redux";
import {fetchPlayers} from "./app/Players/player.actions.js";
import {fetchGalleryImages} from "./app/Gallery/gallery.actions.js"
import { fetchTv } from "./app/Tv/tv.actions.js";
import PaltanWorld from "./sections/PaltanWorld/PaltanWorld.jsx";
import PuneriTv from "./sections/PaltanWorld/PuneriTv/PuneriTv.jsx";
import PuneriGallery from "./sections/PaltanWorld/PuneriGallery/PuneriGallery.jsx";
import SingleGallery from "./sections/PaltanWorld/PuneriGallery/SingleGallery/SingleGallery.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SinglePlayer from "./sections/Players/SinglePlayer/SinglePlayer.jsx";
import ErrorBox from "./components/ErrorBox/ErrorBox.jsx";
import Spinner from "./components/Spinner/Spinner.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

function App() {

  const {error, isLoading} = useSelector((state) => state.players);

  const dispatch = useDispatch();  

  useEffect(() => {
    AOS.init({
      offset: 0,
      delay: 0,
      once: false,
      mirror: false,
      anchorPlacement: "bottom-bottom",
    });
    window.addEventListener("load", AOS.refresh);
    window.addEventListener("resize", AOS.refresh);

    // fetching players data

    dispatch(fetchPlayers());

    // fetch Gallery Data

    dispatch(fetchGalleryImages());

    // fetch tv data

    dispatch(fetchTv());

    return () => {
      window.removeEventListener("load", AOS.refresh);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  if (isLoading) return <Spinner/>

  return (
    <div style={{ overflowX: "hidden" }}>
        <BrowserRouter>
        {
          error && (
            <ErrorBox/>
          )
        }
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/players" element={<Players/>} />
              <Route path="/player/:slug" element={<SinglePlayer/>} />
              <Route path="/puneri-world" element={<PaltanWorld/>} />
              <Route path="/puneri-tv" element={<PuneriTv/>} />
              <Route path="/puneri-gallery" element={<PuneriGallery/>} />
              <Route path="/puneri-gallery/:galleryId" element={<SingleGallery/>} />  
              <Route path="/*" element={<PageNotFound/>} />            
            </Route>            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
