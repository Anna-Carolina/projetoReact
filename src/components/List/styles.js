import styled from "styled-components";

export const StyledList = styled.div `

    background-color: white;
    max-width: 600px;
    padding: 30px; // espaço interno
    border-radius: 10px; // borda arredondada
    box-shadow: 5px 5px 10px #dddddd; //sombra
    margin: 40px auto; //centraliza a div
    box-sizing: border-box; //conta a largura + o padding

    //itens do formulario
    form{

        display: flex;
        justify-content: space-between;
        
        input{

            flex-grow: 1;
            height: 54px;
            border-radius: 5px;
            border: solid 1px #cccccc;
            box-sizing: border-box;
            padding: 10px;
        }

        button{
            background-color: #001D29;
            color: white;
            border: none;
            width: 105px;
            margin-left: 10px;
            border-radius: 5px; 
            cursor: pointer;
            //& = this
            &:hover{
                background-color: black;
            }

            &:disabled{
                background-color: grey;
                cursor: no-drop;
            }
        }

    }

`