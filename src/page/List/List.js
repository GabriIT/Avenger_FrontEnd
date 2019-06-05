import React from 'react';

const charcterList = [
    "Hank Bauer",
    "Scott Lang",
    "Ant Man",
    "Captain Marvel",
    "Future Thanos",
    "Director Nick Fury",
    "Agent Maria Hill",
    "Steve Rogers",
    "Captain America",
    "Bruce Banner",
    "Hulk",
    "Natasha Romanoff ",
    "Black Widow",
    "Thor",
    "Tony Stark",
    "Iron Man",
    "Chitauri",
    "Thanos",
    "Phil Coulson",
    "Mark 6",
    "Loki",
    "Erik Selvig",
    "Clint Barton",
    "Hawkeye",
    "JARVIS",
]

const List = () => {
    return (
        <React.Fragment>
            <div style={{ display:'flex',flexWrap:'wrap', color:'#5F5F5F'}}>
                {charcterList.map(c => <div key={c} style={{flexBasis:'0',flexGrow:'1',minWidth:'300px',height:'100px', margin:'5px',padding:'10px',textAlign:'center',verticalAlign:'middle', backgroundColor:'#E5EDF5',border:'1px solid #C9C1D5' }}>
                    <b>{c}</b>
                </div>)}
            </div>
        </React.Fragment>
    )
}
export default List;