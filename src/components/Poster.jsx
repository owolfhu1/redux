import React from 'react';

const style = {
    border : 'black solid 1px',
    borderRadius : '10px',
    padding : '20px',
    margin : '20px'
};

class Poster extends React.Component {
    render() {
        return (
            <div style={style}>
                <select>
                    <option value="HIGH">HIGH</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="LOW">LOW</option>
                </select> <input placeholder="description"/> <button>
                submit todo
            </button>
            </div>
        )
    }
}

export default Poster;