import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ApplicationsAll from './applicationsAll';
import ApplicationsFinished from './applicationsFinished';
import ApplicationsInWork from './applicationsInWork';
import ApplicationsNew from './applicationsNew';
import ApplicationsEdit from './ApplicationEdit';
import ApplicationElemComponent from './applicationElem';
import { useState } from 'react';



function App() {


  const navigate = useNavigate();
  const [applicationsType, setApplicationsType] = useState("all");

  function changeApplicationType(newType){
    if(applicationsType === newType) return;
    else{
      setApplicationsType(newType);
      navigate("/applications/" + newType);
    }
  }

  const [applicationsDataAll, setApplicationsDataAll] = useState([
    {id: 1, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "all"},
    {id: 2, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "all"},
    {id: 3, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "all"},
  ]);
  const [applicationsDataFinished, setApplicationsDataFinished] = useState([
        {id: 1, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "finished"},
        {id: 2, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "finished"},
        {id: 3, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "finished"},
  ]);
  const [applicationsDataInWork, setApplicationsDataInWork] = useState([
    {id: 1, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "in work"},
    {id: 2, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "in work"},
    {id: 3, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "in work"},
  ]);
  const [applicationsDataNew, setApplicationsDataNew] = useState([
        {id: 1, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "new"},
        {id: 2, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "new"},
        {id: 3, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "new"},
  ]);





  return (
    <ExternalWrapper>
      <MainTitle>
        <MainTitleText>
          Curator's office
        </MainTitleText>
      </MainTitle>
      <MainContent>
      <NavigationWrapper>
        <ApplicationProfileCommon>
          <ApplicationsTitle>Applications</ApplicationsTitle>
          <UserProfileWrapper>
            <UserPhoto src="/images/avatar.jpg"/>
            <UserName>Petrov <br/> Savelii</UserName>
          </UserProfileWrapper>
        </ApplicationProfileCommon>
        <NavigationButtonsWrapper>
          <NavigationButton onClick={()=>changeApplicationType("all")}>
            <NavigationButtonText>All</NavigationButtonText>
            {applicationsType === "all" ? <NavigationButtonIcon src="/images/ShevronRight.svg"/> : null}
          </NavigationButton>
          <NavigationButton onClick={()=>changeApplicationType("new")}>
            <NavigationButtonText>New</NavigationButtonText>
            {applicationsType === "new" ? <NavigationButtonIcon src="/images/ShevronRight.svg"/> : null}
          </NavigationButton>
          <NavigationButton onClick={()=>changeApplicationType("inwork")}>
            <NavigationButtonText>In work</NavigationButtonText>
            {applicationsType === "inwork" ? <NavigationButtonIcon src="/images/ShevronRight.svg"/> : null}
          </NavigationButton>
          <NavigationButton onClick={()=>changeApplicationType("finished")}>
            <NavigationButtonText>Finished</NavigationButtonText>
            {applicationsType === "finished" ? <NavigationButtonIcon src="/images/ShevronRight.svg"/> : null}
          </NavigationButton>
        </NavigationButtonsWrapper>
        
      </NavigationWrapper>
      <Routes>
        <Route path={"/applications/all"} element={<ApplicationsAll data={applicationsDataAll}/>}/>
        <Route path={"/applications/finished"} element={<ApplicationsAll data={applicationsDataFinished}/>}/>
        <Route path={"/applications/inwork"} element={<ApplicationsAll data={applicationsDataInWork}/>}/>
        <Route path={"/applications/new"} element={<ApplicationsAll data={applicationsDataNew}/>}/>
        {/* <Route path={"/application/edit"} element={<ApplicationsAll/>}/> */}
        <Route path={"/applications"} element={<Navigate to={"/applications/all"}/>}/>
        <Route
                path={"*"}
                element={<>страница не найдена, попробуйте другой адрес</>}
            />
        <Route
                path={"/application/*"}
                element={<ApplicationElemComponent/>}
        
        />
      </Routes>
      </MainContent> 
     
      
      
    </ExternalWrapper>
    
  );
}



const ExternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Dela Gothic One';
  background-color: #F8F8F8;
`
const NavigationWrapper = styled.div`
  padding: 40px 43px 111px 68px;
  width: 510px;
  @media(max-width: 1840px){
    padding: 40px 43px 111px 20px;
    width: 450px;
  }
  @media(max-width: 1500px){
    width: unset;
    display: flex;
    padding-bottom: 0px;
    height: 320px;
  }
  @media(max-width: 1260px){
    flex-direction: column;
    height: unset
  
  }
  
`
const MainContent = styled.div`
  font-family: 'Dela Gothic One';
  background: white;
  width: 1824px;
  height: 881px;
  border-radius: 21px;
  display: flex;
  @media(max-width: 1840px){
    width: 1740px;
  }
  @media(max-width: 1760px){
    width: 1485px;
  }
  @media(max-width: 1500px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
  }
  @media(max-width: 1100px){
    align-items: initial;
}
`
const MainTitle = styled.div`
  margin: 82px auto 68px auto;
`
const ApplicationProfileCommon = styled.div`
  @media(max-width: 1260px){
    margin: 0 auto;
  }
`

const MainTitleText = styled.h1`
  color: #1B4688;
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: -0.04em;
  text-align: left;
  
`
const ApplicationsTitle = styled.p`
  color: #1B4688;
  font-family: Dela Gothic One;
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: -0.04em;
  text-align: left;
  margin-bottom: 35px;
  @media(max-width: 1260px){
    text-align: center;
  }
`
const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  background: url("/images/profile_wrapper.svg");
  background-repeat: no-repeat;
  padding-bottom: 65px;
  width: 393px;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: 88px;
  @media(max-width: 1260px){
    margin-bottom: -60px;
  }
`
const UserPhoto = styled.img`
  width: 122px;
  height: 122px;
  border-radius: 50%;
  margin-right: 20px;
`
const UserName = styled.p`
  color: #1B4688;
  font-family: Dela Gothic One;
  font-size: 38px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: -0.04em;
  text-align: left;

`

const NavigationButtonsWrapper = styled.div`
  @media(max-width: 1500px){
    display: flex;
    align-items: flex-start;
    margin-top: 80px;
    margin-left: 20px;
  }
  @media(max-width: 1100px){
    margin-left: auto;
    margin-right: auto;
  }
`
const NavigationButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  &:last-child{
    margin-bottom: 0px;
  }
  justify-content: space-between;
  background-color: #1B4688;
  border-radius: 15px;
  padding: 24px 21px 24px 22px;
  cursor: pointer;
  @media(max-width: 1500px){
    margin-right: 20px;
    &:last-child{
      margin-right: 0px;
    }
  }
  @media(max-width: 1100px){
    padding: 12px 15px;
  }
  @media(max-width: 560px){
    margin-right: 5px;
  }
  
`
const NavigationButtonText = styled.p`
  color: white;
  font-family: Dela Gothic One;
  font-size: 34px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: -0.04em;
  text-align: left;
  @media(max-width: 1100px){
    font-size: 18px;
  }
 

`
const NavigationButtonIcon = styled.img`
  @media(max-width: 1500px){
    padding-left: 20px;
  }
`



export default App;
