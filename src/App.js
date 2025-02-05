import './App.css';
import Header from "./Header";
import {useEffect, useReducer} from "react";
import Main from "./Main";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
import {NextButton} from "./components/NextButton";
import {Progress} from "./components/Progress";
import {FinishedScreen} from "./components/FinishedScreen";
import {Footer} from "./components/Footer";
import {Timer} from "./components/Timer";
import {LogInForm} from "./components/LogIn/LogInForm.jsx";
import {SignUpForm} from "./components/LogIn/SignUpForm.jsx";
import {loginEmail} from "./components/Services/apiAuth.js";
import {useAuth} from "./components/Context/AuthContext";
import {Menu} from "./components/Menu/Menu";

const initialState = {
    questions: [],
    status: 'login',
    index:0,
    answer:null,
    points:0,
    secondsRemaining: 200,
}

function reducer(state,action) {
    switch(action.type){
        case 'logout':
            return {
                ...initialState,
                status: 'login'
            }
        case 'login':
            return {
                ...initialState,
                status: 'login'
            }
        case 'newUser':
            return {
                ...state,
                status: 'newUser',
            }
        case 'loggedIn':
            return {
                ...state,
                status: 'loggedIn',
            }
        case 'dataReceived':
            return {
                ...state,
                questions: action.payload,
                status: 'active'
            };
        case 'active':
            return {
                ...state,
                status: 'active',
            }
        case 'loading':
            return {
                ...state,
                status: 'loading',
                prompt: action.payload,
            }
        case 'newAnswer':
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption ? state.points+1 : state.points,
            }
        case 'nextQuestion':
            if(state.index + 1 >= state.questions.length){
                return {...state,index:0,status:'finished',answer:null}
            }
            return {...state,index:state.index+1,answer:null};
        case 'restart':
            return {...state,index:0,answer:null,status:'loggedIn',secondsRemaining: 200,points:0};
        case 'tick':
            if (state.secondsRemaining === 0){
                return {...state,status:'finished'};
            }
            return {...state,secondsRemaining: state.secondsRemaining-1,}
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}
export default function App() {

    const {userLoggedIn} = useAuth();
    const [{questions , status, index, answer,points,secondsRemaining,prompt},dispatch] = useReducer(reducer
                                            ,initialState);

    const logIn = async (email, password) => {
        let data = {
            email:email,
            password:password
        }
        try {
            await loginEmail(email, password).then((userCredential) => {
                // Signed in successfully
                dispatch({type: 'loggedIn', payload: data})
            })
          } catch (err) {
            dispatch({type: 'login', payload: data})
          }
    }
    const signUp = (data) => {
        dispatch({type: 'loggedIn', payload: data.prompt})
    }

    const numQuestions = 10
    useEffect(function(){
        if (userLoggedIn){
            dispatch({type: 'loggedIn'})
        }
    },[userLoggedIn])

      return (
        <div className="app">
            <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <Header></Header>
            {status !== 'login' && status !== 'newUser' && <Menu dispatch={dispatch} />}
            {!userLoggedIn &&
                <Main>
                    {status === 'login' && <LogInForm onSubmit={logIn} dispatch={dispatch}></LogInForm>}
                    {status === 'newUser' && <SignUpForm onSubmit={signUp} dispatch={dispatch}></SignUpForm>}
                </Main>
            }
            {userLoggedIn && <Main>
                    {status === 'loading' && <Loader prompt={prompt} status={status} dispatch={dispatch}></Loader>}
                    {status === 'loggedIn' && <StartScreen numQuestions={numQuestions} dispatch={dispatch}></StartScreen>}
                    {status === 'active' && (
                        <>
                            <Progress numQuestions={numQuestions} points={points} index={index}></Progress>
                            <Question question={questions[index]} dispatch={dispatch} answer={answer} points={points}></Question>
                            <Footer>
                                <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
                                <NextButton dispatch={dispatch} answer={answer}/>
                            </Footer>
                        </>
                    )}
                    {status === 'finished' && (
                        <FinishedScreen points={points} maxPossiblePoints={numQuestions} dispatch={dispatch}></FinishedScreen>
                    )}
                </Main> }



        </div>
      );
}
