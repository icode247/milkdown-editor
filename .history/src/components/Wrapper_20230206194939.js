import { MilkdownEditor } from "./Editor"
// import '../App.css';

export const Wrapper = ()=>{
   return (
      <div className="wrappe">
         <div className="heade">
            <h4>Editor</h4>
         </div>
         <div className="editor-wrapper">
             <MilkdownEditor/>
         </div>
      </div>
   )
}