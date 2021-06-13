import React from 'react';
import './App.css';
import IssueList from './components/IssueList'

const App = () => {
  // const [data, setDate] = useState(null);

  // const callApi = async () => {
  //   try
  //   {
  //     const response = await axios.get('https://api.github.com/organizations');
  //     setDate(response.data)
  //   }
  //   catch (e) 
  //   {
  //     console.log(e);
  //   }
  // };


  return (
    <IssueList/>
    // <div>
    //   <button onClick={callApi}>Api Call</button>
    //   <div>{data && <textarea rows={20} value={JSON.stringify(data, null, 2)} readOnly={true}/>}</div>
    // </div>
  )
}

export default App;
