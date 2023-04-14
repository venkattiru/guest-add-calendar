import AddGuest from './AddGuest';
import GuestList from './GuestList';
import generateInBtwDates from './utils/DateUtils';
import './App.css';
import { useState } from 'react';


function App() {
  const [guestlist,setList] = useState([])

  const addEntry = (start, end, name) => {
    const selectedDates = generateInBtwDates(start, end);
    const allocatedDates = guestlist.map(data => data.date);
    if(guestlist.length>0) {
      const list = [...guestlist];
      const commonList = list.map(obj => {
        if(selectedDates.indexOf(obj.date)> -1) {
          return (
            {
              date: obj.date,
              name: `${obj.name},${name}`
            }
          )
        } else {
          return obj;
        }
      });
      
      const unqDates = selectedDates.filter(date => allocatedDates.indexOf(date) === -1 );
      const unqList = unqDates.map(dates => {
        return(
          {
            date: dates,
            name
          }
        )
      });

      const modifiedList = [...commonList, ...unqList];
      const sortList = modifiedList.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setList(sortList);
      
    } else {
      const entryList = selectedDates.map(date => {
        return (
            {
                date,
                name
            }
        )
    });
      setList(entryList);
    }
    
  }

  return (
    <div className="App">
      <AddGuest onSubmit ={addEntry}/>
      <GuestList list={guestlist}/>
    </div>
  );
}

export default App;
