import React from 'react'
import { StyleSheet, Text, View,Image, Button, Platform } from 'react-native';
import UserData from './components/UserData';
import Basic from './components/Basic';
import Btn from './components/Btn';
import Uses from './components/Uses';
import Proops from './components/Proops';
import Styless from './components/Styless';
import Inputs from './components/Inputs';
import Form from './components/Form';
import FlatListt from './components/FlatListt';
import LmapF from './components/LmapF';
import Dgrid from './components/Dgrid';
import Lwflatlist from './components/Lwflatlist';
import Seclists from './components/Seclists';
import Oooks from './components/Oooks';
import UseEComDmount from './components/UseEComDmount';
import ShToggle from './components/ShToggle';
import UnMounteed from './components/UnMounteed';
import ResponsiveUi from './components/ResponsiveUi';
import TouchAbll from './components/TouchAbll';
import Radiobuttn from './components/Radiobuttn';
import RDbutton from './components/RDbutton';
import Indloader from './components/Indloader';
import Moddal from './components/Moddal';
import PreSabble from './components/PreSabble';
import SttusBar from './components/SttusBar';
import Platformm from './components/Platformm';
import CustModal from './components/CustModal';
import StackNavig from './components/StackNavig';
import MenuItems from './components/MenuItems';
import FeedBackForm from './components/FeedBackForm';
import Loggin from './components/Loggin';
import Preessable from './components/Preessable';
import Img from './Img';


export default function App() {


  return (
    <View style={styles.container}>
      {/* <Basic />
      <UserData />
      <Btn />
      <Uses />
      <Proops />
      <Styless />
      <Inputs />
      <Form/>
      <FlatListt/>
      <LmapF/>
      <Dgrid/>
      <Lwflatlist/>
      <Seclists/>
      <Oooks/>
      <UseEComDmount/>
      <ShToggle/>
      <UnMounteed/>
      <ResponsiveUi/> */}
      {/* <TouchAbll/> */}
      {/* <Radiobuttn/> */}
      {/* <RDbutton/> */}
      {/* <Indloader/> */}
      {/* <Moddal/> */}
      {/* <PreSabble/> */}
      {/* <SttusBar/> */}
      {/* <Platformm/> */}
      {/* <CustModal/> */}
      {/* <StackNavig/> */}
      {/* <MenuItems/> */}
      {/* <FeedBackForm/> */}
      {/* <Loggin /> */}
      <Preessable/>
      {/* <Img/> */}
      
      
      


     




  

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 15,
    paddingRight:10,
    paddingTop:60
  },
});



// import React, { Component } from 'react'
// import { StyleSheet, Text, View,Image, Button, TextInput } from 'react-native';

// class App extends Component{

//   constructor(){
//     super();
//     this.state={
//       name:'AQ',
//       age:21
//     }
//   }

//   updateName(val){
//     this.setState({name:val})
//   }
//   fruit=()=>{
//     console.warn('DOne')
//   }


//     render(){
//         return(
//             <View>
//                 <Text style={{fontSize:25, marginTop:60, paddingLeft:20, color:'red'}}>{this.state.name}-{this.state.age}</Text>
//                 <TextInput style={{paddingLeft:20, color:'red'}} placeholder='Enter your name' onChangeText={(text)=>this.updateName(text)}/>
//                 <Button title='press' onPress={this.fruit}/>
//             </View>
//         )
//     }
// }


// export default App