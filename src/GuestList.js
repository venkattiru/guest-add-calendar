
const GuestList =  ({list}) => {
return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        {list.length > 0 && 
        <table>
            <thead>
                <th>Date</th>
                <th>Guests</th>
            </thead>
            <tbody>
                {list.map(data=> {
                    return(
                <tr>
                    <td>{data.date}</td>
                    <td>{data.name}</td>
                </tr>
                    )
                })}
                
            </tbody>
        </table>}
    </div>
)
}

export default GuestList;