import React from 'react'

export default function About(props) {

  // const [{  
  // color: (props.mode === 'light' ? 'black' : 'white'),
  // backgroundColor: (props.mode === 'black' ? 'white' : 'black'),
  // border: '0.5px solid white'}, set{  
  // color: (props.mode === 'light' ? 'black' : 'white'),
  // backgroundColor: (props.mode === 'black' ? 'white' : 'black'),
  // border: '0.5px solid white'}] = useState({  
  // color: (props.mode === 'light' ? 'black' : 'white'),
  // backgroundColor: (props.mode === 'black' ? 'white' : 'black'),
  // border: '0.5px solid white'});





  let toggleStyle=({
    color: (props.mode === 'dark' ?  'white':'black'),
    backgroundColor: (props.mode === 'light' ? '#dcdcdc' : '#2F4F4F'),
    border: '0.5px solid white'
  })


  return (
    <div className="container my-3" style={toggleStyle} >
      <h1> About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={toggleStyle}>
          <h2 className="accordion-header" style={toggleStyle} id="headingOne">
            <button className="accordion-button" style={toggleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne"  className="accordion-collapse collapse show" style={toggleStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={toggleStyle} >
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={toggleStyle}>
          <h2 className="accordion-header" id="headingTwo" style={toggleStyle}>
            <button className="accordion-button collapsed" style={toggleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" style={toggleStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={toggleStyle} >
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={toggleStyle} >
          <h2 className="accordion-header" id="headingThree" style={toggleStyle}>
            <button className="accordion-button collapsed" style={toggleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={toggleStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={toggleStyle} >
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

