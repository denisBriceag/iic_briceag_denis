import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import './Greetings.css';
import Nav from './Nav';


const style = { "color": "red", "font-size": 20, "background-color": "green" };

const Greetings = () => {
    return (
        <div>
            <Nav />
            <ButtonGroup orientation="vertical" className='position'>
                <Button variant="contained" color="secondary" size="large" onClick={() => { alert('Hello!') }}>
                    Hello!
                </Button>
                <Button className="red" onClick={() => { alert('Salut!') }}>Salut</Button>
                <Button style={style} onClick={() => { alert('Bonjour!') }}>Bonjour</Button>
                <Button onClick={() => { alert('Привет!') }}>Привет</Button>
                <Button onClick={() => { alert('aaaaa!') }}>ааааа</Button>
            </ButtonGroup>
            <Checkbox defaultChecked />
            <Checkbox />
            <Checkbox />
        </div>
    )
}

export default Greetings;

