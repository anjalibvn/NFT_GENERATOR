import Pixel from "./Pixel";
const Row=({width,selected})=>{
    let pixels=[];
    for(let i=0;i<width;i++){
        pixels.push(<Pixel selected={selected} />);
    }
    return(
        <div style={{display:"flex"}}>
            {pixels.map((elem)=>(
                elem
            ))
            }
        </div>
    )
}
export default Row;