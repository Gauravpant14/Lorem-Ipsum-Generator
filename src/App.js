import React, { useState, useRef, useEffect } from "react";
import data from "./data";
import ReactTooltip from 'react-tooltip'
import swal from 'sweetalert';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState();
  // const ref = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(count)
    setText(data.slice(0, amount))
  };



  const copyMe = () => {

    const allPara = document.querySelector('#lorem-text')
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(allPara);

    selection.removeAllRanges();
    selection.addRange(range);
    // // copyText.forEach((e) => e.focus())
    document.execCommand("copy");
    // alert("copied")
    // console.log(ref);
    // ReactTooltip.show(ref.current)
    swal("Successfully", "Copied!", "success");

  }



  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum ?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text" id="lorem-text">
        {text?.map((item, index) => {
          return <><p key={index} className="dummyText">{item}</p>

          </>
        })}

      </article>
      {/* <p ref={ref} data-tip='Copied !' data-event='click' data-event-off='dblclick'></p> */}
      <ReactTooltip />
      {text?.length > 0 && <button className="btn" onClick={() => copyMe()}> Click Here To Copy</button>}

    </section>
  );
}

export default App;
