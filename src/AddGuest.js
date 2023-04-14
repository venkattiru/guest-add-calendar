import { useState } from "react";




const AddGuest = ({onSubmit}) => {
    const [guestName, setName] = useState('');
    const [strtDate, setStrtDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const addGuests = () => {
        if(guestName.length === 0 || strtDate === '' || endDate === '') {
            alert('enter all details');
        }
        setName('');
        setStrtDate('');
        setEndDate('');
        onSubmit(strtDate,endDate,guestName);

    }

    const handleStrtDate = (e) => {
        if(new Date(e.target.value).getTime() < new Date().getTime()) {
            alert('start date should not be past date' );
        }else {
            setStrtDate(e.target.value);
        }
        
    }
    const handleEndDate = (e) => {
        if(new Date(e.target.value).getTime() < new Date().getTime()) {
            alert('end date should not be past date' );
        }else if(new Date(strtDate).getTime() > new Date(e.target.value).getTime()) {
            alert('end date should be greater than start date');
        } else {
            setEndDate(e.target.value);
        }
        
    }

    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", padding: 10}}>
            <div>
            <label htmlFor="guest-name" style={{padding: 5}} >Name</label>
            <input type='text' value={guestName}  id='guest-name' placeholder="Enter guest name" onChange={e => setName(e.target.value)} />
            </div>
            <div>
            <label htmlFor="start-date" style={{padding: 5}} >Start date</label>
            <input type='date' value ={strtDate} id='start-date' placeholder="Enter start date" onChange={handleStrtDate} />
            </div>
            <div>
            <label htmlFor="end-date" style={{padding: 5}} >End Date</label>           
            <input type='date' value ={endDate} id='end-date' placeholder="Enter end date" onChange={handleEndDate} />
            </div>
            <button onClick={addGuests} className="btn-style">Add Guest</button>
        </div>
    )
}

export default  AddGuest;