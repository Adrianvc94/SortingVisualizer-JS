import Styles from "./Header.module.css";

const Header = (props) => {
    
  const start = () => {
    if(!props.start){
      props.setStart(true);
    }
  };

  const onSetAlgoritm = (e) => {
    props.setAlgoritm(e.target.getAttribute('value'))
  }

  const onNewArray = () => {
    props.fillArray()
  }

  const onSetLength= (e) => {
    props.setArrayLength(e.target.value)
  }

  return (
    <header className={Styles.header_container}>
      <h1>Sorting Visualizer</h1>

      <div className={Styles.nav_container}>

      <input onChange={onSetLength} type="range" min="20" max="200" defaultValue={props.arrayLength} id="changeSize" disabled={props.start}  style={{backgroundColor: "white", cursor: "pointer"}}/>

        <ul>
          <li onClick={onSetAlgoritm} value={"Bubble"} >Bubble</li>
          <li onClick={onSetAlgoritm} value={"Selection"}>Selection</li>
          <li onClick={onSetAlgoritm} value={"Insertion"}>Insertion</li>
        </ul>

        <button onClick={start} disabled={props.start}>Sort</button>
        <button onClick={onNewArray} disabled={props.start}>New Array</button>
      </div>
    </header>
  );
};

export default Header;
