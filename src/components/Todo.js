export default function Todo({item}) {
    const checkboxStyle={
        transform:"scale(1.5)"
    }
    return (
        <div className={"row"}>
            <div className="col-md-1">
                <input onChange={()=>true} style={checkboxStyle} id={"checkbox/"+item.id} type="checkbox" checked={item.completed} />
            </div>
            <div className="col-md-5">
               <h3><label htmlFor={"checkbox/"+item.id}>{item.title}</label></h3>
            </div>
        </div>
    )
}