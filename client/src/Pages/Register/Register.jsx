import { Button } from '@material-ui/core'
import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import {Container,Image,Logo,Happen,Happen1} from "./Register.styled"
import {AiOutlineGoogle} from "react-icons/ai"
import { makeStyles } from '@material-ui/styles';

const useStyles =makeStyles({
    btn:{
        border: "2px solid black",
        textTransform:"capitalize",
        fontSize:"18px",
        borderRadius:"10px",
        padding:"5px 10px",
        width:"50%",
        margin: "20px 0px"
    },
    right:{
        textAlign:"left"
    }
})
export function Register() {
    const classes=useStyles()
    return (
        <Container>
        
                <Logo src="/logo.png" alt="img" />
            
            <div className={classes.right}>
                <Image src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" alt="img" />
                <Happen>Happening now</Happen>
                <Happen1>Join Twitter today.</Happen1>
                <Button  className={classes.btn} startIcon={<AppleIcon/>}>Sign up with Apple</Button><br/>
                <Button className={classes.btn} startIcon={<AiOutlineGoogle/>}>Sign up with Google</Button><br/>
                <Button className={classes.btn}>Sign up with phone or email</Button>
                  
                
                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            <p>Already have an account? <span>Log in</span></p>
            </div>
            
        </Container>
    )
}
