import React from 'react';

import Navbar from '../../components/Navbar'
import Showcase from '../../components/Showcase'
import Categories from '../../components/Categories'
import Register from '../../components/Register'
import Footer from '../../components/Footer'

export default function Home() {
      return(
           <div>
                 <Navbar />
                 <Showcase />
                 <Categories />
                 <Register />
                 <Footer />
           </div>
      );
}
