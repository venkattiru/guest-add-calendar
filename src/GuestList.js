
const GuestList =  ({list}) => {
return (
    <div>
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
        </table>
    </div>
)
}

export default GuestList;