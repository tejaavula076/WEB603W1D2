//functional example and adding Events

function clickButton(){
  alert("Clicked 123456!!!!!!!!!");

}
const myelement = (
  <button onClick = {clickButton}>Click the button </button>
)
  
  ReactDOM.render(myelement, document.getElementById('root'));