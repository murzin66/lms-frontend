import Footer from "../footer/footer";
import Header from "../header/Header";
import profilePhoto from "../../markup/image/profile-photo.jpg";

function ProfilePage() {
  return (
    <>
      <Header />
      <div className="profile-info">
        <h1 style={{ textAlign: "center" }}>Профиль пользователя</h1>
        <div className="profile-card">
          <img src={profilePhoto} alt="Фото профиля" className="profile-photo" />
          <form className="profile-form">
            <label htmlFor="surname">Фамилия</label>
            <input type="text" id="surname" name="surname" value="Иванов" required />

            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" value="Иван" required />

            <label htmlFor="middlename">Отчество</label>
            <input type="text" id="middlename" name="middlename" value="Иванович" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value="example@mail.com" required />

            <label htmlFor="interests">Интересы</label>
            <textarea id="interests" name="interests">Программирование, Машинное обучение</textarea>

            <button type="submit" className="save-button" aria-label="Сохранить изменения">
              Сохранить изменения
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;