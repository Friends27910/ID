import "../Css/Id.css"
import image from "./Image/student.jpeg"
function ID2(){
  return(
   <body>
    <div className="container">
        <div className="card">
            <div className="title">
                <h1>Prasanna Matric Hr Sec School</h1>
               </div>
            <div className="image">
               <div className="outer">
                   <div className="inner">
                       <img src={image} alt=""/>
                   </div>
               </div>
            </div>
            <div className="name">
              <h2>Muthumariappan</h2>  
            </div>
            <div className="details">
                <div className="col">
                    <ul type="none">
                        <li>Class : 11th</li>
                        <li>Department : Royal commerce</li>
                        <li>Phone : 6374587253</li>
                        <li> Admission no : HS0567 </li>
                        <li> D.O.B : 07.11.2008 </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
    
    
    )
}
export default ID2