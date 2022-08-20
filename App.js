import './App.css';

function App() {
  return (
    <div className="App">
      <table border="5px">
                <thead><h1>Statistics Of Heavy Media Users 18+</h1></thead>
                <tr>
                    <th></th>
                    <th>RADIO</th>
                    <th>TELEVISION</th>
                    <th>INTERNET</th>
                    <th>PRINT NEWSPAPER</th>

                </tr>
                <tr>
                    <td><b>AVERAGE AGE</b></td>
                    <td>44</td>
                    <td>53</td>
                    <td>42</td>
                    <td>51</td>
                </tr>

                <tr>
                    <td><b>%MALE</b></td>
                    <td>53%</td>
                    <td>46%</td>
                    <td>51%</td>
                    <td>48%</td>
                </tr>

                <tr>
                    <td><b>%FEMALE</b></td>
                    <td>47%</td>
                    <td>54%</td>
                    <td>49%</td>
                    <td>52%</td>
                </tr>

                <tr>
                    <td><b>WORK FULL TIME/PART TIME</b></td>
                    <td>68%</td>
                    <td>49%</td>
                    <td>67%</td>
                    <td>57%</td>
                </tr>

                <tr>
                    <td><b>% CONSUMERS USING SOCIAL MEDIA</b></td>
                    <td>75%</td>
                    <td>60%</td>
                    <td>92%</td>
                    <td>67%</td>
                </tr>
            </table>
    </div>
  );
}

export default App;
