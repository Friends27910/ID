import "../Css/Id.css"
import image from "./Image/student.jpeg"
 function ID(){
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
              <h1>Aveon</h1>  
            </div>
            <div className="details">
                <div className="col">
                    <ul type="none">
                        <li>Class : 11th</li>
                        <li>Department : Computer science</li>
                        <li>Phone : 9043374217 </li>
                        <li> Admission no : HS5036 </li>
                        <li> D.O.B : 27.04.2008 </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
</body>
     
     )
 }
 export default ID