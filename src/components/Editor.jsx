import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import Row from "./Row"
import { useRef } from 'react';
const Editor = ({width,height,selected})=>{
    const drawingRef = useRef();
    let rows = [];
    for(let i=0;i<height;i++){
        rows.push(<Row width={width} selected={selected } />);
    }
    return(
        <>
        <div ref={drawingRef}>
            {
                rows.map((elem,idx)=> elem)
            }
        </div>
        <button onClick={()=>exportComponentAsPNG(drawingRef)}>Export as png</button>
        </>
    )
}
export default Editor;