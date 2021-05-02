import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
    color: #fff;
    width: 100%;
    min-height: 300px;
    background-color: #404040;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

        h3{
            font-family: Roboto, sans-serif;
            font-size: 28px;
            font-weight: 400;
        }
`;

const Text = styled.div`
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    justify-content: justify;
    margin: 10px auto;
    width: 60%;
    
`;

const Stripe = styled.div`
    width: 100%;
    background-color: #6e6e6e;
    height: 2em;
`;

const About = () => {
    return (
        <footer>
            <Stripe></Stripe>
            <AboutWrapper>

                <h3>About</h3>
                <Text>
                    La intencion de esta plataforma es proveer una base de datos que registre cualquier caso de abuso/grooming/estupro.
                    Queremos que esta plataforma sea un recurso con el que la gente pueda contar cuando se trate de buscar el background de alguna persona.
            </Text>
                <Text>Para añadir una denuncia, hacerlo via twitter a: <a href="https://twitter.com/reportarabuso" target="_blank">@reportarabuso</a>. Pronto añadiremos una sección para hacerlo por este medio</Text>
                <Text>
                    #ReportesAbuso
            </Text>

            </AboutWrapper>
        </footer>
    );
}

export default About;
