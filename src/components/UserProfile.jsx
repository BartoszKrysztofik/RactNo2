import ProfileDetails from "./ProfileDetails";
import ProfilePicture from "./ProfilePicture";

const UserProfile = (name, nickName, email) => {
    //na potrzeby poukladania calosci, wstawiam dane ziomka z FakeProfile
    const fakeProfile = {
    name: "Zygryd",
    nickName: "Zigi",
    email: 'zigi@wp.pl'
}
    const profileData = {
        name: `${ fakeProfile.name }`,
        nickName: `${ fakeProfile.nickName }`,
        email: `${fakeProfile.email}`,
        imageSrc: "https://cdn.shopify.com/s/files/1/1541/8579/files/Ravenclaw-harry_potter_large.jpg?v=1491539507"
    }
    return (
        <div>
            <div className="details">
            <ProfileDetails name={profileData.name} nickName={profileData.nickName} email={profileData.email} />
            </div>
            <div className="picture">
            <ProfilePicture src={profileData.imageSrc} />
            </div>    
        </div>

    )
}

export default UserProfile