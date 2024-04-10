import styled from "styled-components"

export const StyledTask = styled.div `

    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    color: #666;

    button{
        background: transparent;
        border: none;
        color: #ff5555;
        font-size: 30px;
        cursor: pointer;

        &:hover{
            color: #ff0000; 
        }
    }

`