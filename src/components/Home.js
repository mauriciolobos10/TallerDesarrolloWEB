import { Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import axios from "axios";

import React, { Component, useEffect, useState }  from 'react';
import Poke from "./Poke";

const Home = () => {
    useEffect(() => {
        cargarPokemones();
    }, []);

    
    const [listado, setListado] = useState([]);
    const [finder, setFinder] = useState("");
    const [errors, setErrors] = useState(false);
    const [listadoAux, setListadoAux] = useState([]);
    const [count, setCount] = useState(1)


    function sumar(){
        let resultado = count +1;
        setCount(resultado)
    }

    const cargarPokemones = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(
            (response) => {
                console.log(response.data.results);
                setListado(response.data.results);
            },
            (error) => {
                console.log(error);
            }
        );
    };
    const handleInputChange = (event)=> {
        setFinder(event.target.value);
    }
    useEffect(() => {
        if (finder.trim() !== ""){
            let result = listado.filter((item) => 
            item.name.toString().includes(finder.toString().trim())
            );
            setListadoAux(result);
        }
        console.log(finder);
    }, [finder]);
    let estilo = {backgroundColor: 'red'}
    


    return (
        
        <Card>
            <CardContent>
                <TextField
                    error= {errors}
                    helperText={errors ? "hay error" : null}
                    fullWidth
                    label= "Pokemon"
                    name="pokemon"
                    type="text"
                    variant= "outlined"
                    value={finder}
                    onChange={handleInputChange}
                    >
                        
                </TextField>
                <Grid container spacing={1}>
                    <Grid item md={6}>
                        {listado.map((element, index) => (
                            <Poke dato= {element.name} key={index}></Poke>
                        ))}
                    </Grid>

                    <Grid item md={6}>
                        
                        {finder && 
                        listadoAux.map((element, index) => (
                            <Poke dato= {element.name} key={index} estilo={estilo}></Poke>
                        ))}
                    </Grid>

                </Grid>
                
                {/* {listado.map((element, index) => (
                    <Poke dato= {element.name}/>
                    //</Card><Typography > {element.name}</Typography>
                    
                ))} */}
                
            </CardContent>        
        </Card>
    );
}

export default Home;