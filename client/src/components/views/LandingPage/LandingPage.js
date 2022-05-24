import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';

function LandingPage(props) {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response))
    }, [])

    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
            .then(response => {
                if (response.data.success) {
                    navigate('/login')
                } else {
                    alert('로그아웃 하는데 실패했습니다.')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            시작 페이지

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default Auth(LandingPage, false)