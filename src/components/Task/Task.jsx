import types from 'prop-types';
import { StyledTask } from './styles';

export function Task(props){

    //props -> objeto que contem tudo que foi passado na chamada do componente
    //style = {{}}
   console.log(props)
    return(
        <StyledTask>
           <p >{props.title}</p>
           <button onClick={()=>props.onRemove(props.id)}>X</button>
        </StyledTask>
    )
}

/*
export function Task({titulo}){
    return(
        <div>
           <p>{titulo}</p>
        </div>
    )
} DESESTRUTURANDO
*/

Task.propTypes = {

    title : types.string.isRequired,
    id : types.number.isRequired,
    onRemove: types.func.isRequired
}

Task.defaultProps = {

    title : 'Sem titulo'
}