import { parseCommandLine } from "typescript"

export const SearchPanel=()=>{
    const [param,setParam]=useState({
        name:"",
        personId:""
    })
    const [users,setUser]=useState([])
    const [list,setList]=useState([])
    useEffect(()=>{
        fetch('').then(async response =>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[param])
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={evt=>setParam({
                ...param,
                name:evt.target.value
            })}/>

        </div>
        <select name="" value={param.personId} onChange={evt=>setParam({
            ...param,
            personId:evt.target.value
        })}>
            <option value={''}>负责人</option>

        </select>
    </form>
}