import React from "react";

function LoginForm() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form method="get" action="saved.html" className="mt-5">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input type="text" className="form-control" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input type="password" className="form-control" placeholder="password" />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="submit" className="btn btn-secondary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
