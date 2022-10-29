import React from "react";

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
      </section>
      <section className="links">
        <a href="">
          <div className="link"></div>
        </a>
      </section>
    </main>
  );
}

export default Profile;
