import React, { Component} from 'react';
import UserLogin from '../containers/userLogin'
import UserForm from '../components/newuser'


    const Home = () => {
      return(
          <div>
            <h3>Welcome to Timber</h3>
              <p> Here you can post whatever tag your post to help catergorize it and make it a platform of opinions</p>
              <UserForm />
          </div>
        )
    }

export default Home;
