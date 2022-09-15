//here we'll connect User Component with Redux using connect, mapStateToProps and mapDispatchToProps
import User from "../Component/UserComponent";
import { connect } from "react-redux";//this will help us connect react component with redux

import { addUserToStoreAction, signInSignUpUser } from "../../../State/User/UserAction";

//to subscribe with state we need mapStatToProps

let mapStateToProps = (state)=> { //connect allows us to access store as state => user, product etc
    return{
        user : state.userReducer.user //this allows us to access userReducer as props in UserComponent
    }
}


//to become publisher we need mapDispatchToProps
let mapDispatchToProps = ( dispatch )=>{
    return {
        addUserToStoreFunc : (user)=>{ dispatch(addUserToStoreAction(user))},
        signInUserDB : (user)=>{dispatch(signInSignUpUser(user))}
    }
}


//export default connect(mapStateToProps, null)(User);//null - as mapDispatchToProps is not defined yet
export default connect(mapStateToProps, mapDispatchToProps)(User);//null - as mapDispatchToProps is not defined yet