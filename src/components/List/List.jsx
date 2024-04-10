import { useEffect, useState } from "react";
import { Task } from "../Task/Task";
import { StyledList } from "./styles";
import { MagicMotion } from "react-magic-motion";

export function List(){

   /*  const taskList = [
        { id: 1, title: "Pagar Contas"},
        { id: 2, title: "Renovar CNH"},
        { id: 3, title: "Fazer Compras"}
    ] */

    //nome do estado  e função atualizadora do estado
    const [taskList, setTaskList] = 
    useState(//Se o localstore for != null transformar em jason novamente, caso for null deixar vazio
        localStorage.getItem('taskList')? JSON.parse(localStorage.getItem('taskList')) : []
    );

    const [newTask, setNewTask] = useState("");
 

    function addTask(e){
        console.log("Tarefa adicionada");
        e.preventDefault();//prevenir a ação padrão do formulário
        //o push só utiliza para atualização interna, no layout não modifica nada
        //spread(espalhar)
        setTaskList([{id: new Date().getTime(), title:newTask}, ...taskList]);
        setNewTask("");
    }

    function removeTask(id){
        console.log(`tarefa removida id: ${id}`);
        setTaskList(
            taskList.filter(task => (task.id !== id))
        );
    }

    //só será executado depois que o DOM for carregado
    //usado para atualizar o array de dados guardados/excluidos para não ficar um passo atrás após a ação desejada
    useEffect(()=>{
        localStorage.setItem('taskList',JSON.stringify(taskList));
    }, [taskList]
    )//o [] é o estado(funcao) que chama o useEffect se não colocar, qualquer mudança chama o useEffect

    return(
        <MagicMotion transition={{type:'spring'}}>
           <StyledList>
                <form onSubmit={addTask}>
                    <input 
                        type="text" 
                        placeholder="Digite sua tarefa" 
                        value={newTask} 
                        onChange={(e)=>setNewTask(e.target.value)}>                
                    </input>
                    <button 
                        type="submit" 
                        onClick={addTask}
                        disabled={newTask === ""}    
                    >Criar</button>
                    {/* /*coloca sem o () para rodar a função somente quando clicar no botão */ }
                </form>
                {
                    taskList.map((task) => (
                        <Task title={task.title} id={task.id} key={task.id} onRemove={removeTask}/>
                    ))
                }
                {/* /*numerico é entre {} */ }
            </StyledList> 
        </MagicMotion>
        
    )
}