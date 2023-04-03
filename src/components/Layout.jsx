const Layout=(props)=>{
    const {children}=props;
return(
    <div 
    style={{height:"100vh",background:"black",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
     {children}
    </div>
)
}
export default Layout;