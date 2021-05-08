import React from 'react';

import Navbar from '../../components/Navbar/withoutRegisterNav'
import Category from '../../components/Category'
import Footer from '../../components/Footer'

export default function CategoryPage() {
      return(
           <div>
                 <Navbar />
                 <Category />
                 <Footer />
           </div>
      );
}
