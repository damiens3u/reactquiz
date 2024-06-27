import React from 'react';
import reactImg from '../assets/quiz-logo.png'

export default function Header(){
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>Reactquiz</h1>
        </header>
    );
}