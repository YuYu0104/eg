import React from "react";
function Cont(props) {
  return (
    <div id="contactContainer">
      <h2 className="pt-5">Contact Us</h2>

      <div class="Contcontainer">
        <div class="Contbox pho">
          <img src="/assects/images/rhandphone1.png" />
        </div>
        <div class="Contbox detail">
          <form className="text-white">
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext my-input"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Phone
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext my-input"
                  id="staticEmail"
                  value="09-402061093"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Adress
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext my-input"
                  id="staticEmail"
                  value="street-28,No.135"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Cont;
