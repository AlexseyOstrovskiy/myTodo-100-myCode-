import './App.css';
import Registration from './components/registrationPage/Registration';
import { BrowserRouter, Route } from 'react-router-dom';
import InPrivateAcc from './components/InToPrivateAcc/InPrivateAcc';
import InToPublicAcc from './components/InToPublicAcc/InPublicAcc';
import CreatePrivAcc from './components/CreatePrivAcc/CreatePrivAcc';
import CreatePublicAcc from './components/CreatePublicAcc/CreatePublicAcc';
import PublicAcc from './components/PublicAcc/PublicAcc';
import ShowExistingCase from './components/ShowExistingCase/ShowExistingCase';
import AddNewCaseForm from './components/AddNewCase/AddNewCaseForm';
function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Registration} />
        <div className='app-wrapper-content'>
          <Route exact path='/inToPrivAcc' render={() => <InPrivateAcc />} />
          <Route exact path='/inToPublicAcc' render={() => <InToPublicAcc />} />
          <Route exact path='/createPrivAcc' render={() => <CreatePrivAcc />} />
          <Route exact path='/createPublicAcc' render={() => <CreatePublicAcc store={props.store}
            addNameForPublicAcc={props.addNameForPublicAcc}
          />} />

          <Route exact path='/newPublicAcc' render={() => <PublicAcc getNameNewAcc={props.getNameNewAcc} />} />
          {/* <Route  path ='/addnewcase' render =  {()=><AddNewCaseForm/> }/> */}
          <Route path='/showexistingcase' render={() => <ShowExistingCase getNameNewAcc={props.getNameNewAcc}/>} />

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
