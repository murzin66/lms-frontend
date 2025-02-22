import Footer from "../footer/footer";
import Header from "../header/Header";
import profilePhoto from "../../markup/image/profile-photo.jpg";

type ProfileProps = {
  name:string;
  surname:string;
  middlename:string;
  email: string;
  interests: string;
}
function ProfilePage({name, surname, middlename, email, interests}:ProfileProps) {
  return (
    <>
      <Header />
      <div className="profile-info">
        <h1 style={{ textAlign: "center" }}>Профиль пользователя</h1>
        <div className="profile-card">
          <img src={profilePhoto} alt="Фото профиля" className="profile-photo" />
          <form className="profile-form">
            <label htmlFor="surname">Фамилия</label>
            <input type="text" id="surname" name="surname" value={surname} required />

            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" value={name} required />

            <label htmlFor="middlename">Отчество</label>
            <input type="text" id="middlename" name="middlename" value={middlename} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} required />

            <label htmlFor="interests">Интересы</label>
            <textarea id="interests" name="interests">{interests}</textarea>

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