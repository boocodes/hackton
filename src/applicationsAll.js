import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ApplicationsAll(props){

    const navigate = useNavigate();
    // const [applicationsData, setApplicationsData] = useState([
    //     {id: 1, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "all"},
    //     {id: 1, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "all"},
    //     {id: 1, course: "Oratorskoe masterstvo", date: "05.02.2023", phone: "+79990555321", fio: "Ivanov Svyatoslav Vasilevich", email: "svem@mail.ru", status: "all"},
    // ]);


    return(
        <ExternalWrapper>
            <Header>
                <HeaderVerticalLine></HeaderVerticalLine>
                <IDTitleWrapper>
                    <IDTitleText>ID</IDTitleText>
                </IDTitleWrapper>
                <HeaderVerticalLine></HeaderVerticalLine>
                <CourseTitleWrapper>
                    <CourseTitleText>Course</CourseTitleText>
                </CourseTitleWrapper>
                <HeaderVerticalLine></HeaderVerticalLine>
                <DateTitleWrapper>
                    <DateTitleText>Date</DateTitleText>
                </DateTitleWrapper>
                <HeaderVerticalLine></HeaderVerticalLine>
                <TelephoneTitleWrapper>
                    <TelephoneTitleText>Telephone</TelephoneTitleText>
                </TelephoneTitleWrapper>
                <HeaderVerticalLine></HeaderVerticalLine>
                <FIOTitleWrapper>
                    <FIOTitleText>FIO</FIOTitleText>
                </FIOTitleWrapper>
                <HeaderVerticalLine></HeaderVerticalLine>
                <EmailTitleWrapper>
                    <EmailTitleText>E-mail</EmailTitleText>
                </EmailTitleWrapper>
                <HeaderVerticalLine></HeaderVerticalLine>
                <StatusTitleWrapper>
                    <StatusTitleText>Status</StatusTitleText>
                </StatusTitleWrapper>
            </Header>
            <UnderHeaderLine></UnderHeaderLine>
            <ApplicationsList>
                {
                    props.data.map((elem)=>{
                        return(
                            <ApplicationElem onClick={()=>navigate("/application/" + elem.id)}>
                                <ApplicationId>
                                    <ApplicationIdText>{elem.id}</ApplicationIdText>
                                </ApplicationId>
                                <ApplicationCourse>
                                    <ApplicationCourseText>{elem.course}</ApplicationCourseText>
                                </ApplicationCourse>
                                <ApplicationDate>
                                    <ApplicationDateText>{elem.date}</ApplicationDateText>
                                </ApplicationDate>
                                <ApplicationTelephone>
                                    <ApplicationTelephoneText>{elem.phone}</ApplicationTelephoneText>
                                </ApplicationTelephone>
                                <ApplicationFIO>
                                    <ApplicationFIOText>{elem.fio}</ApplicationFIOText>
                                </ApplicationFIO>
                                <ApplicationEmail>
                                    <ApplicationEmailText>{elem.email}</ApplicationEmailText>
                                </ApplicationEmail>
                                <ApplicationStatus>
                                    <ApplicationStatusText>{elem.status}</ApplicationStatusText>
                                </ApplicationStatus>
                            </ApplicationElem>
                        )
                    })
                }
            </ApplicationsList>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    font-family: 'Dela Gothic One';
    @media(max-width: 1100px){
        padding-left: 50px;
        padding-right: 50px;
    }
`
const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 45px 15px 0px 0px;
    color: #ACA8A8;
    font-size: 30px;
    font-weight: 400;
    @media(max-width: 1760px){
        font-size: 20px;
    }

`
const HeaderVerticalLine = styled.div`
    width: 3px;
    height: 71px;
    background-color: #D9D9D9;
    @media(max-width: 1100px){
        display: none;
        &:nth-child(1){
            display: block;
        }
        &:nth-child(3){
            display: block;
        }
    }
    
`
const IDTitleWrapper = styled.div`
    margin-right: 31px;
    margin-left: 31px;
`
const IDTitleText = styled.p`

`
const CourseTitleWrapper = styled.div`
    margin-left: 31px;
    margin-right: 35px;
`
const CourseTitleText = styled.p`

`
const DateTitleWrapper = styled.div`
    margin-left: 47px;
    margin-right: 45px;
    @media(max-width: 1100px){
        display: none;
    }
`
const DateTitleText = styled.p`

`
const TelephoneTitleWrapper = styled.div`
    margin-left: 15px;
    margin-right: 24px;
    @media(max-width: 1100px){
        display: none;
    }
`
const TelephoneTitleText = styled.p`

`
const FIOTitleWrapper = styled.div`
    margin-left: 42px;
    margin-right: 67px;
    @media(max-width: 1100px){
        display: none;
    }
`
const FIOTitleText = styled.p`

`
const EmailTitleWrapper = styled.div`
    margin-left: 32px;
    margin-right: 52px;
    @media(max-width: 1100px){
        display: none;
    }
`
const EmailTitleText = styled.p`

`
const StatusTitleWrapper = styled.div`
    margin-left: 21px;
    @media(max-width: 1100px){
        display: none;
    }
`
const StatusTitleText = styled.p`

`
const UnderHeaderLine = styled.div`
    height: 3px;
    position: relative;
    width: 100%;
    margin-top: 12px;
    background-color: #D9D9D9;
`

const ApplicationsList = styled.div`
    margin-top: 12px;
`

const ApplicationElem = styled.div`
    display: flex;
    cursor: pointer;
    align-items: stretch;
    height: 100%;
    color: #1B4688;
    font-size: 21px;
    position: relative;
    &:last-child{
        height: 100%;
    }
    @media(max-width: 1760px){
        font-size: 16px;
    }
    
`
const ApplicationId = styled.div`
    border-left: 3px solid #D9D9D9;
    border-right: 3px solid #D9D9D9;
    display: flex;
    align-items: center;
    width: 115px;
    justify-content: center;
    padding-bottom: 40px;
    @media(max-width: 1760px){
        width: 100px;
    }
    
`
const ApplicationIdText = styled.p`
    text-align: center;
`
const ApplicationCourse = styled.div`
    border-right: 3px solid #D9D9D9;
    
    width: 198px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    @media(max-width: 1760px){
        width: 155px;
    }
    @media(max-width: 1100px){
        border-right: none;
    }
    
`
const ApplicationCourseText = styled.p`

`
const ApplicationDate = styled.div`
    border-right: 3px solid #D9D9D9;
    width: 180px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    @media(max-width: 1760px){
        width: 150px;
    }
    @media(max-width: 1100px){
        display: none;
    }
`
const ApplicationDateText = styled.p`

`
const ApplicationTelephone = styled.div`
    border-right: 3px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 228px;
    @media(max-width: 1760px){
        width: 165px;
    }
    @media(max-width: 1100px){
        display: none;
    }
`
const ApplicationTelephoneText = styled.p`

`
const ApplicationFIO = styled.div`
    border-right: 3px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: left;
    padding-left: 15px;
    width: 186px;
    @media(max-width: 1760px){
        width: 160px;
    }
    @media(max-width: 1100px){
        display: none;
    }
`
const ApplicationFIOText = styled.p`

`
const ApplicationEmail = styled.div`
    border-right: 3px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 202px;
    @media(max-width: 1760px){
        width: 165px;
    }
    @media(max-width: 1100px){
        display: none;
    }
`
const ApplicationEmailText = styled.p`

`
const ApplicationStatus = styled.div`
    padding-left: 15px;
    @media(max-width: 1100px){
        display: none;
    }
`
const ApplicationStatusText = styled.p`

`

export default ApplicationsAll;