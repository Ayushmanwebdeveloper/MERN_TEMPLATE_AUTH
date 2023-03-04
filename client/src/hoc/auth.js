import React, { useEffect } from 'react';
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {

                // if the user is not logged in
                if(!response.payload.isAuth){
                    // and try to access a page with option==true (logged-in-users only)
                    if(option){
                        props.history.push('/login')
                    }
                }
                // if the user is logged in 
                else {
                    // but is not an admin
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    }
                    // or try to access a page with option==false
                    else {
                        if(option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
            Axios.get('/api/users/auth')
        }, [])
        return(
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}