import Footer from "../footer/footer";
import Header from "../header/Header";
import profilePhoto from "../../markup/image/profile-photo.jpg";
import { useAppSelector } from "../../hooks";
import { getUserEmail, getUserInterests, getUserMiddleName, getUserName, getUserSurname } from "../../store/selectors";

type ProfileProps = {
  name:string;
  surname:string;
  middlename:string;
  email: string;
  interests: string;
}
function ProfilePage() {
  const userName = useAppSelector(getUserName);
  const userSurname = useAppSelector(getUserSurname);
  const userMiddlename = useAppSelector(getUserMiddleName);
  const userEmail = useAppSelector(getUserEmail);
  const userInterests = useAppSelector(getUserInterests);
  return (
    <>
      <Header />
      <div className="profile-info">
        <h1 style={{ textAlign: "center" }}>Профиль пользователя</h1>
        <div className="profile-card">
          <img src={profilePhoto} alt="Фото профиля" className="profile-photo" />
          <form className="profile-form">
            <label htmlFor="surname">Фамилия</label>
            <input type="text" id="surname" name="surname" value={userSurname} required />

            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" value={userName} required />

            <label htmlFor="middlename">Отчество</label>
            <input type="text" id="middlename" name="middlename" value={userMiddlename} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={userEmail} required />

            <label htmlFor="interests">Интересы</label>
            <textarea id="interests" name="interests">{userInterests}</textarea>

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