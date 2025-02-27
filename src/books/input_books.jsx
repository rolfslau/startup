import { useNavigate } from 'react-router-dom';

export function Inputbooks() {
    const navigate = useNavigate
    // const [book, setbook, [author, setauthor], [review, setreview], [stars, setstars]] = React.useState
    const [book, setbook] = React.useState
    const [author, setauthor] = React.useState
    const [review, setreview] = React.useState
    const [stars, setstars] = React.useState
    function savereview(e) {
        localStorage.setItem(book, [author, review, stars])
        navigate('/books')
    }

    return (
        <main>
        <label htmlfor="text">Title </label>
        <input type="text" id="text" name="varText" placeholder="your last read here" onChange={(e)=>setbook(e.target.value)}/>

<label htmlfor="text">Author </label>
<input type="text" id="text" name="varText" onChange={(e)=>setauthor(e.target.value)}/>

<br/>
    
<label htmlfor="textarea">Review</label>
<textarea id="textarea" name="varTextarea" placeholder="what did you think?" onChange={(e)=>setreview(e.target.value)}></textarea>


{/* <fieldset>
    <legend>stars</legend>
    <label for="checkbox1">⭐️</label>
    <input type="checkbox" id="checkbox1" name="varCheckbox" value="checkbox1" />
    <label for="checkbox2">⭐️</label>
    <input type="checkbox" id="checkbox2" name="varCheckbox" value="checkbox2" />
    <label for="checkbox3">⭐️</label>
    <input type="checkbox" id="checkbox3" name="varCheckbox" value="checkbox3" />
    <label for="checkbox4">⭐️</label>
    <input type="checkbox" id="checkbox4" name="varCheckbox" value="checkbox1" />
    <label for="checkbox5">⭐️</label>
    <input type="checkbox" id="checkbox5" name="varCheckbox" value="checkbox1" />
  </fieldset> */}
  <label htmlfor="stars">Stars</label>
  <textarea id='stars' placeholder="1-5" onChange={(e)=>setstars(e.target.value)}></textarea>

    <button onClick={savereview} >add review</button>

</main>
    )
}