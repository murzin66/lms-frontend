import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import profilePhoto from "../../markup/image/profile-photo.jpg";
import { useAppSelector } from "../../hooks";
import { getUserEmail, getUserId, getUserInterests, getUserMiddleName, getUserName, getUserSurname } from "../../store/selectors";
import {  useState } from "react";
import { User } from "../../types/state";

export type ProfilePageProps = {
  profileButtonHandler: ()=>void,
  handleSearchFunction: (search:string)=> void,
  handleProgressClick: ()=> void,
  handleUserDataChangeFunction: (data: User)=> void,
  handleLogoutAction: () => void
}
function ProfilePage({profileButtonHandler, handleSearchFunction, handleProgressClick, handleUserDataChangeFunction, handleLogoutAction}:ProfilePageProps) {
  const userNameInit = useAppSelector(getUserName);
  const userSurnameInit = useAppSelector(getUserSurname);
  const userMiddlenameInit = useAppSelector(getUserMiddleName);
  const userEmailInit = useAppSelector(getUserEmail);
  const userInterestsInit = useAppSelector(getUserInterests);
  const userId = useAppSelector(getUserId);

  const [userName, setUserName] = useState<string>(userNameInit);

  const [userSurname, setUserSurname] = useState<string>(userSurnameInit);

  const [userMidName, setUsermidname] = useState<string>(userMiddlenameInit);

  const [userEmail, setUserEmail] = useState<string>(userEmailInit);

  const [userInterests, setUserInterests] = useState<string>(userInterestsInit);

  const handleLogout = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleLogoutAction();
  }

  const handleUserDataChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newUserData = {
      name: userName,
      surname: userSurname,
      middlename: userMidName,
      interests: userInterests,
      email: userEmailInit,
      photoUrl: profilePhoto,
      userId: 0,
      isAuth: true,
      progress: [],
      isUserDataLoading: false,
      recommendations: [],
      enrolledCourses: [],
      password: '',
      recommendationTags: []
    };
    handleUserDataChangeFunction(newUserData);
  };
  return (
    <>
      <Header profileButtonHandler = {profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction}/>
      <div className="profile-info" data-testid = "profile-form">
        <h1 style={{ textAlign: "center" }}>Профиль пользователя</h1>
        <div className="profile-card">
          <img src={profilePhoto} alt="Фото профиля" className="profile-photo" />
          <form className="profile-form">

            <label htmlFor="surname">Фамилия</label>
            <input type="text"
              id="surname"
              name="surname"
              value={userSurname}
              required
              onChange={(e) => setUserSurname(e.target.value)}
              />

            <label htmlFor="name">Имя</label>
            <input type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              />

            <label htmlFor="middlename">Отчество</label>
            <input type="text"
              id="middlename"
              name="middlename"
              value={userMidName}
              onChange={(e) => setUsermidname(e.target.value)}
              />

            <label htmlFor="email">Email</label>
            <input type="email"
              id="email"
              name="email"
              value={userEmail}
              required
              disabled = {true}
              onChange={(e) => setUserEmail(e.target.value)}
              />

            <label htmlFor="interests">Интересы</label>
            <textarea
              id="interests"
              name="interests"
              value = {userInterests}
              onChange={(e) => setUserInterests(e.target.value)}
              />

            <button type="submit" className="save-button" aria-label="Сохранить изменения" onClick = {handleUserDataChange}>
              Сохранить изменения
            </button>

            <button type="submit" className="save-button" aria-label="Выйти из профиля" onClick = {handleLogout}>
              Выйти из профиля
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;