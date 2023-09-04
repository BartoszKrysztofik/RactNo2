const ProfileDetails = ({ name, nickName, email }) => {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{nickName}</h3>
            <p>Email: {email}</p>
        </div>
    );
}
export default ProfileDetails;
