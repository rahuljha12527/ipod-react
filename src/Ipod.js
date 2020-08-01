import React, { Component } from 'react';

class Ipod extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const styles={
    ipodContainer:{
        height:'33rem',
        width:'20rem',
        bacgroundImage:'radial-gradient(#adb1b5,#4d4f50)',
        margin:'4rem auto',
        display:'flex',
        flexDirection: 'row-reverse',
        flexWrap:'wrap',
        justifyContent:'center',
        borderRadius:'24px'
    },

     wheel:{
         width:'75%',
         height:'40%',
         margin:'1rem auto',
         bacgroundColor:'#4b4e52',
         borderRadius:'50%',
         display:'flex',
         flexDirection:'row',
         flexWrap:'wrap',
         justifyContent:'center'
     },

     buttonContainer:{
         width:'85%',
         height:'30%',
         display:'flex',
         flexDirection:'row',
         justifyContent:'center'
     },
     menuButton:{
         alignSelf:'center'
     },
     playButton:{
         alignSelf:'cener'
     },

     middleButton:{
         alignSelf:'center',
         width:'100%',
         display:'flex',
         flexDirection:'row',
         justifyContent:'space-between'

     },

     image:{
         alignSelf:'center',
         fontSize:'1.5rem',
         color:'white'
     },
     

}

export default Ipod;