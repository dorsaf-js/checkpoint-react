
import './App.css';
import './style.css';
function App() {
  return (
    <div className="App">
      <div class="row justify-content-center" id="row">
      <div class="col-3">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" id="email" >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
    
    <div id="emailHelp" class="form-text" id ="we">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1" id="check">Check me out</label>
  </div>
  <button type="submit" class="btn btn-dark">Submit</button>
</form>
    </div>
    </div>
    </div>
  );
}

export default App;
