import {useState} from "react";

export default function Presence() {
    const [isSelected, setIsSelected] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [todayInput, setTodayInput] = useState('neutral')
    const [tomorrowInput, setTomorrowInput] = useState('neutral')
    const [afterTomorrowInput, setAfterTomorrowInput] = useState('neutral')
    const arrList = [
        {name: "Tim", today: "negative", tomorrow: "neutral", afterTomorrow: "positive"},
        {name: "Tom", today: "negative", tomorrow: "negative", afterTomorrow: "positive"},
        {name: "Tina", today: "neutral", tomorrow: "neutral", afterTomorrow: "negative"}
    ]

    function handleChange(day) {
        const dayElements = document.getElementsByName(day);
        let i = 0;
        while (i < dayElements.length) {
            if (dayElements[i].checked) {
                switch (day) {
                    case "today" :
                        setTodayInput(dayElements[i].value);
                        break;
                    case "tomorrow" :
                        setTomorrowInput(dayElements[i].value);
                        break;
                    case "afterTomorrow" :
                        setAfterTomorrowInput(dayElements[i].value);
                        break;
                }
                break;
            } else {
                i++;
            }
        }
    }

    function handleNameChange() {
        name = document.getElementById('nameInput').value;
        setNameInput(name);
    }

    function handleSubmit(inList, name) {
        inList ? setNameInput(name) : handleNameChange();
        handleChange("today");
        handleChange("tomorrow");
        handleChange("afterTomorrow");
        inList ? removeAndPost(name) : postToList(inList, name);
    }

    function postToList(inList, name) {
        arrList.push({
            name: inList ? name : nameInput,
            today: todayInput,
            tomorrow: tomorrowInput,
            afterTomorrow: afterTomorrowInput
        })
    }

    function removeAndPost(name) {
        let i = 0;
        while (i < arrList.length)
            if (arrList[i].name === name) {
                arrList.splice(i, 1);
                break;
            } else {
                i++;
            }
        postToList(true, name);
    }

    return (
        <div className={"text-center"}>
            <div className={"grid grid-cols-12 font-bold"}>
                <div className={"col-span-2"}>Name</div>
                <div className={"col-span-3"}>Heute</div>
                <div className={"col-span-3"}>Morgen</div>
                <div className={"col-span-3"}>Übermorgen</div>
            </div>
            <div className={"grid grid-cols-12 font-bold"}>
                <div className={"col-span-2"}></div>
                <div className={"col-span-1"}>HO</div>
                <div className={"col-span-1"}>k.A/unsicher</div>
                <div className={"col-span-1"}>im Büro</div>
                <div className={"col-span-1"}>HO</div>
                <div className={"col-span-1"}>k.A/unsicher</div>
                <div className={"col-span-1"}>im Büro</div>
                <div className={"col-span-1"}>HO</div>
                <div className={"col-span-1"}>k.A/unsicher</div>
                <div className={"col-span-1"}>im Büro</div>
            </div>
            <div className={"grid grid-cols-12 my-1"}>
                <input type="text" id="nameInput" className={"col-span-2 border-black border rounded-md ml-1.5"}
                       onChange={handleNameChange}/>
                <input type="radio" name={"today"} value={"negative"} onChange={() => handleChange("today")}/>
                <input type="radio" name={"today"} value={"neutral"} onChange={() => handleChange("today")}/>
                <input type="radio" name={"today"} value={"positive"} onChange={() => handleChange("today")}/>
                <input type="radio" name={"tomorrow"} value={"negative"} onChange={() => handleChange("tomorrow")}/>
                <input type="radio" name={"tomorrow"} value={"neutral"} onChange={() => handleChange("tomorrow")}/>
                <input type="radio" name={"tomorrow"} value={"positive"} onChange={() => handleChange("tomorrow")}/>
                <input type="radio" name={"afterTomorrow"} value={"negative"}
                       onChange={() => handleChange("afterTomorrow")}/>
                <input type="radio" name={"afterTomorrow"} value={"neutral"}
                       onChange={() => handleChange("afterTomorrow")}/>
                <input type="radio" name={"afterTomorrow"} value={"positive"}
                       onChange={() => handleChange("afterTomorrow")}/>
                <button className={"mr-12 border border-black rounded-md bg-blue-400"}
                        onClick={() => handleSubmit(false, "Input")}>submit
                </button>
            </div>
            {Object.keys(arrList).map(function (key, index) {
                return <div key={"nameEntry-" + key}>
                    {arrList[key].name != null &&
                        <>
                            {isSelected !== arrList[key].name &&
                                <div className={"grid grid-cols-12 my-1"}>
                                    <div className={"col-span-2 col-start-1"}>{arrList[key].name}</div>
                                    <div>{arrList[key].today === "negative" && "x"}</div>
                                    <div>{arrList[key].today === "neutral" && "x"}</div>
                                    <div>{arrList[key].today === "positive" && "x"}</div>
                                    <div>{arrList[key].tomorrow === "negative" && "x"}</div>
                                    <div>{arrList[key].tomorrow === "neutral" && "x"}</div>
                                    <div>{arrList[key].tomorrow === "positive" && "x"}</div>
                                    <div>{arrList[key].afterTomorrow === "negative" && "x"}</div>
                                    <div>{arrList[key].afterTomorrow === "neutral" && "x"}</div>
                                    <div>{arrList[key].afterTomorrow === "positive" && "x"}</div>
                                    <button className={"mr-12 border border-black rounded-md"}
                                            onClick={() => setIsSelected(arrList[key].name)}>change
                                    </button>
                                </div>}
                            {isSelected === arrList[key].name &&
                                <div className={"grid grid-cols-12 my-2"}>
                                    <div className={"col-span-2 col-start-1"}>{arrList[key].name}</div>
                                    <input type="radio" name={"today"} value={"negative"}
                                           onChange={() => handleChange("today")}/>
                                    <input type="radio" name={"today"} value={"neutral"}
                                           onChange={() => handleChange("today")}/>
                                    <input type="radio" name={"today"} value={"positive"}
                                           onChange={() => handleChange("today")}/>
                                    <input type="radio" name={"tomorrow"} value={"negative"}
                                           onChange={() => handleChange("tomorrow")}/>
                                    <input type="radio" name={"tomorrow"} value={"neutral"}
                                           onChange={() => handleChange("tomorrow")}/>
                                    <input type="radio" name={"tomorrow"} value={"positive"}
                                           onChange={() => handleChange("tomorrow")}/>
                                    <input type="radio" name={"afterTomorrow"} value={"negative"}
                                           onChange={() => handleChange("afterTomorrow")}/>
                                    <input type="radio" name={"afterTomorrow"} value={"neutral"}
                                           onChange={() => handleChange("afterTomorrow")}/>
                                    <input type="radio" name={"afterTomorrow"} value={"positive"}
                                           onChange={() => handleChange("afterTomorrow")}/>
                                    <button className={"mr-12 border border-black rounded-md bg-blue-400"}
                                            onClick={() => handleSubmit(true, arrList[key].name)}>submit
                                    </button>
                                </div>}
                        </>
                    }
                </div>
            })}
        </div>
    )
}
