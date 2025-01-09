import {useEffect} from "react";
import OpenAI  from "openai";


export default function Loader({status,dispatch,prompt}) {

    const systemPrompt = "You are a quiz generator AI. Your task is to create a quiz with 10 questions in JSON format. Each question must adhere to the following structure: {\n" +
        "  \"results\": [\n" +
        "    {\n" +
        "      \"type\": \"multiple\",\n" +
        "      \"difficulty\": \"medium\",\n" +
        "      \"category\": \"[TOPIC]\",\n" +
        "      \"question\": \"The text of the question goes here.\",\n" +
        "      \"correct_answer\": \"The correct answer text goes here.\",\n" +
        "      \"incorrect_answers\": [\n" +
        "        \"Incorrect Option 1\",\n" +
        "        \"Incorrect Option 2\",\n" +
        "        \"Incorrect Option 3\"\n" +
        "      ]\n" +
        "    },\n" +
        "    ...\n" +
        "  ]\n" +
        "} Requirements:\n" +
        "Replace [TOPIC] with the user-provided topic (e.g., \"Mythology,\" \"Science,\" \"World History\").\n" +
        "Ensure that each question has:\n" +
        "1 correct answer in the correct_answer field.\n" +
        "3 incorrect answers in the incorrect_answers array.\n" +
        "The type must always be \"multiple\".\n" +
        "The difficulty must always be \"medium\".\n" +
        "Questions and answers should be accurate, concise, and related to the topic.\n" +
        "Do not add any extra text, commentary, or explanations outside of the JSON structure."

    function shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i (inclusive)
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap the current element with the random element
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];  // ES6 destructuring assignment
    }
    return array;
    }
    function Transform_json_to_question(data) {

        var choices = [0,1,2,3]

        console.log(choices)
        var questions = {
            questions: [],
        }

        for (const q of data['results']){
            var question = {
                question: q['question'],
                correctOption: choices[0],
                options:[],
                points:10
            }
            let i = 0
            let c = 0
            choices = shuffleArray(choices);
            while ( i < choices.length){
                if (i == question.correctOption){
                    question.options.push(q['correct_answer'])
                }
                else{
                    question.options.push(q['incorrect_answers'][c])
                    c += 1 
                }
                i += 1
            }
            console.log(question)
            questions.questions.push(question)
        }
        
        return questions;


    }

    const generate_quiz_from_prompt = async () => {
        const API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY
        const openai = new OpenAI({apiKey:API_KEY,dangerouslyAllowBrowser: true});
        try{
            const response = await openai.chat.completions.create({
                        model: "gpt-3.5-turbo",
                        messages: [
                            {
                                role: "system",
                                content: systemPrompt
                            },
                            {
                                role: "user",
                                content: prompt,
                            },
                        ],
                    })

            const messageContent = response.choices[0].message.content;
            console.log(messageContent)
            const questions = Transform_json_to_question(JSON.parse(messageContent))
            dispatch({type: 'dataReceived', payload: questions['questions']})
        }
        catch(err){
              console.error('Error:', err)
                if (status === 'loading') {
                    fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple')
                        .then(res => res.json())
                        .then(data => {
                            var questions = Transform_json_to_question(data)
                            dispatch({type: 'dataReceived', payload: questions['questions']})
                        })
                        .catch(err => console.log("The error" + err));
        }

    }
    }

    useEffect(  () => {
        
                if (status === 'loading') {
                    
                generate_quiz_from_prompt()
                    
            }
                
        }
    ,
        [Transform_json_to_question, dispatch, generate_quiz_from_prompt, prompt, status, systemPrompt]
    )
        ;

        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Loading questions...</p>
            </div>
        );
    }