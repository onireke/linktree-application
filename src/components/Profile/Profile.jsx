import React from "react";
import "./profile.scss";

function Profile() {
  return (
    <main className="profile--main">
      <section className="image-name">
        <img
          src="/images/amosapics.jpg"
          alt="abdulfata"
          className="abdulfatah"
          id="profile__img"
        />
        <p className="name" id="twitter">
          Amosa Abdulfatah Olayinka
        </p>

        {/* <p className="name" id="slack">
          Amosa Abdulfatah Olayinka
        </p> */}
      </section>
      <section className="links">
        <a href="https://twitter.com/BlessedCoder">
          <div className="link">Twitter Link</div>
        </a>

        <a href="https://training.zuri.team/">
          <div className="link" id="btn_zuri">
            Zuri Team
          </div>
        </a>

        <a href="http://books.zuri.team/">
          <div className="link" id="books">
            Zuri Team
          </div>
        </a>

        <a href="https://books.zuri.team/">
          <div className="link" id="book_python">
            Python Books
          </div>
        </a>

        <a href="https://background.zuri.team/">
          <div className="link" id="pitch">
            Background Check for Coders
          </div>
        </a>

        <a href="https://background.zuri.team/">
          <div className="link" id="book_design">
            Design Book
          </div>
        </a>
      </section>
    </main>
  );
}

export default Profile;
