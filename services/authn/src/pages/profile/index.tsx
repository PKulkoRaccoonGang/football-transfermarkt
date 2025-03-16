

const user = {
  name: "Peter Kulko",
  email: "peter.kulko@gmail.com",
  role: "Admin",
  bio: "Passionate about web development and UI/UX design.",
};

const Profile = (): JSX.Element => {
  return (
		<>
		<div className="content-profile-page">
   <div className="profile-user-page card">
      <div className="img-user-profile">
        <img className="profile-bgHome" src="https://www.arsenal.com/sites/default/files/shorthand/stories/JT2Rr6Lvaf/2023-09-19T11%3A37%3A37.746Z/assets/RFfilWzU53/uefa-champions-league-star-football-logo-8dv90jbvwwhzp9c0-2560x1440.jpg" />
        <img className="avatar" src="https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*" alt="jofpin"/>
           </div>
          <div className="user-profile-data">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
          <div className="description-profile">
						Some description...
					</div>
      </div>
    </div>
		</>
  );
};

export default Profile;
