import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default (SpecificComponent, option, adminRoute = null) => {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)
                if (!response.payload.isAuth) {
                    if (option) {
                        navigate('/login')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        navigate('/')
                    } else {
                        navigate('/')
                    }
                }
            })
        })
        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}