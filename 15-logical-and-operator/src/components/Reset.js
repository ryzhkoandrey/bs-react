const buttonStyle = { backgroundColor: 'lightgreen' };

function Reset({ onClick }) {
   return (
      <div>
         <button style={buttonStyle} onClick={onClick}>
            Reset
         </button>
      </div>
   );
}

export default Reset;
