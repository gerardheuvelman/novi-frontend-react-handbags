import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import Tile from "./components/Tile";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button text="to the collection"/>
            <Button text="shop all bags"/>
            <Button text="pe-orders" disabled={true}/>
        </nav>
        <main>
            <Product
                label="Best seller"
                source={bag1}
                alt="bag 1"
                description="The handy bag"
                price="€400,-"
            />
            <Product
                label="Best seller"
                source={bag2}
                alt="bag 2"
                description="The stylish bag"
                price="€250,-"
            />
            <Product
                label="New collection"
                source={bag3}
                alt="bag 1"
                description="The simple bag"
                price="€300,-"
            />
            <Product
                label="New collection"
                source={bag4}
                alt="bag 1"
                description="The trendy bag"
                price="€150,-"
            />
        </main>
        <footer>
            <Tile>
                <h2>THE BRAND</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, maxime, quibusdam. Dolorem, excepturi hic numquam porro quae voluptate. Maxime, repudiandae." para2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eos eum excepturi exercitationem minus nemo nihil quis sequi voluptate.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, maxime, quibusdam. Dolorem, excepturi hic numquam porro quae voluptate. Maxime, repudiandae." para2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eos eum excepturi exercitationem minus nemo nihil quis sequi voluptate.
                </p>
            </Tile>
            <Tile
                image={brand}
            />
            <Tile
                image={ourStory}
            />
            <Tile>
                <h2>OUR STORY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, maxime, quibusdam. Dolorem, excepturi hic numquam porro quae voluptate. Maxime, repudiandae." para2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eos eum excepturi exercitationem minus nemo nihil quis sequi voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, maxime, quibusdam. Dolorem, excepturi hic numquam porro quae voluptate. Maxime, repudiandae." para2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eos eum excepturi exercitationem minus nemo nihil quis sequi voluptate.
                </p>
            </Tile>
        </footer>
      </>
  );
}

export default App;