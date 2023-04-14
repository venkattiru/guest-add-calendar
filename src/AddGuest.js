import { useState } from "react";




const AddGuest = ({onSubmit}) => {
    const [guestName, setName] = useState('');
    const [strtDate, setStrtDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const addGuests = () => {
        setName('');
        setStrtDate('');
        setEndDate('');
        onSubmit(strtDate,endDate,guestName);

    }
    return(
        <div>
            <div>
            <label htmlFor="guest-name">Name</label>
            <input type='text' value={guestName}  id='guest-name' placeholder="Enter guest name" onChange={e => setName(e.target.value)} />
            </div>
            <div>
            <label htmlFor="start-date">Start date</label>
            <input type='date' value ={strtDate} id='start-date' placeholder="Enter start date" onChange={e => setStrtDate(e.target.value)} />
            </div>
            <div>
            <label htmlFor="end-date">End Date</label>           
            <input type='date' value ={endDate} id='end-date' placeholder="Enter end date" onChange={e => setEndDate(e.target.value)} />
            </div>
            <button onClick={addGuests}>Add Guest</button>
        </div>
    )
}

export default  AddGuest;