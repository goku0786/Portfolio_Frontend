import { NavLink } from "react-router-dom"

export const Error = ()=>{

    return (
        <>
        <div className="errorPage">
            <h2>404</h2>
            <h4>Sorry Page Not Found</h4>
            <div className="btns">
                <NavLink to="/" className="rtnHome" >Return Home</NavLink>
                <NavLink to="/contact" className="rtnHome">Report Problem</NavLink>
            </div>
        </div>
        </>
    )
}