import { MilkdownEditor } from "./Editor"

export const Wrapper = ()=>{
   return (
      <div className="wrapper">
         <div className="header">
            <h4>Editor</h4>
         </div>
         <div className="editor-wrapper">
             <MilkdownEditor/>>
         </div>
      </div>
   )
}