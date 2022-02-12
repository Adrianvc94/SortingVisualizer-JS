import Styles from "./Header.module.css";

const Header = (props) => {
  const start = () => {
    if (!props.start) {
      props.setStart(true);
    }
  };

  const onSetAlgoritm = (e) => {
    let algoritm = e.target.getAttribute("value");
    const element = document.getElementById(`${algoritm}`);

    document.getElementById("Bubble").classList.remove(`${Styles.currentAlgo}`);
    document.getElementById("Selection").classList.remove(`${Styles.currentAlgo}`);
    document.getElementById("Insertion").classList.remove(`${Styles.currentAlgo}`);

    element.classList.add(`${Styles.currentAlgo}`);

    props.setAlgoritm(algoritm);
  };

  const onNewArray = () => {
    props.fillArray();
  };

  const onSetLength = (e) => {
    props.setArrayLength(e.target.value);
  };

  const onToggle = () => {
    document
      .getElementById("hambuerger")
      .classList.toggle(`${Styles.is_active}`);
    document
      .getElementById("mobile_nav")
      .classList.toggle(`${Styles.is_active}`);
  };

  return (
    <>
      <nav className={Styles.main_container}>
        <h1>Sorting Visualizer</h1>

        <div className={Styles.menu}>
          <div className={Styles.inputrange_container}>
            <span>Size & Speed</span>
            <input
              onChange={onSetLength}
              type="range"
              min="20"
              max="200"
              defaultValue={props.arrayLength}
              id="changeSize"
              disabled={props.start}
            />
          </div>

          <ul style={{ display: "flex" }}>
            <li onClick={onSetAlgoritm} id="Bubble" value={"Bubble"}>
              Bubble
            </li>
            <li onClick={onSetAlgoritm} id="Selection" value={"Selection"}>
              Selection
            </li>
            <li onClick={onSetAlgoritm} id="Insertion" value={"Insertion"}>
              Insertion
            </li>
          </ul>

          <button onClick={start} disabled={props.start}>
            Sort
          </button>
          <button onClick={onNewArray} disabled={props.start}>
            New Array
          </button>
        </div>

        <button
          onClick={onToggle}
          id="hambuerger"
          className={`${Styles.hambuerger}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <nav id="mobile_nav" className={`${Styles.mobile_nav}`}>
        <input
          onChange={onSetLength}
          type="range"
          min="20"
          max="200"
          defaultValue={props.arrayLength}
          id="changeSize"
          disabled={props.start}
        />

        <ul>
          <li onClick={onSetAlgoritm} value={"Bubble"}>
            Bubble
          </li>
          <li onClick={onSetAlgoritm} value={"Selection"}>
            Selection
          </li>
          <li onClick={onSetAlgoritm} value={"Insertion"}>
            Insertion
          </li>
        </ul>

        <button onClick={start} disabled={props.start}>
          Sort
        </button>
        <button onClick={onNewArray} disabled={props.start}>
          New Array
        </button>
      </nav>
    </>
  );
};

export default Header;
