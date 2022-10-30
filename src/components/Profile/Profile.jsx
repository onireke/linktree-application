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
          <btn className="link">Twitter Link</btn>
        </a>

        <a href="https://training.zuri.team/">
          <btn className="link" id="btn_zuri">
            Zuri Team
          </btn>
        </a>

        <a href="http://books.zuri.team/">
          <btn className="link" id="books">
            Zuri Team
          </btn>
        </a>

        <a href="https://books.zuri.team/">
          <btn className="link" id="book_python">
            Python Books
          </btn>
        </a>

        <a href="https://background.zuri.team/">
          <btn className="link" id="pitch">
            Background Check for Coders
          </btn>
        </a>

        <a href="https://background.zuri.team/">
          <btn className="link" id="book_design">
            Design Book
          </btn>
        </a>
      </section>
    </main>
  );
}

export default Profile;
